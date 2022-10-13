import { Drawer, Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import Button from '@mui/material/Button'
import { useState } from "react";
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
// import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from "@mui/material"

export default function Sidebar() {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = (setOpen?: boolean) => {
        if (setOpen) {
            setIsOpen(setOpen);
        } else {
            setIsOpen(!isOpen);
        }
    };

    // This is the content of sidebar menu, including the functionality. 
    const list = (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={() => toggleSidebar(false)}
        >
            {/* If desktop, display the logo as well */}
            <div className="menu-title">
                Jerry Jeong
            </div>
            <List component={"nav"} >

                {/* This is where the projects go */}
                <SidebarEntry name="About" heading={true} />

                {/* Projects */}
                <SidebarEntry name="Projects" heading={true} />
                <List sx={{ pl: 2 }}>
                    {["Portfolio", "Spark", "Metallege"].map((text) => (
                        <SidebarEntry key={text} name={text} heading={false} />
                    ))}
                </List>

                {/* Application section. I don't have any application to show yet */}
                <SidebarEntry name="Applications" heading={true} />
                {/* <List sx={{ pl: 2 }}>
                    {[].map((text, index) => (
                        <SidebarEntry name={text} heading={false} />
                    ))}
                </List> */}
            </List>

            <Container sx={{ textAlign: "center", mt: 4 }}>
                <GitHubIcon sx={{ fontSize: 30, pr: 3 }} />
                <LinkedInIcon sx={{ fontSize: 30 }} />
            </Container>
        </Box>
    );

    return (
        <>
            <Button onClick={() => toggleSidebar(true)} sx={{ padding: 0 }}>
                <MenuIcon sx={{ fontSize: "30" }} />
            </Button>
            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={() => toggleSidebar(false)}
            >
                {list}
            </Drawer>
        </>
    )
}

interface entryProps {
    name: string;
    heading: boolean;
}

// Function component for menu item
function SidebarEntry(props: entryProps) {

    return (
        <ListItem key={props.name} disablePadding>
            <ListItemButton>
                {props.heading
                    ? <Typography variant="h6">{props.name}</Typography>
                    : <Typography>{props.name}</Typography>}
            </ListItemButton>
        </ListItem>
    )
}