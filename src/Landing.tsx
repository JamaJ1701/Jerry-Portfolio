import { Box, Typography, useTheme, Grid, Button } from "@mui/material"
import { Container } from "@mui/system";
import { useState } from "react";
import { DetailedProjectSummary } from "./ProjectSummary";

// TODO: Simplify the keyword grid
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
                    <Typography variant="h4" sx={{ color: active === prop.label ? theme.palette.primary.light : "#fff" }}>
                        {prop.heading}
                    </Typography>
                </Button>
            </Grid>
        )
    }
    function KeywordBubble(prop: { content: string }) {

        return (
            <Grid item xs="auto" md="auto" >
                <Typography variant="body1" pl={2} pr={2} m={0} sx={{ background: theme.palette.primary.main, borderRadius: "20px" }}>
                    {prop.content}
                </Typography>
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
                        color={theme.palette.primary.light}
                        sx={{ fontFamily: "Lato, Roboto", fontWeight: "500", mt: 4, mb: 4 }}
                    >
                        What can I do?
                    </Typography>
                    <Grid container sx={{ mt: 4, mb: 4, textAlign: { xs: "start", lg: "center" } }}>
                        <BannerHeadings heading="UX Design" label={"UX" as profs} />
                        <BannerHeadings heading="Development" label={"Dev" as profs} />
                        <BannerHeadings heading="Engineering" label={"Eng" as profs} />
                    </Grid>
                    <Grid container columnSpacing={4} rowSpacing={3} sx={{ justifyContent: "center", p: 3, display: active == "UX" ? "flex" : "none" }}>
                        {["Prototyping", "Testing", "User Research", "Graphic design", "Figma", "Adobe Suite"].map((text) => (
                            <KeywordBubble key={text} content={text} />
                        ))}
                    </Grid>
                    <Grid container columnSpacing={4} rowSpacing={3} sx={{ justifyContent: "center", p: 3, display: active == "Dev" ? "flex" : "none" }}>
                        {["React", "Typescript", "HTML", "CSS", "Javascript", "Bootstrap"].map((text) => (
                            <KeywordBubble key={text} content={text} />
                        ))}
                    </Grid>
                    <Grid container columnSpacing={4} rowSpacing={3} sx={{ justifyContent: "center", p: 3, display: active == "Eng" ? "flex" : "none" }}>
                        {["Python", "C", "C++", "Java", "IoT", "CAD", "PCB design"].map((text) => (
                            <KeywordBubble key={text} content={text} />
                        ))}
                    </Grid>
                </Container>
            </Box>
            {/* Have featured project */}
            <Container maxWidth="md">
                <Typography variant="h2" sx={{ textAlign: "center", mt: 4, mb: 4, color: theme.palette.primary.light }}>
                    Featured Project
                </Typography>
                <DetailedProjectSummary
                    title="Project title"
                    tags={["C", "Python"]}
                    summary="The portfolio project is something that I consider one of the best projects in my life. It was about generating a reasonable portfolio to be presented to others in same field of work or my peresonal connections, demonstrating my capabilities as a designer and developer. Material UI library was used for this project, which is a library for React websites."
                    thumbnail={require("./res/logo512-tp.png")}
                    link="/"
                />
            </Container>
        </Box>
    )
}
