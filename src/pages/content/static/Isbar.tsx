
import { Typography, Box, useTheme } from "@mui/material"
import { Link } from "react-router-dom"

export default function Isbar() {

    return (
        <>
            <iframe title="app" className="app_demo" src="https://solving-isbarriers.github.io/COMP3820-ISBAR/#" />
            <Typography variant="h3" pt={2}>
                Additional resources
            </Typography>
            <a href="/ISBAR-final-report.pdf" target="_blank" download="ISBAR-final-report">Group report</a>
        </>
    )
}