import { Box, Card, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function Careers() {
  const jobListings = [
    {
      title: "UI / UX Designer",
      description: "Role Description: This is a full-time hybrid role for a UI/UX Designer at INNOVATORS TECH SOLUTIONS.",
      link: "https://innovatorstech.com/careers/ui-ux-designer/",
      salary: "15,000 INR - 30,000 INR",
    },
    {
      title: "Digital Marketing Executive",
      description: "Role Description: This is a full-time on-site role for a Digital Marketing Executive at INNOVATORS TECH SOLUTIONS.",
      link: "https://innovatorstech.com/careers/digital-marketing-executive/",
      salary: "15,000 INR - 30,000 INR",
    },
    {
      title: "Full Stack Developer",
      description: "Good Knowledge in React and Node",
      link: "https://innovatorstech.com/careers/full-stack-developer/",
      salary: "25,000 INR - 45,000 INR",
    },
  ];

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Card sx={{ width: "95%", padding: "40px", marginTop: "20px" }}>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ position: "relative", width: "100%", borderRadius: "20px", overflow: "hidden" }}>
            <img
              src="https://innovatorstech.com/wp-content/uploads/2024/06/contact-bird.jpg"
              alt="innovators tech"
              style={{ width: "100%", height: "400px", display: "block", borderRadius: "30px" }}
            />

            <Typography
              variant="h3"
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
              Careers
            </Typography>

            <Typography
              variant="h6"
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              sx={{
                position: "absolute",
                top: "89%",
                left: "75%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                padding: "12px 24px",
                borderRadius: "20px",
                fontWeight: "bold",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              HomePro / Careers
            </Typography>
          </Box>
        </motion.div>
      </Card>

      {jobListings.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "200%",
              maxWidth: "1100px",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "2px solid #ddd",
                paddingBottom: "10px",
                marginBottom: "10px",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#007bff" }}>
                  Full-time
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>Hyderabad</Typography>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#28a745" }}>
                {job.salary}
              </Typography>
            </Box>

            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
              {job.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", marginBottom: "15px" }}>
              {job.description}
            </Typography>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="contained"
                href={job.link}
                sx={{
                  backgroundColor: "#007bff",
                  "&:hover": { backgroundColor: "#0056b3" },
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Explore More
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}

export default Careers;
