import { use, useState } from 'react'
import './App.css'
import ResumeHeader from './components/resumeHeader'
import Section from './components/resumeSection'
import TopicHeader from './components/sectionTopic'
import List from './components/skillsList'
import AppButton from './components/button'
import ContactForm from './components/contactHeaderForm'
import Card from './components/card'
import ResumeBodyForm from './components/resumeBodyForm'
import SkillsForm from './skillsForm'
import BulletsList from './resumeList'

function App() {
  const bullets = ['did some stuff', 'did some more stuff', 'did one other thing, this one was really important and made me valuable']
  const [showContactForm, setShowContactForm] = useState(false);
  const [headerData, setHeaderData] = useState({
      fullName: 'Bob Dylan',
      email: 'bob@music.com',
      phoneNumber: '425-867-5309'
  });

  const [showEducationForm, setShowEducationForm] = useState(false);
  const [educationData, setEducationData] = useState({
    title: 'Art Degree',
    date: '1959-1960',
    institution: 'University of Minnesota',
    location: 'Minneapolis, Minnesota',
    bullet1: 'Attended University for one semester in late teens',
    bullet2: 'Studied liberal arts',
    bullet3: 'Left school to follow dream of being a musician',
    bullet4: '',
    bullet5: ''
  })

  const [showWorkForm, setShowWorkForm] = useState(false);
  const [workData, setWorkData] = useState({
    title: 'Songwriter/Musician',
    date: '1960-Present',
    institution: 'Columbia Records',
    location: 'New York, NY',
    bullet1: 'Wrote, recorded, and performed hundreds of original songs across various genres, including folk, rock, blues, and country.',
    bullet2: 'Released over 39 studio albums, numerous live albums, and compilations, achieving critical acclaim and commercial success.',
    bullet3: 'Adapted and evolved his musical style over decades, remaining relevant and innovative.',
    bullet4: '',
    bullet5: ''
  });

  const [showSecondWorkForm, setShowSecondWorkForm] = useState(false);
  const [secondWorkData, setSecondWorkData] = useState({
    title: 'Author',
    date: '2004-Present',
    institution: 'Simon & Schuster Publishing',
    location: 'New York, NY',
    bullet1: 'Wrote and published the critically acclaimed memoir Chronicles: Volume One, demonstrating literary skill and storytelling ability',
    bullet2: 'Published collections of his lyrics, solidifying his status as a significant poet',
    bullet3: 'Recognized with Pulitzer Prize and Nobel Prize in literature',
    bullet4: '',
    bullet5: '',
  })

  const [showThirdWorkForm, setShowThirdWorkForm] = useState(false);
  const [thirdWorkData, setThirdWorkData] = useState({
    title: 'Visual Artist',
    date: '1990-Present',
    institution: 'Various Galleries',
    location: 'Duluth, MN',
    bullet1: 'Created and exhibited numerous collections of paintings, drawings, and ironwork sculptures in galleries internationally',
    bullet2: 'Developed a distinct artistic style across various mediums',
    bullet3: 'Authored and published books featuring his visual art',
    bullet4: '',
    bullet5: ''
  })

  const [showSkillsForm, setShowSkillsForm] = useState(false);
  const [skillsData, setSkillsData] = useState({
    skill1: 'Songwriting',
    skill2: 'Singing',
    skill3: 'Guitar',
    skill4: 'Harmonica',
    skill5: 'Poetry',
    skill6: 'Creative Writing',
    skill7: 'Visual Arts',
    skill8: 'Adaptability',
    skill9: 'Independence & Self-Direction',
    skill10: 'Cultural Influence',
  })
  console.log(skillsData);

  function editFormButtonClick(buttonLocation) {
    if(buttonLocation === 'header') {
      setShowContactForm(true);
    } else if (buttonLocation === 'education') {
      setShowEducationForm(true);
    } else if (buttonLocation === 'work') {
      setShowWorkForm(true);
    } else if(buttonLocation === 'secondWork') {
      setShowSecondWorkForm(true);
    } else if(buttonLocation === 'thirdWork') {
      setShowThirdWorkForm(true);
    } else if(buttonLocation === 'skills') {
      setShowSkillsForm(true);
    }
    
  }

  function handleSubmission(newData, formLocation) {
    if(formLocation === 'header') {
      setHeaderData(newData);
      setShowContactForm(false);
    } else if (formLocation === 'education') {
      setEducationData(newData);
      setShowEducationForm(false);
    } else if(formLocation === 'work') {
      setWorkData(newData);
      setShowWorkForm(false);
    } else if(formLocation === 'secondWork') {
      setSecondWorkData(newData);
      setShowSecondWorkForm(false);
    } else if(formLocation === 'thirdWork') {
      setThirdWorkData(newData);
      setShowThirdWorkForm(false);
    } else if(formLocation === 'skills') {
      setSkillsData(newData);
      setShowSkillsForm(false);
    }
    
  }

  function handleExit(exitLocation) {
    if(exitLocation === 'header') {
      setShowContactForm(false);
    } else if(exitLocation === 'education') {
      setShowEducationForm(false);
    } else if(exitLocation === 'work') {
      setShowWorkForm(false);
    } else if(exitLocation === 'secondWork') {
      setShowSecondWorkForm(false);
    } else if(exitLocation === 'thirdWork') {
      setShowThirdWorkForm(false);
    } else if(exitLocation === 'skills') {
      setShowSkillsForm(false);
    }
    
  }

  return (
    <>
    <div className='cv-input-container'>
      <div>
        {showContactForm?
         <Card>
          <ContactForm initialValues={headerData} onSubmission={handleSubmission} onExit={() => handleExit('header')} formLocation='header'></ContactForm>
          </Card> :
          <AppButton onClick={() => editFormButtonClick('header')}>
            Edit Header Info</AppButton>}
      </div>
      <div>
        {showEducationForm?
          <Card>
            <ResumeBodyForm initialValues={educationData} onSubmission={handleSubmission} onExit={() => handleExit('education')} formLocation='education'></ResumeBodyForm>
            </Card> :
            <AppButton onClick={() => editFormButtonClick('education')}>
              Edit Education Info</AppButton>}
      </div>
      <div>
        {showWorkForm? 
          <Card>
            <ResumeBodyForm 
            onSubmission={handleSubmission} 
            initialValues={workData} 
            onExit={() => handleExit('work')} 
            formLocation='work'></ResumeBodyForm> 
          </Card> :
            <AppButton onClick={() => editFormButtonClick('work')}>Edit Work History</AppButton>
          }
      </div>
      <div>
        {showSecondWorkForm?
        <Card>
          <ResumeBodyForm
          onSubmission={handleSubmission}
          initialValues={secondWorkData}
          onExit={() => handleExit('secondWork')}
          formLocation='secondWork'></ResumeBodyForm>
        </Card> :
        <AppButton onClick={() => editFormButtonClick('secondWork')}>Edit Work History</AppButton>
          }
      </div>
      <div>
        {showThirdWorkForm?
        <Card>
          <ResumeBodyForm
          onSubmission={handleSubmission}
          onExit={() => handleExit('thirdWork')}
          initialValues={thirdWorkData}
          formLocation='thirdWork'></ResumeBodyForm>
        </Card> :
        <AppButton onClick={() => editFormButtonClick('thirdWork')}>Edit Work History</AppButton>}
      </div>
      <div>
        {showSkillsForm?
        <Card>
          <SkillsForm
          initialValues={skillsData}
          formLocation='skills'
          onExit={() => handleExit('skills')}
          onSubmission={handleSubmission}></SkillsForm>
        </Card> :
        <AppButton onClick={() => editFormButtonClick('skills')}>Edit Skills</AppButton>}
      </div>
    </div>
    <div className='cv-output-container'>
      <ResumeHeader 
      fullName={headerData.fullName} 
      email={headerData.email} 
      phoneNumber={headerData.phoneNumber}>
      </ResumeHeader>
      <div className="cv-output-content-div">
        <Section name='Education'></Section>
        <TopicHeader
          title={educationData.title}
          date={educationData.date}
          institution={educationData.institution}
          location={educationData.location}></TopicHeader>
        <BulletsList 
          bullet1={educationData.bullet1}
          bullet2={educationData.bullet2}
          bullet3={educationData.bullet3}
          bullet4={educationData.bullet4}
          bullet5={educationData.bullet5}></BulletsList>
      </div>
      <div className="cv-output-content-div">
        <Section name='Work Experience'></Section>
        <TopicHeader
          title={workData.title}
          date={workData.date}
          institution={workData.institution}
          location={workData.location}></TopicHeader>
        <BulletsList 
        bullet1={workData.bullet1}
        bullet2={workData.bullet2}
        bullet3={workData.bullet3}
        bullet4={workData.bullet4}
        bullet5={workData.bullet5}></BulletsList>
        <TopicHeader
          title={secondWorkData.title}
          date={secondWorkData.date}
          institution={secondWorkData.institution}
          location={secondWorkData.location}></TopicHeader>
        <BulletsList 
          bullet1={secondWorkData.bullet1}
          bullet2={secondWorkData.bullet2}
          bullet3={secondWorkData.bullet3}
          bullet4={secondWorkData.bullet4}
          bullet5={secondWorkData.bullet5}></BulletsList>
        <TopicHeader
          title={thirdWorkData.title}
          date={thirdWorkData.date}
          institution={thirdWorkData.institution}
          location={thirdWorkData.location}></TopicHeader>
        <BulletsList 
          bullet1={thirdWorkData.bullet1}
          bullet2={thirdWorkData.bullet2}
          bullet3={thirdWorkData.bullet3}
          bullet4={thirdWorkData.bullet4}
          bullet5={thirdWorkData.bullet5}></BulletsList>
      </div>
      <div className="cv-output-content-div-supplemental">
        <Section name='Relevant Skills'>
        </Section>
        <List 
        skill1={skillsData.skill1}
        skill2={skillsData.skill2}
        skill3={skillsData.skill3}
        skill4={skillsData.skill4}
        skill5={skillsData.skill5}
        skill6={skillsData.skill6}
        skill7={skillsData.skill7}
        skill8={skillsData.skill8}
        skill9={skillsData.skill9}
        skill10={skillsData.skill10}
        ></List>
      </div>
      <div className="cv-output-content-div-supplemental">
        <Section name='References'>
        </Section>
        <ul>
          <li>References available upon request.</li>
        </ul>
      </div>
    </div>
      
    </>
  )
}

export default App
