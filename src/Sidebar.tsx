import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
// import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from "@mui/material"
import { Link } from "react-router-dom";

export default function Sidebar(props: any) {

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
                <SidebarEntry name="Projects" />
                <List sx={{ pl: 2 }}>
                    {["Portfolio", "Spark", "Metallege"].map((text) => (
                        <SidebarEntry key={text} name={text} category="projects" />
                    ))}
                </List>

                {/* Application section. I don't have any application to show yet */}
                <SidebarEntry name="Applications" />
            </List>

            {/* SNS icons */}
            <Container sx={{ textAlign: "center", mt: 4 }}>
                <GitHubIcon sx={{ fontSize: 30, pr: 3 }} />
                <LinkedInIcon sx={{ fontSize: 30 }} />
            </Container>
        </Box>
    );

}

interface entryProps {
    name: string;
    // The parent category of the item in menu. Assuming max 2 levels of hierachy
    category?: string; 
}

// Function component for menu item
function SidebarEntry(props: entryProps) {

    return (
        <Link to={props.category ? props.category + `/` + props.name : props.name}>
            <ListItem key={props.name} disablePadding>
                <ListItemButton>
                    {props.category
                        ? <Typography>{props.name}</Typography>
                        : <Typography variant="h6">{props.name}</Typography>}
                </ListItemButton>
            </ListItem>
        </Link>
    )
}