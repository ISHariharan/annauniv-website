import React from "react";
import styles from "./Signup.css";
import axios from "axios";

function Signup(){
    const handleData = async () => {
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmpassword").value;
        var education = document.getElementById("education").value;
        var gender = document.getElementById("gender").value;
        var nationality = document.getElementById("nationality").value;
        var aadhar = document.getElementById("aadhar").value;
        var Certificate = 'none';
        console.log(firstname);
        console.log(lastname);
        
        if(password === confirmPassword){
            await axios({
                url : "http://localhost:3001/storedata",
                method : "get",
                params : {firstname, lastname, age, email, password, education, gender, nationality, aadhar, Certificate}
            }).then((res => {
                if (res.data.success) {
                    // alert("data stored successfully")
                    window.location.href = "/login";
                }
            })).catch(err => {
                console.log("error reason : ",err.message)
            })
        }else {
            alert("password is not same");
        }
        
    }


    return(
        <div>
            <div className={styles.inputSignup}>
                <div><p>First Name : </p></div>
                <div><input type="text" placeholder="First Name" id="firstname" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Last Name : </p></div>
                <div><input type="text" placeholder="Last Name" id="lastname" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Age : </p></div>
                <div><input type="text" placeholder="Age" id="age" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Email Id : </p></div>
                <div><input type="text" placeholder="Email Id" id="email" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Password : </p></div>
                <div><input type="password" placeholder="Password" id="password" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Confirm Password : </p></div>
                <div><input type="text" placeholder="ConfirmPassword" id="confirmpassword" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Education Status : </p></div>
                <div>
                    <select name="education" id="education" >
                        <option value="10th ">10th</option>
                        <option value="12th">12th</option>
                        <option value="Bachelor">Bachelor's degree </option>
                        <option value="Masters ">Master's degree </option>
                        <option value="Ph.d">Ph.d</option>
                    </select>
                </div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Gender : </p></div>
                <div><input type="text" placeholder="gender" id="gender" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Nationality : </p></div>
                <div><input type="text" placeholder="Nationality" id="nationality" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Aadhar : </p></div>
                <div><input type="text" placeholder="Aadhar" id="aadhar" /></div>
            </div>
            <div className={styles.inputSignup}>
                <div><p>Enter the Certificate : </p></div>
                <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }} 
                />
            </div>
            <div>
                <button onClick={handleData}>Sign Up</button>
            </div>
        </div>
    );
}

export default Signup;