import Sidebar from "./Sidebar"
import { Grid } from "@mui/material"
import logo from "./res/logo512-tp.png"

export default function Header() {

    return (
        <header>
            <Grid container spacing={2} sx={{
                height:64
                }}>
                <Grid item xs={2} sx={{margin: "auto", textAlign: "center", padding: 0}}>
                    <Sidebar />
                </Grid>

                <Grid item xs={8} m="auto" textAlign="center">
                    <img src={logo} alt="Logo" height={"30px"}/>
                </Grid>
                <Grid item xs={2}>
                    
                </Grid>
            </Grid>
        </header>
    )
}