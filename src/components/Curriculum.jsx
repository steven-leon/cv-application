import imgMail from "../assets/mail.svg";
import imgPhone from "../assets/phone.svg";
import imgLocation from "../assets/location.svg";
function Curriculum({name, email, phone, address, education, experience}) {
    
    return ( 
        <>
          <div className="containerCurriculum">
          
            <div className="header">
            <h1 className="headerH1">{name}</h1>
            <div className="headerContainerInfo">
                <div className="headerInfo"><img src={imgMail} alt="" /><span>{email}</span></div>
                <div className="headerInfo"><img src={imgPhone} alt="" /><span>{phone}</span></div>
                <div className="headerInfo"><img src={imgLocation} alt="" /><span>{address}</span></div>
            </div>
                
            </div>

            <div className="main">
            
                <div className="infoEducation">
                    <h2 className="infoEducationH2">Education</h2>
                    <div className="infoEducationContent">
                        <p>{education.degree}</p>
                        {/* <p>odin | 2023 - 2024</p> */}
                        <p>{education.university} | {education.startEducation} - {education.endEducation}</p>
                    </div>
                    
                </div>

                <div className="infoExperience">
                    <h2 className="infoExperienceH2">Experience</h2>
                    <div className="infoExperienceContent">
                        <div className="experienceContent">
                        <p>{experience.position}</p>
                        <p>{experience.company} | {experience.startExperience} - {experience.endExperience}</p>
                        </div>
                        <p>{experience.description}</p>
                    </div>
                    
                </div>
            </div>
            
          </div>
        </>
     );
}

export default Curriculum;