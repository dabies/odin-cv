import { use, useState } from 'react'
import './App.css'
import ResumeHeader from './components/resumeHeader'
import Section from './components/resumeSection'
import TopicHeader from './components/sectionTopic'
import List from './components/list'
import AppButton from './components/button'
import ContactForm from './components/contactHeaderForm'
import Card from './components/card'
import ResumeBodyForm from './components/resumeBodyForm'

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
    location: 'Minneapolis, Minnesota'
  })

  const [showWorkForm, setShowWorkForm] = useState(false);
  const [workData, setWorkData] = useState({
    title: 'Songwriter/Musician',
    date: '1960-Present',
    institution: 'Columbia Records',
    location: 'New York, NY'
  });

  const [showSecondWorkForm, setShowSecondWorkForm] = useState(false);
  const [secondWorkData, setSecondWorkData] = useState({
    title: 'Author',
    date: '2004-Present',
    institution: 'Simon & Schuster Publishing',
    location: 'New York, NY'
  })

  const [showThirdWorkForm, setShowThirdWorkForm] = useState(false);
  const [thirdWorkData, setThirdWorkData] = useState({
    title: 'Visual Artist',
    date: '1990-Present',
    institution: 'Various Galleries',
    location: 'Duluth, MN'
  })

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
      setThirdWorkData(false);
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
        <List bullets={bullets}></List>
      </div>
      <div className="cv-output-content-div">
        <Section name='Work Experience'></Section>
        <TopicHeader
          title={workData.title}
          date={workData.date}
          institution={workData.institution}
          location={workData.location}></TopicHeader>
        <List bullets={bullets}></List>
        <TopicHeader
          title={secondWorkData.title}
          date={secondWorkData.date}
          institution={secondWorkData.institution}
          location={secondWorkData.location}></TopicHeader>
        <List bullets={bullets}></List>
        <TopicHeader
          title={thirdWorkData.title}
          date={thirdWorkData.date}
          institution={thirdWorkData.institution}
          location={thirdWorkData.location}></TopicHeader>
        <List bullets={bullets}></List>
      </div>
      <div className="cv-output-content-div-supplemental">
        <Section name='Relevant Skills'>
        </Section>
        <List bullets={bullets}></List>
      </div>
      <div className="cv-output-content-div-supplemental">
        <Section name='References'>
        </Section>
        <List bullets={bullets}></List>
      </div>
    </div>
      
    </>
  )
}

export default App
