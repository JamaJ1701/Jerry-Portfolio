import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from "@mui/material"
import { Link } from "react-router-dom";

export default function Sidebar() {

    // This is the content of sidebar menu, including the functionality. 
    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            {/* If desktop, display the logo as well */}
            <Link to={`/`}>
                <div className="menu-title">
                    Jerry Jeong
                </div>
            </Link>
            <List component={"nav"} >

                {/* This is where the projects go */}
                <SidebarEntry name="About" />

                {/* Projects */}
                {/* <SidebarEntry name="Projects" /> */}
                <ListItem key={"Projects"} disablePadding>
                    <ListItemButton >
                        <Typography variant="h6">Projects</Typography>
                    </ListItemButton>
                </ListItem>
                <List sx={{ pl: 2 }}>
                    {["Portfolio", "Spark", "ISBAR"].map((text) => (
                        <SidebarEntry key={text} name={text} category="projects" />
                    ))}
                </List>

                {/* Application section. I don't have any application to show yet */}
                {/* <SidebarEntry name="Applications" /> */}
            </List>

            {/* SNS icons */}
            <Container sx={{ textAlign: "center", mt: 4 }}>
                <a href="https://github.com/JamaJ1701">
                    <GitHubIcon sx={{ fontSize: 30, mr: 3 }} />
                </a>
                <a href="https://www.linkedin.com/in/myoungseok-jeong-34264613b/">
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                </a>
            </Container>
        </Box>
    );

}

interface entryprop {
    name: string;
    // The parent category of the item in menu. Assuming max 2 levels of hierachy
    category?: string;
}

// Function component for menu item
function SidebarEntry(prop: entryprop) {

    return (
        <Link to={prop.category ? prop.category + `/` + prop.name : prop.name}>
            <ListItem key={prop.name} disablePadding>
                <ListItemButton >
                    {prop.category
                        ? <Typography>{prop.name}</Typography>
                        : <Typography variant="h6">{prop.name}</Typography>}
                </ListItemButton>
            </ListItem>
        </Link>
    )
}