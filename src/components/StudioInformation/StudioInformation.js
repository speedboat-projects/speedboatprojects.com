import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './StudioInformation.scss';
import DESIGN_SERVICES from '../../constants/design-services';
import CONSTRUCTION_SERVICES from '../../constants/construction-services';
import COLLABORATORS from '../../constants/collaborators';

const StudioInformation = () => (
  <FeedItem
    partialBig
    className="studio-information"
  >
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <div className="header">DESIGN</div>
        <ul>
          {DESIGN_SERVICES.map(service => 
            <li>{service}</li>
          )}
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="header">CONSTRUCTION MANAGEMENT</div>
        <ul>
          {CONSTRUCTION_SERVICES.map(service => 
            <li>{service}</li>
          )}
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="header">WORKING WITH</div>
        <ul>
          {COLLABORATORS.map(collaborator => 
            <li>{collaborator}</li>
          )}
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="header">FOR MORE INFORMATION</div>
        <ul>
          <li>mail@speedboatprojects.com</li>
        </ul>
      </Grid>
    </Grid>
  </FeedItem>
)

export default StudioInformation;