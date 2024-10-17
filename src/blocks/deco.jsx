import { Title } from "@mui/icons-material"
import { borderRadius, display, fontSize, height, margin, padding, width } from "@mui/system"


const styles = {

    body: 
    {
        fontFamily: "'Poppins', sans-serif"
    },
    
    cards: 
    {
        padding: "12px ",
        borderRadius: "12px",
        border: "2px solid #E4EAEE",
        display: "flex",
        flexDirection: "column",
        marginTop : '150px',
        marginLeft : '120px'
        
        
    },
    
    boxes:
    {
        
        display: "flex",
        flexDirection: "row",
        
    },
    
    label :
    {
        padding : '4px 15px',
        background: '#27AE61',
        borderRadius: '7px',
        border : 'none',
        color : 'white',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
    
    },
    
    risk :
    {   
        
        paddingLeft : '2px',
        background: '#E74C3C 0% 0% no-repeat padding-box',
        borderRadius: '7px',
        border : 'none',
        color : 'white',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : '10px',
        
    },


    riskicon:
    {

       marginTop: '3px',
       marginLeft : '5px'

    },

    risktxt:
    {

        marginLeft : '5px'

    },

    
    alerticon :
    { 
        background: '#FFFFFF 0% 0% no-repeat padding-box'
        
    },
    
    calendar:
    {
        
        color : '#535353',
        fontSize : '13px',
        marginTop : '20px',
        
    },
    
    redflag :
    {
        
        padding : '1px',
        marginTop : '10px',
        marginBottom : '15px',
        color : '#E74C3C',
        background: '#E74C3C14',
        borderRadius : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : '11px'
        
    },
    
    overdue:
    {
        
        
        color : '#E74C3C',
        background: '#E74C3C14',
        borderRadius : '6px',
        padding : '5px',
        marginTop  : '10px',
        marginBottom : '17px',
        marginLeft : '15px',
        textAlign : 'center',
        border : '2px solid #E74C3C90', 
        
    },
    
    infoicon:
    {
        
        color : '#8D8D8D',
        marginTop : '13px',
        marginLeft : '45px'
        
    },
    
    
    staricon :
    {
        
        color : '#F39C12',
        marginTop : '13px',
        marginLeft : '4px'
        
    },
    
    verticon:
    {
        
        color : '#8D8D8D',
        marginTop : '14px',
        marginLeft : '4px'
        
    },
    
    content:
    {
        
        padding : '10px 2px',
        fontSize : '18px',
        
    },
    
    butto:
    {
        
        marginTop : '5px',
        color : '#535353',
        bcackgroundColor : '#C6C6C63D',
        borderRadius : '5px',
        border : 'none',
        padding : '66px 20px',
        fontSize : '13px',
        padding : '10px',
        marginLeft : '4.3px'
        
    },
    
    icons1:
    {
        
        color : '#8D8D8D',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        padding : '3px'
        
    },

    icons2:
    {
        
        paddingRight : '17px',
        color : '#8D8D8D',
        marginTop : '15px',
        marginBottom : '15px',
        marginLeft : '20%',
        display:'flex',
        alignItems : 'center',
        justifyContent : 'center',
        border : '2px solid #E4EAEE',
        borderRadius: '9px'
        
    },
    
    dot :
    {

        color :'red',
        position :'absolute',
        left : '26.5%',
        top:'50%',
        fontSize : 'small'

    },
        
    icons3:
    {
        
        padding : '5px',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : '15px',
        marginBottom : '15px',
        marginLeft : '10px',
        border : '2px solid #E4EAEE',
        borderRadius: '5px',

    },
    
    divider:
    {
        
        border : '2px dashed #C6C6C63D',
        
    },

    footer1:
    {
        marginTop : '15px'

    },

    footer2:
    {

        color : '#535353',
        marginLeft : '8px',
        marginTop : '8px',
        display : 'flex',
        fontSize : '14px',
        alignItems : 'center',
        justifyContent : 'center'
        
    },

    footer3:
    {
        width : '2%',
        marginLeft : '18%', 
        marginTop : '18px',

    },
    
    footer4:
    {
    
        padding : '5px',
        color : '#00B7A8',
        border : '2px dotted #00B7A8',
        borderRadius : '100%',
        marginLeft : '65px',
        marginTop : '10px',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',

    }

}

export default styles