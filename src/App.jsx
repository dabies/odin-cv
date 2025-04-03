import { useState } from 'react'
import './App.css'
import ResumeHeader from './components/resumeHeader'
import Section from './components/resumeSection'
import Topic from './components/sectionTopic'
import TopicHeader from './components/sectionTopic'
import List from './components/list'
import AppButton from './components/button'

function App() {
  const bullets = ['did some stuff', 'did some more stuff', 'did one other thing, this one was really important and made me valuable']
  const [phoneNumber, setNumber] = useState('425-867-5309');

  function changeNumber(number) {
    setNumber(number);
  }
  return (
    <>
    <div className='cv-input-container'>
      <AppButton onClick={() => changeNumber('yo momma')}>Contact</AppButton>
    </div>
    <div className='cv-output-container'>
      <ResumeHeader 
        fullName='Daniel Bies' 
        email='dan@gmail.com' 
        phoneNumber={phoneNumber}>
      </ResumeHeader>
      <div className="cv-output-content-div">
        <Section name='Education'></Section>
        <TopicHeader
          title="Bachelor's of Business Administration"
          date="Graduated May 2018"
          institution="Gonzaga University"
          location="Spokane, WA"></TopicHeader>
        <List bullets={bullets}></List>
      </div>
      <div className="cv-output-content-div">
        <Section name='Work Experience'></Section>
        <TopicHeader
          title="Professional Baseball Player"
          date="June 2018 to Present"
          institution="New York Yankees, Kane County Cougars, Liga de Beisbol Mexicana"
          location="Tampa, FL"></TopicHeader>
        <List bullets={bullets}></List>
        <TopicHeader
          title="Wealth Management Intern"
          date="9/2018 - 1/2019"
          institution="Washington Trust Bank"
          location="Spokane, WA"></TopicHeader>
        <List bullets={bullets}></List>
        <TopicHeader
          title="Bartender"
          date="7/2021 - 9/2021"
          institution="The Slip"
          location="Kirkland, WA"></TopicHeader>
        <List bullets={bullets}></List>
      </div>
      <div className="cv-output-content-div-supplemental">
        <Section name='Skills'>
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
