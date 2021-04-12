import React from 'react'
import nb2 from '../Assets/recruitingPage/nb2.svg'
import nb3 from '../Assets/recruitingPage/nb3.svg'
import contract from '../Assets/recruitingPage/contract.png'
import interviews from '../Assets/recruitingPage/interviews.png'
import nb5 from '../Assets/recruitingPage/nb5.svg'
import nb4 from '../Assets/recruitingPage/nb4.svg'

import wave from '../Assets/recruitingPage/wave.svg'
import nb1 from '../Assets/recruitingPage/nb1.svg'


export default function Process() {
  return (
    <div>



      <div>
        <img src={nb1} alt='' />
        {/* <img src={candidates} alt='' /> */}
        <p>Usage of automation and AI to find and engage candidates faster than usual. Apart from an internal network of experts, other  channels of engagement are LinkedIn, Slack, Stackoverflow, Xing and so on. Generally around 10% of candidates respond possitively to enquiries</p>
        <img src={nb2} alt='' />
        <h2>Selecting of Candidates</h2>
        <p>Selection is mainly based on the CV (hard skills) and the communication/writing skills of the candidates. Generally around 4% of candidates, who respond during the finding/sourcing process, are selected</p>
        <img src={nb3} alt='' />
        <img src={interviews} alt='' />
        <h2>Conducting Interviews</h2>
        <p>A 45 minute interview is done, whereby the hard skills of the candidate are verified and the following soft skills are tested: cultural competence, out of the box thinking, communication, adaptability and empathy. Approximately 40% of the candidates at this stage pass the interviews and are presented to the company in question</p>
        <img src={nb4} alt='' />
       
        <img src={wave} alt='' />
        <h2>Accompany Company
Interviews with Candidates</h2>
        <ul>
          <li>
            Coaching of candidates before and after every interview
        </li>
          <li>
            Managing expectation of clients/company before and after every interview
          </li>
          <li>
            About 20% of the candidates presented to companies are finally choosen and offered contracts
          </li>
        </ul>

        <img src={nb5} alt='' />
        <img src={contract} alt='' />
        <h2>Contract Negotiations &
Fall Off Management</h2>
        <ul>
          <li>
            Negotiating the right salary and conditions for candidate and company
        </li>
          <li> Preparing candidate and company for start of working relationship</li>
          <li>
            Making sure both parties are in a long term partnership: Frequent communication between candidate and new superiors, trouble shooting and solution finding in the first 8 weeks of candidate’s contract
          </li>
        </ul>
      </div>
    </div>
  )
}

