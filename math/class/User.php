<?php

class User {
    // Database object
    private $db;

    
    private $id;
    private $email;
    public  $uname;
    private $admin;
    private $rank;
    private $level;
    private $loggedin;
    
    public $name;
    
    public function __construct($db){
        $this->db = $db;
    }

    public function login($uname, $password) {
        if (isset($uname)) {
            // TODO: SQL Injection on POST Data passed to function
            
            $stmt = $this->db->prepare("SELECT * FROM users WHERE `user_name` = ? LIMIT 1");
            $stmt->execute(array($uname));
            
            while($user = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $this->id = $user['user_id'];
                $this->uname = $user['user_name'];
                $this->email = $user['user_email'];
                $this->level = $user['user_level'];
                
                // $this->admin = $user['user_admin'];                
                if ( hash_equals($user['user_password_hash'], crypt($password, $user['user_password_hash'])) ) {
                    $_SESSION['user_id'] = $user['user_id'];
                    $_SESSION['user_name'] = $user['user_name'];
                    $this->loggedin = true;
                } else {
                    echo 'Login Error';
                    // echo 'Hash Error <br />', $user['user_password_hash'], '<br />', crypt($password, $user['user_password_hash']);
                }
            }
        }
    }


    public function logout()
    {
        $this->delCookie();
        $_SESSION = array();
        session_destroy();
        $this->loggedin = false;
    }
    
    public function logout2()
    {
        $_SESSION = array();
        session_destroy();
    }

    

    
    private function newCookie()
    {
        $rand_hash = hash('sha256', mt_rand());
        $stmt = $this->db->prepare("UPDATE users SET user_rememberme_token = :user_rememberme_token WHERE user_id = :user_id");
        $stmt->execute(array(':user_rememberme_token' => $rand_hash, ':user_id' => $_SESSION['user_id']));
        $cookie_start = $_SESSION['user_id'] . ':' . $rand_hash;
        $cookie_hash = hash('sha256', $cookie_start . COOKIE_SECRET_KEY);
        $cookie = $cookie_start . ':' . $cookie_hash;
        setcookie('rememberme', $cookie, time() + COOKIE_RUNTIME, "/", COOKIE_DOMAIN);
    }


    private function delCookie()
    {
        $stmt = $this->db->prepare("UPDATE users SET user_rememberme_token = NULL WHERE user_id = :user_id");
        $stmt->execute(array(':user_id' => $_SESSION['user_id']));
        setcookie('rememberme', false, time() - (3600 * 3650), '/', COOKIE_DOMAIN);
    }


    public function setAvatar($avatar)
    {
        echo 'Setting AVATAR to ',$avatar;
        $stmt = $this->db->prepare("UPDATE users SET user_avatar = :user_avatar WHERE user_id = :user_id");
        $stmt->bindParam(':user_avatar', $avatar,        PDO::PARAM_STR);
        $stmt->bindParam(':user_id',     $this->id,      PDO::PARAM_INT);
        $stmt->execute();
        $this->avatar = $avatar;
    }


    public function load() {
        
        if (isset($_SESSION['user_id'])) {
            $this->id = $_SESSION['user_id'];
            // TODO: SQL Injection on POST Data passed to function
            $stmt = $this->db->prepare("SELECT * FROM users WHERE `user_id` = ? LIMIT 1");
            $stmt->execute(array($this->id));
            
            while($user = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $this->id = $user['user_id'];
                $this->uname = $user['user_name'];
                $this->email = $user['user_email'];
                $this->avatar = $user['user_avatar'];
                $this->level = $user['user_level'];
                // $this->admin = $user['user_admin'];
                $this->loggedin = true;

                
                if (isset($user_rememberme)) {
                    $this->newCookie();
                } else {
                    $this->delCookie();
                }
                

            }
        }
    }


    
    public function getName() {
        return $this->uname;
    }

    public function getRank() {
	return $this->rank;
    }

    public function getLevel() {
	return $this->level;
    }

    
    public function getId() {
        return $this->id;
    }

    public function getAvatar() {
        return $this->avatar;
    }
    
    
    public function isAdmin() {
        if($this->admin == 1) {
            return true;
        }
    }

    public function isLoggedIn() {

	if(!empty($_SESSION['user_id']) && is_numeric($_SESSION['user_id'])) {
	    return true;
	    
	}
	return false;
	/*
	   if($this->loggedin == true){
           return true;
           }
	 */
	
    }


    
    
}
