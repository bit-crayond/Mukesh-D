import { Height } from "@mui/icons-material"

const styles = {

    body: 
    {
        fontFamily: "Poppins, sans-serif",
    },
    
    cards: 
    {
        padding: "12px ",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        marginTop : '50px',
        marginLeft : '120px',
        position:'relative'
        
        
    },
    
    boxes:
    {
        
        display: "flex",
        flexDirection: "row",   
        
    },
    
    label :
    {
        padding : '4px 20px',
        background: '#27AE61',
        borderRadius: '7px',
        border : 'none',
        color : 'white',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        position : 'absolute',
        
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
        marginLeft : '80px'
        
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
        fontSize : '15px',
        marginTop : '20px'
        
    },
    
    redflag :
    {
        
        padding : '5px',
        marginTop : '10px',
        marginBottom : '15px',
        color : '#E74C3C',
        background: '#E74C3C14',
        borderRadius : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : '15px'
        
    },
    
    overdue:
    {
        
        
        color : '#E74C3C',
        background: '#E74C3C14',
        borderRadius : '6px',
        padding : '5px',
        marginTop  : '10px',
        marginBottom : '17px',
        textAlign : 'center',
        border : '2px solid #E74C3C90', 
        marginLeft : '10px'
        
    },
    
    infoicon:
    {
        
        color : '#8D8D8D',
        marginTop : '13px',
        marginLeft : '35px'
        
    },
    
    
    staricon :
    {
        
        color : '#F39C12',
        marginTop : '13px',
        marginLeft : '10px'
        
    },
    
    verticon:
    {
        
        color : '#8D8D8D',
        marginTop : '14px',
        marginLeft : '5px'
        
    },
    
    content:
    {
        
        padding : '10px 2px',
        fontSize : '18px',
        size : '1rem'
        
    },
    
    butto:
    {
        
        marginTop : '5px',
        color : '#535353',
        borderRadius : '5px',
        padding : '66px 20px',
        fontSize : '13px',
        fontWeight : '1000',
        padding : '10px',
        marginLeft : '4.3px',
        backgroundColor : '#C6C6C63D'
        
    },
    
    icons1:
    {
        
        marginTop : '23px',
        marginLeft : '10px',
        color : '#8D8D8D',
        fontWeight : '500',
        
    },

    circle:
    {

        marginTop:'25px',
        marginLeft : '5px',

    },

    icons2:
    {
        
        paddingRight : '17px',
        color : '#8D8D8D',
        marginTop : '15px',
        marginBottom : '15px',
        marginLeft : '17%',
        display:'flex',
        alignItems : 'center',
        justifyContent : 'center',
        border : '2px solid #E4EAEE',
        borderRadius: '9px',
        '& .MuiBadge-dot' : {
            padding : '4px',
        }
        
    },
    
    // dot :
    // {

    //     color :'red',
    //     position :'absolute',
    //     left : '26.5%',
    //     top:'45%',
    //     fontSize : 'small'

    // },
        
    icons3:
    {
        
        padding : '4px',
        marginTop : '15px',
        marginBottom : '15px',
        marginLeft : '10px',
        border : '2px solid #E4EAEE',
        color : 'black',
        borderRadius: '5px',
        fontWeight : '500'

    },
    
    divider:
    {
        
        border : '2px dashed #C6C6C63D',
        
    },

    footer1:
    {
        marginTop : '10px'

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
        marginLeft : '70px', 
        marginTop : '20px',
        
    },
    
    footer4:
    {
        
        padding : '5px',
        color : '#00B7A8',
        border : '2px dotted #00B7A8',
        borderRadius : '100%',
        marginTop : '10px',
        marginLeft : '65px', 
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',

    }

}

export default styles