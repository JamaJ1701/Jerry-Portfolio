import { Typography, Stack, Box, Container, useTheme, Link } from "@mui/material"
import ProjectTags from "../components/ProjectTags"
import { projectPageContent } from "../components/automated/baseProjectTypes"
import { ReactNode } from "react";

// About page

export default function ProjectDetail(prop: { content: projectPageContent, children: ReactNode }) {
    const theme = useTheme();
    // console.log(prop.children)
    return (
        <Container maxWidth="lg">
            <Stack m={{ xs: 2, md: 5 }} spacing={4}>
                <Box mb={8}>
                    <Typography variant="h2" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
                        {prop.content.pageTitle}
                    </Typography>
                    <ProjectTags tags={prop.content.projectTags} />
                    {prop.content.link ?
                        <Link href="https://github.com/Physcomp-hermes" underline="none" mt={0}>Project Repository
                        </Link>
                        : null}
                </Box>
                {prop.children}
                {/* Commented out for static pages */}
                {/* {prop.content.sections.map((section) => <AutomatedSection data={section}/>)} */}
            </Stack>
        </Container>
    )
}