import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
    
      <Card sx={{ width: "95%", padding: "40px", marginTop: "20px", borderBottomRightRadius: '20px' }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="https://innovatorstech.com/wp-content/uploads/2024/06/contact-bird.jpg"
            alt="innovators tech"
            style={{
              width: "100%",
              height: "300px",
              display: "block",
              borderRadius: "30px",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "5%",
              transform: "translateY(-50%)",
              fontFamily: "Sora, Arial, Helvetica, sans-serif",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "92%",
              left: "75%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "20px",
            }}
          >
            <a href="#home">Home</a> / Contact
          </Typography>
        </Box>
      </Card>


      <Box sx={{ width: "90%", marginTop: "50px" }}>
        <Grid container spacing={5}>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color: "#666" }}>
              / get in touch /
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: "10px" }}>
              We are always ready
              <br />
              to help you and
              <br />
              answer your
              <br />
              questions
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "20px", color: "#555" }}>
              Pacific hake false trevally queen parrotfish black prickleback
              mosshead warbonnet sweeper! Greenling sleeper.
            </Typography>

            <Box sx={{ marginTop: "40px" }}>
              <Typography variant="h5" fontWeight="bold">
                Call Center
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                1800 203 4199
              </Typography>

              <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "30px" }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                info@innovatorstech.com
              </Typography>
            </Box>

            <Box sx={{ marginTop: "40px" }}>
              <Typography variant="h5" fontWeight="bold">
                Our Location
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                KUB Tower, Plot No. 81,
                <br />
                Rd Number 3, Sri Shyam Nagar,
                <br />
                Telecom Nagar, Gachibowli,
                <br />
                Hyderabad, Telangana 500032
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              p={4}
              bgcolor="#efebe9"
              borderRadius="20px"
              boxShadow={3}
              sx={{ width: "100%" }}
            >
              <Typography variant="h5" fontWeight="bold">
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
                Define your goals and identify areas where AI can add value to
                your business.
              </Typography>
              <form>
                <TextField fullWidth label="Full Name" margin="normal" variant="standard" />
                <TextField fullWidth label="Phone" margin="normal" variant="standard" />
                <TextField fullWidth label="Email" margin="normal" variant="standard" />
                <TextField fullWidth label="Subject" margin="normal" variant="standard" />
                <TextField
                  fullWidth
                  label="Message"
                  margin="normal"
                  variant="standard"
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    padding: "10px 20px",
                    marginTop: "20px",
                  }}
                >
                  Send a Message
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ width: "105%", marginTop: "50px", textAlign: "center" }}>
        <iframe
            title="Google Map Location"
            width="100%"
            height="400"
            style={{ border: "0", borderRadius: "20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.288225913795!2d78.368617!3d17.433369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ee2282e593%3A0xedc38825452f2253!2sKub%20Towers!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
