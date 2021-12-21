import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const ProfileCard = ({src, title, subSpecialities}) => {
    return (
        <div>
            <Card sx={{display: "flex", padding: "10px 24px" }}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Avatar alt={title} src={src}/>
                </Box>
                <div> 
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            { (subSpecialities && subSpecialities.length > 0) ? subSpecialities : ' - ' }
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default ProfileCard;