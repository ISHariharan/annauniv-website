import React from "react";
import "./Introduction.css";
import Achievement1 from "../../static/Achievement1.png";
import Achievement2 from "../../static/Achievement2.png";
import Achievement3 from "../../static/Achievement3.png";
import Achievement4 from "../../static/Achievement4.png";



function Introduction(){
    return (
        <div className="IntroductionContainer">
            <div className="UniversityIntro">
                <h1>Anna University</h1>
                <p style={{marginLeft : "20px",marginRight : "20px"}}>
                Anna University was established on 4 th September, 1978 as a unitary type of University. This University was named after Late Dr.C.N.Annadurai, former Chief Minister of Tamil Nadu. It offers higher education in Engineering, Technology, Architecture and Applied Sciences relevant to the current and projected needs of the society. Besides promoting research and disseminating knowledge gained therefrom, it fosters cooperation between the academic and industrial communities.

The University was formed by bringing together and integrating four well known technical institutions in the city of Madras (now Chennai) namely, 
College of Engineering (CEG) (Established in 1794) Alagappa College of Technology (ACT) (Established in 1944) Madras Institute of Technology (MIT) (Established in 1949) School of Architecture & Planning (SAP) (Established in 1957)

The vision of Anna University is to be a world class institution by producing professionals with high technical knowledge, professional skills and ethical values, and remain as a preferred partner to the industry and community for their economic and social development through excellence in teaching, research and consultancy. Anna University shall be recognized as a point of reference, a catalyst, a facilitator, a trend setter and a leader in technical education.
                </p>
                <button className="Explore-intro">Explore More</button>
            </div>
            <div>
                <div className="AchievementHeading">
                        <h1>Achievements</h1>
                </div>
                <div className="AchievementsContainer">
                    <div className="Achievements">
                        <div>
                            <img src={Achievement1} alt="Achievement" />
                        </div>
                        <div>
                            <p>Anna University was rated fourth among engineering institutions, 10th in the overall university category and 28th for business and management in the National Institutional Ratings Framework for 2018.</p>
                        </div>
                    </div>
                    <div className="Achievements">
                        <div>
                            <img src={Achievement2} alt="Achievement" />
                        </div>
                        <div>
                            <p>University Grants Commission has recognized the achievements of Anna University in the field of Biomedical Instrumentation and provided the University with the coveted status as the University with Potential for Excellence in the field of Bio Medical Engineering and Instrumentation and sanctioned fund of 23 Crores.</p>
                        </div>
                    </div>
                    <div className="Achievements">
                        <div>
                            <img src={Achievement3} alt="Achievement" />
                        </div>
                        <div>
                            <p>University Grants Commission has recognized the achievements of Anna University in the field of Biomedical Instrumentation and provided the University with the coveted status as the University with Potential for Excellence in the field of Bio Medical Engineering and Instrumentation and sanctioned fund of 23 Crores.</p>
                        </div>
                    </div>
                    <div className="Achievements">
                        <div>
                            <img src={Achievement4} alt="Achievement" />
                        </div>
                        <div>
                            <p style={{fontSize: "14px"}}>The Anna University Sports Board ensuring the smooth and efficient conduct of Zonal / Inter-Zonal tournaments involving all the institutions under Anna University, the Anna University Sports Board is constituted with the Vice-Chancellor as President. The members of the Board include Deans / Principals of Constituent and Affiliated Colleges, Faculty members, Physical Directors and Eminent Sports Persons, as per the norms approved by the Syndicate of the University.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;