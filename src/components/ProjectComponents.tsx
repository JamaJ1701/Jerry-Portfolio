import { Grid, Button, Typography, Box } from "@mui/material"
import { off } from "process";

// Project summary for in a row layout.
export function DetailedProjectSummary(prop: { title: string, tags: string[], summary: string, thumbnail: string, link: string }) {
    return (
        <Grid container sx={{ mt: 4, mb: 4 }}>

            <Grid item xs={12} md={6} sx={{ p: { xs: 5, md: 2 }, pb: { xs: 0 } }}>
                {/* Project image */}
                <img src={prop.thumbnail} width="100%" />
            </Grid>
            <Grid item xs={12} md={6} sx={{ alignSelf: "center", p: { xs: 5, md: 2 } }}>
                <Typography variant="h3">
                    {prop.title}
                </Typography>
                <ProjectTags tags={prop.tags} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                    {prop.summary}
                </Typography>
                <Button onClick={() => console.log("pressed")} sx={{ p: 0, mt: 1 }}>
                    Learn more
                </Button>
            </Grid>

        </Grid>
    )
}

// Project Tags component. Takes in tags in the form of string array
export function ProjectTags(prop: { tags: string[] }) {
    return (
        <Typography variant="h6">
            {prop.tags.map((text) => "#" + text + " ")}
        </Typography>
    )
}

// Different types of project content, used in the json files.
// type projectSectionType = "overview" | "paragraph" | "list" | "image";
const sections = ['overview', 'paragraph', 'list', 'image'] as const;
type SectionType = typeof sections[number];
interface projectSection {
    title: string;
    type: string;
    body: string[] | string;
}

// Project content generation based on json content type. 
export function ProjectContentSection(prop: { data: projectSection }) {
    if (assertSection(prop.data)) {
        return <Box>Content error</Box>
    }
    switch (prop.data.type) {
        case "overview":
            return <ParagraphSection content={prop.data} overview={true} />
        case "paragraph":
            return <ParagraphSection content={prop.data} overview={false} />
        case "list":
            return <Box><ul><li>Content</li></ul></Box>
        case "timeline":
            return <Box></Box>
        default:
            return (
                <Box>
                    <Typography variant="h4">
                        Content type not specified properly
                    </Typography>
                </Box>
            )
    }
}

// Internal functions
function ParagraphSection(prop: { content: projectSection, overview: boolean }) {
    return (
        <Box>
            <Typography variant="h4" sx={{ fontSize: prop.overview ? 36 : 32 }}>
                {prop.content.title}
            </Typography>
            {typeof prop.content.body === "string"
                ? <Typography variant="body1" m={2} sx={{ fontSize: prop.overview ? 24 : 18 }}>{prop.content.body}</Typography>
                : prop.content.body.map((text) =>
                    <Typography variant="body1" m={2} sx={{ fontSize: prop.overview ? 24 : 18, textAlign: "justify" }}>{text}</Typography>
                )}
        </Box>
    )
}

// Asserts the section content, making sure all relevant fields are there.
function assertSection(content: projectSection): number {
    if (sections.includes(content.type as SectionType)) {
        return 0;
    } else {
        return 1;
    }
}