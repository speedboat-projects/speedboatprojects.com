import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Contact.scss';
import PageContainer from '../../components/PageContainer/PageContainer'

const Contact = () => (
  <PageContainer className="contact">
    <Grid container>
      <Grid item xs={12} sm={4} className="spacer"/>
      <Grid item xs={12} sm={8} md={6} lg={5} xl={4} className="description">
        <p>Taylor Zanke<br/>Los Angeles, CA</p>
        <p>taylor@taylorzankeoffice.com<br/>+ 1 917 826 7277</p>
        <Grid item container xs={12}>
          <p>Please send me an email to start or <br/>discuss a new project or collaboration.</p>
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
);

export default Contact;
