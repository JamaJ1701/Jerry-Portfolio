import { Drawer, Divider, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Button from '@mui/material/Button'
import { useState } from "react";
import { useTheme } from '@mui/material/styles'

export default function Sidebar() {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = (setOpen?: boolean) => {
        if (setOpen) {
            setIsOpen(setOpen);
            console.log(setOpen);
        } else {
            setIsOpen(!isOpen);
        }
    };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleSidebar(false)}
        >
            <List>
                {/* This is where the projects go */}
                {['Portfolio', 'Spark', 'Metallege'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={() => toggleSidebar(true)}> Open</Button>
            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={() => toggleSidebar(false)}
            >
                {list}
            </Drawer>
        </div>
    )
}