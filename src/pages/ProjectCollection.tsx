import { Typography, Container, Stack } from "@mui/material"

// Project category page
export default function ProjectCollection() {
    return (

        <Container maxWidth="lg">
            <Stack m={{ xs: 2, md: 5 }} spacing={4}>

                <Typography variant="h5" >
                    Project
                </Typography>
                {/* <ProjectTags tags={about.projectTags} /> */}

                {/* {about.sections.map((section) => <ProjectContentSection data={section}/>)} */}
            </Stack>
        </Container>
    )
}
