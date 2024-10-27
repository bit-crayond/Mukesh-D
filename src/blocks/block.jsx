import styles from './deco';
import{ErrorIcon,Box,Badge,Card,TourIcon,InfoIcon,StarIcon,MoreVertIcon,Targeticon,Noteicon,Flowicon,Dataicon,Personicon,Divider,Avatar,AvatarGroup,Timericon,Convoicon,Downicon,Doticon, CircularProgress,Typography} from './import'
import flagicon from './images/flagicon.png'
import avatar1 from './images/avatar1.jpg'
import avatar2 from './images/avatar2.jpeg'
import avatar3 from './images/avatar3.jpeg'
import { FormControl, Grid, InputLabel, NativeSelect } from '@mui/material';

export default function Block()
{

    const features = ['5157-Feature' , 'Goal' , '#Colabo']
    
    return(
        
        <Box sx={styles.body}>
        <Card sx={styles.cards}>

            <Box sx={styles.boxes}>
                <Box component="button" sx={styles.label}>Label</Box>
                <Box component="button" sx={styles.risk}>
                    <Box sx={styles.riskicon}><ErrorIcon style={{height : '13px',width : '13px'}}/></Box>
                    <Box sx={styles.risktxt}>Risk</Box>
                </Box>
            </Box>

            <Box sx={styles.boxes}>
                    <Box sx={styles.calendar}><b>Jun 29,2021 . 8:00 PM</b></Box>
                    <Box sx={styles.redflag} title = "Critical"><img src={flagicon}/></Box>
                    <Box sx={styles.overdue}><b>Overdue</b></Box>
                    <InfoIcon sx={styles.infoicon}/>
                    <StarIcon sx={styles.staricon}/>
                    <MoreVertIcon sx={styles.verticon}/>
            </Box>

                <Box sx={styles.content}><b>Competition of productivity framework design on or before July 7th,2021.</b></Box>
                
            <Box sx={styles.boxes}>
                {
                    features.map( ( content , index  ) => [

                        <Box  key={index} sx={styles.butto} >{content}</Box>

                    ] )
                }
            </Box>

            <Box sx={styles.boxes}>
                
                <Targeticon sx={styles.icons1}/>
                <Noteicon sx={styles.icons1}/>
                <Flowicon sx={styles.icons1}/> 
                <Grid><CircularProgress variant='determinate' value={35} color='success' size={'1.5rem'} sx={styles.circle}/></Grid>
                <Typography sx={styles.icons1}>35%</Typography>
                <Badge variant='dot' color='error' sx={styles.icons2}><Personicon/><b style={{color : 'black',marginLeft:'2px'}}>4</b></Badge>    
                {/* <Box sx={styles.dot}><Doticon/></Box> */}

                    <NativeSelect defaultValue='Pending' sx={styles.icons3}>

                      <option value='pending'>Pending</option>
                      <option value='completed'>Completed</option>

                    </NativeSelect>
        

            </Box>

            <Box sx={styles.divider}><Divider/></Box>

            <Box sx={styles.boxes} >
            <AvatarGroup max={3} sx={styles.footer1} >
                <Avatar alt="Remy Sharp" src={avatar1} />
                <Avatar alt="Travis Howard" src={avatar2} />
                <Avatar alt="Cindy Baker" src={avatar3} />
                <Avatar alt="Agnes Walker"/>
            </AvatarGroup>
                <Box sx={styles.footer2}><Timericon/><b>Est. 2h 30 m</b></Box>
                <Box sx={styles.footer3}><b style={{color : '#535353' }}>Discuss</b></Box>
                <Box sx={styles.footer4}><Convoicon/></Box>
            </Box>

        </Card>
        </Box>

    )

}