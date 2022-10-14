import { Box, Typography, useTheme, Grid, Button } from "@mui/material"
import { Container } from "@mui/system";
import { useState } from "react";

export default function Landing() {
    const theme = useTheme();
    // Type for profession. Used for interactivity of the main page
    type profs = "UX" | "Dev" | "Eng";
    const [active, setActive] = useState<profs>("UX");

    function changeActive(active: profs) {
        setActive(active);
    }

    function BannerHeadings(prop: { heading: string, label: profs }) {
        return (
            <Grid item xs={10} lg={4} m={"auto"}>
                <Button onClick={() => changeActive(prop.label)}>
                    <Typography variant="h4" sx={{ color: active === prop.label ? theme.palette.primary.main : "#fff" }}>
                        {prop.heading}
                    </Typography>
                </Button>
            </Grid>
        )
    }

    return (
        <Box sx={{ p: 0 }}>
            {/* Have the banner */}
            <Box sx={{ background: "#070707", pt: 4, pb: 4 }}>
                <Container sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h2"
                        color={theme.palette.primary.main}
                        sx={{ fontFamily: "Lato, Roboto", fontWeight: "500", mt: 4, mb: 4 }}
                    >
                        What can I do?
                    </Typography>
                    <Grid container sx={{ mt: 4, mb: 4, textAlign: "start" }}>
                        <BannerHeadings heading="UX Design" label={"UX" as profs} />
                        <BannerHeadings heading="Web Development" label={"Dev" as profs} />
                        <BannerHeadings heading="Engineering" label={"Eng" as profs} />
                    </Grid>
                    <Grid container sx={{ mt: 3, mb: 3, display: active == "UX" ? "flex" : "none" }}>
                        {["React", "HTML", "CSS", "Typescript"].map((text) => (
                            <KeywordBubble key={text} content={text} />
                        ))}
                    </Grid>
                </Container>
            </Box>
            {/* Have featured project */}
            <Typography variant="h2">
                Featured Project
            </Typography>
            <Box>

            </Box>
        </Box>
    )
}


function KeywordBubble(prop: { content: string }) {

    return (
        <Grid item xs={4} md={2}>
            <Typography variant="button">
                {prop.content}
            </Typography>
        </Grid>
    )
}