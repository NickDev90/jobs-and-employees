import { Grid, CircularProgress } from '@mui/material';
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileGrid = ({profiles = [], loading}) => {

    if(loading || !profiles) {
        return (
            <Grid container justifyContent='center'>
              <CircularProgress/>
            </Grid>
        )
    }
    return (
        <Grid container >
            {profiles.map(
                profile => (
                    <Grid item key={profile.id} sm={6} lg={4} xs={12} p={1}>
                        <ProfileCard 
                            src={profile.avatar}
                            title={profile.name}
                            subSpecialities={profile.job}
                        />
                    </Grid>
                )
            )}
        </Grid>
    );
};

export default ProfileGrid;