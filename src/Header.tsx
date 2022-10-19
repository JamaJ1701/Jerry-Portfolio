import Sidebar from "./Sidebar"
import { Grid, useTheme } from "@mui/material"
import logo from "./res/logo512-tp.png"
import { useState } from "react"
import { Drawer } from "@mui/material";
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu';

// Header components. Contains interactible drawer and sidebar component
export default function Header() {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = (setOpen?: boolean) => {
        if (setOpen) {
            setIsOpen(setOpen);
        } else {
            setIsOpen(!isOpen);
        }
    };

    return (
        <header>
            <Grid container spacing={2} sx={{
                height: 64,
                display: { md: "none" }
            }}>
                <Grid item xs={2} sx={{ margin: "auto", textAlign: "center", padding: 0 }}>
                    <Button onClick={() => toggleSidebar(true)} sx={{ padding: 0 }}>
                        <MenuIcon onClick={() => console.log("clicked")} sx={{ fontSize: "30", display: { md: "none" } }} />
                    </Button>
                </Grid>

                <Grid item xs={8} m="auto" textAlign="center">
                    <img src={logo} alt="Logo" height={"30px"} />
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>

            {/* Mobile sidebar */}
            <Drawer
                anchor={'left'}
                open={isOpen}
                variant={"temporary"}
                onClose={() => toggleSidebar(false)}
                sx={{ display: { xs: "block", md: "none" } }}
            >
                <Sidebar />
            </Drawer>

            {/* Desktop Sidebar */}
            <Drawer
                anchor={'left'}
                open={isOpen}
                variant={"permanent"}
                sx={{ display: { xs: "none", md: "block" }}}
            >
                <Sidebar />
            </Drawer>
        </header>
    )
}