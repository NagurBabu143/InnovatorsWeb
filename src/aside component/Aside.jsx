import React, { useState } from "react";
import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

function Aside() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState({
    research: false,
    build: false,
    design: false,
    erp: false,
  });

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  const handleMenuToggle = (service) => {
    setServices((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  return (
    <Box>
      <IconButton
        onClick={() => toggleDrawer(true)}
        sx={{ position: "absolute", left: 10, top: 10 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </List>

          <ListItemButton onClick={() => handleMenuToggle("research")}>
            <ListItemText primary="Pro Services" />
            {services.research ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={services.research} timeout='auto' unmountOnExit>
              <List>
                <ListItem button>
                  <ListItemText primary="Research"/>
                </ListItem>
                <ListItemButton onClick={() => handleMenuToggle('build')}>
                  <ListItemText primary="Build" />
                  {services.build ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={services.build} timeout="auto" unmountOnExit>
                  <List>
                    <ListItem button>
                      <ListItemText primary="Build Services" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
          </Collapse>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Aside;



// import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
// import React from "react";

// function Contact() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       {/* Banner Image */}
//       <Card sx={{ width: "95%", padding: "40px", marginTop: "20px" }}>
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//             borderRadius: "20px",
//             overflow: "hidden",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <img
//             src="https://innovatorstech.com/wp-content/uploads/2024/06/contact-bird.jpg"
//             alt="innovators tech"
//             style={{
//               width: "100%",
//               height: "300px",
//               display: "block",
//               borderRadius: "30px",
//             }}
//           />
//           <Typography
//             variant="h3"
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "5%",
//               transform: "translateY(-50%)",
//               fontFamily: "Sora, Arial, Helvetica, sans-serif",
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             Contact
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               position: "absolute",
//               top: "92%",
//               left: "75%",
//               transform: "translateY(-50%)",
//               backgroundColor: "white",
//               padding: "24px",
//               borderRadius: "20px",
//             }}
//           >
//             <a href="#home">Home</a> / Contact
//           </Typography>
//         </Box>
//       </Card>

//       {/* Contact Section */}
//       <Box sx={{ width: "90%", marginTop: "50px" }}>
//         <Grid container spacing={5}>
//           {/* Contact Information */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h6" sx={{ color: "#666" }}>
//               / get in touch /
//             </Typography>
//             <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: "10px" }}>
//               We are always ready
//               <br />
//               to help you and
//               <br />
//               answer your
//               <br />
//               questions
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "20px", color: "#555" }}>
//               Pacific hake false trevally queen parrotfish black prickleback
//               mosshead warbonnet sweeper! Greenling sleeper.
//             </Typography>

//             {/* Call Center & Email */}
//             <Box sx={{ marginTop: "40px" }}>
//               <Typography variant="h5" fontWeight="bold">
//                 Call Center
//               </Typography>
//               <Typography variant="body1" sx={{ color: "#555" }}>
//                 1800 203 4199
//               </Typography>

//               <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "30px" }}>
//                 Email
//               </Typography>
//               <Typography variant="body1" sx={{ color: "#555" }}>
//                 info@innovatorstech.com
//               </Typography>
//             </Box>

//             {/* Our Location */}
//             <Box sx={{ marginTop: "40px" }}>
//               <Typography variant="h5" fontWeight="bold">
//                 Our Location
//               </Typography>
//               <Typography variant="body1" sx={{ color: "#555" }}>
//                 KUB Tower, Plot No. 81,
//                 <br />
//                 Rd Number 3, Sri Shyam Nagar,
//                 <br />
//                 Telecom Nagar, Gachibowli,
//                 <br />
//                 Hyderabad, Telangana 500032
//               </Typography>
//             </Box>
//           </Grid>

//           {/* Contact Form */}
//           <Grid item xs={12} md={6}>
//             <Box
//               p={4}
//               bgcolor="lightgrey"
//               borderRadius="20px"
//               boxShadow={3}
//               sx={{ width: "100%" }}
//             >
//               <Typography variant="h5" fontWeight="bold">
//                 Get in Touch
//               </Typography>
//               <Typography variant="body1" sx={{ marginTop: "10px" }}>
//                 Define your goals and identify areas where AI can add value to
//                 your business.
//               </Typography>
//               <form>
//                 <TextField fullWidth label="Full Name" margin="normal" variant="standard" />
//                 <TextField fullWidth label="Phone" margin="normal" variant="standard" />
//                 <TextField fullWidth label="Email" margin="normal" variant="standard" />
//                 <TextField fullWidth label="Subject" margin="normal" variant="standard" />
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   margin="normal"
//                   variant="standard"
//                   multiline
//                   rows={4}
//                 />
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   size="large"
//                   sx={{
//                     borderRadius: "50px",
//                     padding: "10px 20px",
//                     marginTop: "20px",
//                   }}
//                 >
//                   Send a Message
//                 </Button>
//               </form>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default Contact;
