import { Typography, Stack, Box, Container, useTheme} from "@mui/material"
import { projectPageContent } from "../components/baseProjectTypes";
import ProjectTags from "../components/ProjectTags";

// About page

export default function Spark(prop: { content: projectPageContent }) {
    const theme = useTheme();
    return (
        <Container maxWidth="md">
            <Stack m={{ xs: 2, md: 5 }} spacing={4}>
                {/* Title */}
                <Box>
                    <Typography variant="h2" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
                        {prop.content.pageTitle}
                    </Typography>
                    <ProjectTags tags={prop.content.projectTags} />
                </Box>
                {/* Banner image */}
                <img src={require("../res/sparkBanner.png")} />

                <iframe className="content_video" src={"https://www.youtube.com/embed/QewGZPsnylU"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

            </Stack>
        </Container>
    )
}