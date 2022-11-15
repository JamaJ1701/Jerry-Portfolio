import { Typography, Stack, Box, Container, useTheme } from "@mui/material"
import ProjectTags from "../components/ProjectTags"
import AutomatedSection from "../components/AutomatedSection"
import { projectPageContent } from "../components/baseProjectTypes"

// About page

export default function ProjectDetail(prop:{content:projectPageContent}) {
    const theme = useTheme();
    return (
        <Container maxWidth="lg">
            <Stack m={{xs:2, md:5}} spacing={4}>
                <Box mb={8}>
                    <Typography variant="h2" sx={{fontWeight:"bold", color: theme.palette.primary.main}}>
                        {prop.content.pageTitle}
                    </Typography>
                    <ProjectTags tags={prop.content.projectTags} />
                </Box>
                {prop.content.sections.map((section) => <AutomatedSection data={section}/>)}
            </Stack>
        </Container>
    )
}