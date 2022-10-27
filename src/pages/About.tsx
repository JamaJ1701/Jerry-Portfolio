import { Typography, Stack, Box, Container } from "@mui/material"
import { ProjectTags } from "../components/ProjectComponents"
import { ProjectContentSection } from "../components/ProjectComponents"
import about from "./content/about.json"
import projectContents from './content/projectContents'
// About page

export default function About() {

    return (
        <Container maxWidth="lg">
            <Stack m={{xs:2, md:5}} spacing={4}>
                <Box mb={8}>
                    <Typography variant="h2" >
                        {projectContents["about"].pageTitle}
                    </Typography>
                    <ProjectTags tags={about.projectTags} />
                </Box>
                {about.sections.map((section) => <ProjectContentSection data={section}/>)}
            </Stack>
        </Container>
    )
}