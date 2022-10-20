import { Typography, Stack, Box, Container } from "@mui/material"
import { ProjectTags } from "../components/ProjectComponents"
import { ProjectContentSection } from "../components/ProjectComponents"
import about from "./content/about.json"
// About page

export default function About() {

    return (
        <Container maxWidth="lg">
            <Stack m={5} spacing={4}>
                <Box mb={8}>
                    <Typography variant="h2" >
                        About Me
                    </Typography>
                    <ProjectTags tags={["UX Designer", "Developer", "Engineer"]} />
                </Box>
                <ProjectContentSection title={about.title} content={about.overview} overview={true} />
                {about.sections.map((section) => <ProjectContentSection title={section.heading} content={section.content} />)}
                {/* <ProjectContentSection title={about.sections[0].heading} content={about.sections[0].content} overview={false} /> */}
            </Stack>
        </Container>
    )
}