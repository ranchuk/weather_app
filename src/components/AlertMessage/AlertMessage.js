import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(2),
        },
    },
}));


export default function CustomizedSnackbars() {
    const alerts = useSelector((state) => state.alerts)
    const prevAlerts = useState([])
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    useEffect(()=>{
        setOpen(true)
    }, [alerts])

    return (
            <AlertStyle>
            {/* <div className={classes.root}> */}
                            {alerts.messages[0] && <div><Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                <Alert onClose={handleClose} severity={alerts.messages[0].type}>{alerts.messages[0].message}</Alert>
                            </Snackbar>
                            </div>}
                })
            {/* </div> */}
            </AlertStyle>
        // <AlertStyle>
        //     {/* <div className={classes.root}> */}
        //         {alerts.messages.map((alert)=>{
        //             return  <div><Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        //                         <Alert onClose={handleClose} severity={alert.type}>{alert.message}</Alert>
        //                     </Snackbar>
        //                     </div>
        //         })
        //         }
        //     {/* </div> */}
        // </AlertStyle>
    );
  }

  const AlertStyle = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  `