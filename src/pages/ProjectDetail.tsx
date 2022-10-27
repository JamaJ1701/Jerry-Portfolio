import { Typography, Stack, Box, Container } from "@mui/material"
import { ProjectTags } from "../components/ProjectComponents"
import { ProjectContentSection } from "../components/ProjectComponents"
import { projectPageContent } from "../components/ProjectComponents"

// About page

export default function ProjectDetail(prop:{content:projectPageContent}) {

    return (
        <Container maxWidth="lg">
            <Stack m={{xs:2, md:5}} spacing={4}>
                <Box mb={8}>
                    <Typography variant="h2" >
                        {prop.content.pageTitle}
                    </Typography>
                    <ProjectTags tags={prop.content.projectTags} />
                </Box>
                {prop.content.sections.map((section) => <ProjectContentSection data={section}/>)}
            </Stack>
        </Container>
    )
}