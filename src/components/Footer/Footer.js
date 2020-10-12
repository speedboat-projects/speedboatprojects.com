import React from 'react'
import './Footer.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FOOTER_CONTENT from '../../constants/footerContants'

const Footer = () => {

    const {Description, Divisions, People, Friends, Social} = FOOTER_CONTENT;

    function nameList(names) {
        const listItems = names.map((name) =>
          <li>
            {name}
          </li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }

    return (
        <Grid container className="footer-container">
        <MaxWidthWrapper>
        <Element name="test1"/>
            <Grid container className="footer-description">
                <Grid item xs={12} className="description-text">
                    <p>{Description.para1}</p>
                    <p>{Description.para2}</p>
                </Grid>
            </Grid>
            <Grid container spacing={10} className="footer-details">   
                        {Divisions.map(({ title, text }) => (
                        <Grid item xs={4} className="footer-item design-services">
                            <div className = "footer-item design-services-title">
                                <b>{title}</b>
                            </div>
                            <td key={`tablevalue-${text}`}>{text}</td>
                        </Grid>
                        ))}
                 <Grid item xs={12} className="footer-item people">
                        <div className = 'footer-item people-title'>
                            <b>{People.title}</b>
                        </div>
                        <Grid container spacing={10}>
                            {People.peoples.map(({text }) => (
                                <Grid item xs={6} className="footer-item people-list" wrap='nowrap'>
                                    <td key={`tablevalue-${text}`}>{text}</td>
                                </Grid>
                            ))}
                        </Grid>
                 </Grid>
                 <Grid item xs={12} className="footer-item friends">
                        <div className="header-text">
                            <b>{Friends.title}</b>
                        </div>
                        <Grid container spacing={10} className="footer-item friends-list">
                            {Friends.lists.map(({list}) => (
                            <Grid item xs={4} className="footer-item friends-item">
                                {nameList(list)}
                            </Grid>
                            ))}
                        </Grid>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Footer;