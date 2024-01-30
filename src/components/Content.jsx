//import imgTrash from "../assets/trash.svg";
import imgEducation from "../assets/graduation.svg";
import imgExperience from "../assets/briefcase.svg";
import imgDown from "../assets/down.svg";
import { useState } from "react";
import Curriculum from "./Curriculum";

function Content() {
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState({
    university:'',
    degree:'',
    startEducation:'',
    endEducation:'',

  });

  const [experience, setExperience] = useState({
    company:'',
    position:'',
    startExperience:'',
    endExperience:'',
    description:'',
  });

  const handleInputEducation = (event) => {
    const {name, value} = event.target;
    setEducation({
      ...education,
      [name]:value,
    })
  }

  const handleInputExperience = (event) => {
    const {name, value} = event.target;
    setExperience({
      ...experience,
      [name]:value,
    })
  }


  // const handleFormEducation = (event) => {
  //   event.preventDefault()
  //   console.log(education)
  // } esto va en el form con el submit
  

  const handleArrowClick = () => {
    setIsArrowUp((prev) => !prev);
    setShowExperience(!showExperience);
  };

  const arrowClick = () => {
    setArrowUp((prev) => !prev);
    setShowEducation(!showEducation)
  };

  

  return (
    <>
    
      <div className="containerContent">

        <div className="containerForm">
          <form className="form">
            <h2 className="formH2">Personal Details</h2>
            <label htmlFor="">
              <span className="labelTitle">Full name</span>
            </label>
            <input
              type="text"
              className="input"
              placeholder="First and last name"
              onChange={ev => setName(ev.target.value)}
            />

            <label htmlFor="" className="formLabel">
              <span className="labelTitle">Email</span>
              <span className="spanRecommended">recommended</span>
            </label>
            <input 
            type="email"
             className="input" 
             placeholder="Enter email"
             onChange={ev => setEmail(ev.target.value)}
              />

            <label htmlFor="" className="formLabel">
              <span className="labelTitle">Phone number</span>
              <span className="spanRecommended">recommended</span>
            </label>
            <input
              type="number"
              className="input"
              placeholder="Enter phone number"
              onChange={ev => setPhone(ev.target.value)}
            />

            <label htmlFor="" className="formLabel">
              <span className="labelTitle">Address</span>
              <span className="spanRecommended">recommended</span>
            </label>
            <input 
            type="text"
             className="input" 
             placeholder="City, country" 
             onChange={ev => setAddress(ev.target.value)}
             />
          </form>
        </div>

        <div className="containerEducation" onClick={arrowClick}>
          <div className="education">
            <img src={imgEducation} alt="" />
            <h2>Education</h2>
            <img
              src={imgDown}
              alt=""
              className={`educationImgDown ${arrowUp ? "rotated" : "return"}`}
            />
          </div>
        </div>

        <div className="containerSonEducation" style={{ display: showEducation ? 'flex' : 'none' }}>
        <form action="" className="formSonEducation">
            
            <input type="text" className="formEducationInput" placeholder="school/university"  onChange={handleInputEducation} name="university" value={education.university}/>

            <input type="text" className="formEducationInput" placeholder="Degree/Field Of Study"  onChange={handleInputEducation} name="degree" value={education.degree}/>

            <input type="number" className="formEducationInput" placeholder="Start Date"  onChange={handleInputEducation} name="startEducation" value={education.startEducation}/>

            <input type="number" className="formEducationInput" placeholder="Graduated Year"  onChange={handleInputEducation} name="endEducation" value={education.endEducation}/>

            {/* <button type="submit" className="formEducationSubmit">Add</button> */}

            {/* <input type="submit" className="formEducationSubmit" value="Add"/> */}
          </form>

        
        </div>

        <div className="containerExperience" onClick={handleArrowClick}>
          <div className="experience">
            <img src={imgExperience} alt="" />
            <h2>Experience</h2>
            <img
              src={imgDown}
              alt=""
              className={`educationImgDown ${isArrowUp ? "rotated" : "return"}`}
            />
          </div>
        </div>

         <div className="containerSonExperience" style={{ display: showExperience ? 'flex' : 'none' }}>
          <form action="" className="formSonExperience">
            
            <input type="text" className="formExperienceInput" placeholder="Company" onChange={handleInputExperience} name="company" value={experience.company}/>

            <input type="text" className="formExperienceInput" placeholder="Position" onChange={handleInputExperience} name="position" value={experience.position}/>

            <input type="number" className="formExperienceInput" placeholder="Start Date" onChange={handleInputExperience} name="startExperience" value={experience.startExperience}/>

            <input type="number" className="formExperienceInput" placeholder="End Date" name="endExperience" onChange={handleInputExperience} value={experience.endExperience}/>

            <textarea name="" id="" cols="30" rows="5" className="formExperienceTextarea" placeholder="Description" name="description" onChange={handleInputExperience} value={experience.description}></textarea>

            {/* <button type="submit" className="formExperienceSubmit">Add</button> */}

            {/* <input type="submit" className="formExperienceSubmit" value="Add"/> */}
          </form>
        
        </div>
      </div>
      <Curriculum
      name={name}
      email={email}
      phone={phone}
      address={address}
      education={education}
      experience={experience}
      />
    </>
  );
}

export default Content;
