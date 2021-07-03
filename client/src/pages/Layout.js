import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import {  AddCircleOutlined, SubdirectoryArrowRight, SubjectOutlined } from "@material-ui/icons";
import {  useHistory, useLocation } from "react-router-dom";


   const drawerWidth = 240 

  const useStyles= makeStyles((theme)=>
  {
       return {
        page:{
            width: '100%',
            background : '#f9f9f9',
            padding: theme.spacing(2)
        },
        drawer:{
               width: drawerWidth
  
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display:'flex'
        },
        active:{
            background:'#18dcff'
        },
        appbar:{
            width: `calc(100% - ${drawerWidth}px)`,
            background : '#18dcff',
            color : 'black'
        },
        toolbar: theme.mixins.toolbar,
        date:{
                flexGrow:1
        },
        avatar:{
            padding:10
        }
    }
      
  })
     const items = [
         {
             title:'My Weapons',
             path:'/',
             icon:<SubjectOutlined color='secondary'/>
         },
         {
            title:'Create new Weapon',
            path:'/create',
            icon:<AddCircleOutlined color='secondary'/>
        }
        
     ]

const Layout = ({children}) => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    return ( 
         <>
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                        Welcome to PUBG Guns & Ammunition
                    </Typography>
                    <Typography className={classes.avatar}>
                        <a href="https://www.instagram.com/suneel_pradeep"><Avatar src='/me.jpeg'/></a>
                    </Typography>
                    <a href='https://www.instagram.com/suneel_pradeep' className='text-decoration-none text-reset'><Typography>
                        Suneel
                    </Typography></a>
                </Toolbar>
            </AppBar>

         <Drawer className={classes.drawer}
             variant='permanent'
             anchor='left'
             classes={{paper: classes.drawerPaper}}
            ><Typography variant='h5'gutterBottom className='my-4 mx-auto'>
                     Lock & Loaded
                     <hr />
            </Typography>
              <List>
                  {items.map(item => (
                      <ListItem button key={item.title} 
                      onClick={()=> history.push(item.path)}
                      className={ location.pathname === item.path ? classes.active : null}
                      >
                               <ListItemIcon >{item.icon}</ListItemIcon>
                               <ListItemText>{item.title}</ListItemText>
                      </ListItem>
                  ))}
                  <a href='https://pubgmobile.fandom.com/wiki/Weapons' className='text-decoration-none text-reset' ><ListItem button>
                      
                    <ListItemIcon><SubdirectoryArrowRight color='secondary' /></ListItemIcon>
                  <ListItemText>{"Know more Info ?"}</ListItemText>
                  </ListItem>
                  </a>
                 
              </List>
            </Drawer>
            
         
        <div className={classes.page}>
            <div className={classes.toolbar} />
            {children}
        </div>
        </div>
        </>
     );
}
 
export default Layout;