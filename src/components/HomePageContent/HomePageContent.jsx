import React from "react";
import "./HomePageContent.css";
import CoursesImage from "../../static/Courses.png";
import CollaborationImage from "../../static/Collaborations.png";


function HomePageContent(){
    return(
        <div className="HomePageContentContainer">
            <div>
                <h1 style={{marginLeft : "50px", fontSize : "40px"}}>Courses</h1>
                <div className="HomePageCourses">
                    <div>
                        <img src={CoursesImage} alt="Courses" />
                    </div>
                    <div>
                        <p style={{fontSize : "21px", fontWeight : "500",textAlign: "left"}}>Anna University (AU), a premier technical university, plans to offer ‘Certificate Courses’ to address technological advancements and shifts in teaching and learning. This initiative aims to upskill youth and professionals, enhancing access to quality education. AU seeks collaboration with EdTech firms for this program. The university boasts over 500 qualified faculty members across Engineering, Technology, Applied Sciences, Humanities, and Management.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 style={{marginLeft : "50px", fontSize : "40px", textAlign: "center"}}>Collaborations</h1>
                <div className="HomePageCollaborations">
                    <div>
                        <p style={{fontSize : "21px", fontWeight : "500", textAlign: "center"}}>Join the forces with leading companies to access top-notch courses. Enhance your skills and stay ahead with expert-led training from industry leaders. Collaborate for growth and success in your professional journey. Start learning today!</p>
                    </div>
                    <div>
                        <img src={CollaborationImage} alt="Courses" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageContent;