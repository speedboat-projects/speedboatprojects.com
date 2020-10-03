import React, { useRef } from 'react'
// import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import './Nav.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import ReactTypeformEmbeded from '../ReactTypeformEmbeded/ReactTypeformEmbeded'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import subCTA from '../../assets/graphics/subscribe-cta.svg'

const Nav = ({ onClick }) => {

    const typeformEmbed = useRef();
    
    const openForm = () => {
        typeformEmbed.current.typeform.open();
    };

    return (
    <Grid container className="nav-container">
        <MaxWidthWrapper>
            <Grid container className="nav-inner" justify="space-between">
                <Grid item className="nav-items" xs={6}>
                    <ul>
                        {/* <li><NavLink exact onClick={onClick} to="/" className="page-link" activeClassName="page-link-active">Speedboat</NavLink></li> */}
                        <li><Link className="page-link" to="test1" spy={true} smooth={true} duration={1000}>Speedboat</Link></li>
                    </ul>
                </Grid>
                <Grid item className="nav-cta" xs={6}>
                    <Grid container spacing={2} justify="flex-end">
                        <Grid item>
                                <ReactTypeformEmbeded
                                popup
                                autoOpen={false}
                                url="https://speedboatprojects.typeform.com/to/CrA1fmIk"
                                hideHeaders
                                hideFooter
                                buttonText="SHOP"
                                style={{ top: 100 }}
                                ref={tf => {
                                    typeformEmbed.current = tf;
                                }}
                                />
                                <button className="btn" onClick={openForm} style={{ cursor: 'pointer' }}>
                                   SHOP
                                </button>
                        </Grid>
                        <Grid item>
                            <a href="https://workshop.speedboatprojects.com/" target="_blank" className="cta-wrapper">
                                <img src={subCTA}/>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Nav;