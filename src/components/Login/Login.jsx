import React from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
var cookie = new Cookies();


function Login(){

    const handleLogin = async () =>{
        var username = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        await axios({
            url : "http://localhost:3001/login",
            method : "get",
            params : {username, password}
        }).then((res => {
            if (res.data.success) {
                var fullname = res.data.firstname + " " + res.data.lastname;
                cookie.set("username", fullname);
                console.log(fullname);
                window.location.href = "/userhome";
            }else{
                alert("Invalid username or password");
            }
        })).catch(err => {
            console.log("error reason : ",err.message)
        })
    }

    return (
        <div>
            <div>
                <div><p>Username : </p></div>
                <div><input type="email" id="email" placeholder="email"/></div>
            </div>
            <div>
                <div><p>Password : </p></div>
                <div><input type="password" id="password" placeholder="password" /></div>
            </div>
            <div><button onClick={handleLogin}>Login</button></div>
        </div>
    );
}

export default Login;