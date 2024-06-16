import React from "react";
import axios from "axios";

function Sample() {
    const handleClick = async () => {
        try {
            const response = await axios.post("http://localhost:3001/postdata", {
                Firstname: "hari",
                Lastname: "haran"
            });
            console.log("User saved:", response.data);
        } catch (error) {
            console.error("Error saving user:", error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Sample;
