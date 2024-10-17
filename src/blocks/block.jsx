import styles from './deco';
import{ErrorIcon,Box,TourIcon,InfoIcon,StarIcon,MoreVertIcon,Targeticon,Noteicon,Flowicon,Dataicon,Personicon,Divider,Avatar,AvatarGroup,Timericon,Convoicon,Downicon,Doticon} from './import'
import profiles from './images/profiles.png'
import target from './images/target.png'
import clipboard from './images/clipboard.png'
import flow from './images/flow.png'
import percentage from './images/percentage.png'

export default function Block()
{

    return(
        
<Box sx={styles.body}>
        <Box sx={styles.cards}>

            <Box sx={styles.boxes}>
                <Box component="button" sx={styles.label}>Label</Box>
                <Box component="button" sx={styles.risk}>
                    <Box sx={styles.riskicon}><ErrorIcon style={{height : '13px',width : '13px'}}/></Box>
                    <Box sx={styles.risktxt}>Risk</Box>
                </Box>
            </Box>

            <Box sx={styles.boxes}>
                    <Box sx={styles.calendar}><b>Jun 29,2021 . 8:00 PM</b></Box>
                    <Box sx={styles.redflag} title = "Critical"><TourIcon /></Box>
                    <Box sx={styles.overdue}><b>Overdue</b></Box>
                    <Box sx={styles.infoicon}><InfoIcon/></Box>
                    <Box sx={styles.staricon}><StarIcon/></Box>
                    <Box sx={styles.verticon}><MoreVertIcon/></Box>
            </Box>

                <Box sx={styles.content}><b>Competition of productivity framework design on or before July 7th,2021.</b></Box>
                
            <Box sx={styles.boxes}>
                <Box component="button" sx={styles.butto}><b>5157-Feature</b></Box>
                <Box component="button" sx={styles.butto}><b>Goal</b></Box>   
                <Box component="button" sx={styles.butto}><b>#Colabo</b></Box>
            </Box>

            <Box sx={styles.boxes}>
                <Box sx={styles.icons1} title='Goals(2)'><img src={target}/></Box>
                <Box sx={styles.icons1} title='Tasks(2)'><img src={clipboard}/></Box>   
                <Box sx={styles.icons1} title='Workflow'><img src={flow}/></Box>
                <Box sx={styles.icons1}><img src={percentage}/></Box>
                <Box sx={styles.icons2}><Personicon/><b style={{color : 'black',marginLeft:'2px'}}>4</b></Box>
                <Box sx={styles.dot}><Doticon/></Box>
                <Box sx={styles.icons3}><b>Pending</b><Downicon/></Box>
            </Box>

            <Box sx={styles.divider}><Divider/></Box>

            <Box sx={styles.boxes}>
                <Box sx={styles.footer1}><img src={profiles}/></Box>
                <Box sx={styles.footer2}><Timericon/><b>Est. 2h 30 m</b></Box>
                <Box sx={styles.footer3}><b style={{color : '#535353' }}>Discuss</b></Box>
                <Box sx={styles.footer4}><Convoicon/></Box>
            </Box>

        </Box>
        </Box>

    )

}