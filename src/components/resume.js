import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import avatar from '../img/avatar512x512.png';
import Education from './education.js'
import Experience from './experience.js'
import Skills from './skills.js';
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                       <div style={{textAlign:'center'}}>
                            <img src={avatar} alt="avatar" style={{height:'200px'}}/>
                       </div> 
                        <h2 style={{paddingTop:'2em'}}>John Doe</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <h5>Address</h5>
                        <p>Baker street 221B, (Westminster) NW1 6XE</p>
                        <h5>Phone</h5>
                        <p>(+34 123-24-45)</p>
                        <h5>Email</h5>
                        <p>name@domain.com</p>
                        <h5>website</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                    <Education
                        startYear={2000}
                        endYear={2002}
                        schoolName="My University"
                        schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        />
                    <Education
                        startYear={2002}
                        endYear={2006}
                        schoolName="My 2nd University"
                        schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                         startYear={2011}
                         endYear={2019}
                         jobName="Second job"
                         jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        />    

                        <Experience
                         startYear={2007}
                         endYear={2010}
                         jobName="First job"
                         jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        />    
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <Skills
                        skill="javascript"
                        progress={50}
                        />
                        <Skills
                        skill="React"
                        progress={25}
                        />

                        <Skills
                        skill="NodeJs"
                        progress={15}
                        />

                    <Skills
                        skill="HTML/CSS"
                        progress={90}
                        />

                    </Cell>
                </Grid>
              
            </div>
        );
    }

}
export default Resume;
