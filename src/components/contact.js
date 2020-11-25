import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>John Doe</h2>
                            <img 
                            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png"
                            alt="avatar"
                            style={{height:'250px'}}
                            />
                            <p style={{width:'75%', margin:'auto',paddingTop:'1em',}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (+34 123-24-45)
                                </ListItemContent>
                            </ListItem>
                          <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-fax" aria-hidden="true"/>
                                (+34 123-24-45)
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                name@domain.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                MySkypeId
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        );
    }

}
export default Contact;
