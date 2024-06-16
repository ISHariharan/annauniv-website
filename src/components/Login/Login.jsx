import React from "react";
import axios from "axios";


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
                window.location.href = "/home";
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