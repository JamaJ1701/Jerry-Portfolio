import { Typography, Stack, Box, Container, useTheme } from "@mui/material"
import { ProjectTags } from "../components/ProjectComponents"
import { ProjectContentSection } from "../components/ProjectComponents"
import { projectPageContent } from "../components/ProjectComponents"
import TwoColumnVideo from "../components/TwoColumnVideo";

// About page

export default function Spark(prop:{content:projectPageContent}) {
    const theme = useTheme();
    return (
        <Container maxWidth="lg">
            <Stack m={{xs:2, md:5}} spacing={4}>
                <Box>
                    <Typography variant="h2" sx={{fontWeight:"bold", color: theme.palette.primary.main}}>
                        {prop.content.pageTitle}
                    </Typography>
                    <ProjectTags tags={prop.content.projectTags} />
                </Box>
                <img src={require("../res/sparkBanner.png")} />
                
                <TwoColumnVideo 
                heading="Enhancing social interactions" 
                content="Through research" 
                link="https://www.youtube.com/embed/QewGZPsnylU" />
                {prop.content.sections.map((section) => <ProjectContentSection data={section}/>)}
            </Stack>
        </Container>
    )
}