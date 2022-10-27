import { Grid, Button, Typography, Box, List, ListItem, ListItemText } from "@mui/material"


// public interfaces
export interface projectPageContent {
    pageTitle: string;
    projectTags: string[];
    sections: projectSection[];
}

// private interfaces and types

// Different types of project content, used in the json files.
// type projectSectionType = "overview" | "paragraph" | "list" | "image";
const sections = ['overview', 'paragraph', 'list', 'image', 'timeline'] as const;
type SectionType = typeof sections[number];

/**
 * Interface for project section item format
 */
interface projectSection {
    title: string;
    type: string;
    body: string[];
    subheadings?: string[];
}


/**
 * Project summary for in a row layout.
 * @param prop 
 * @returns 
 */
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

/**
 * Component that renders project tags.
 * @param prop 
 * @returns 
 */
export function ProjectTags(prop: { tags: string[] }) {
    return (
        <Typography variant="h6">
            {prop.tags.map((text) => "#" + text + " ")}
        </Typography>
    )
}


// Project content generation based on json content type. 
export function ProjectContentSection(prop: { data: projectSection }) {

    if (!assertProjectSection(prop.data)) {
        return <Box>Content error</Box>
    }
    switch (prop.data.type) {
        case "overview":
            return <ParagraphSection content={prop.data} overview={true} />
        case "paragraph":
            return <ParagraphSection content={prop.data} overview={false} />
        case "list":
            return <ListSection content={prop.data} timeline={false} />
        case "timeline":
            return <ListSection content={prop.data} timeline={true} />
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

// Private functions

// Paragraph section component, which generates overview or content paragraph
function ParagraphSection(prop: { content: projectSection, overview: boolean }) {
    return (
        <Box>
            <Typography variant="h4" sx={{ fontSize: prop.overview ? 36 : 32 }}>
                {prop.content.title}
            </Typography>
            {prop.content.body.map((text) =>
                <Typography variant="body1" m={2} sx={{ fontSize: prop.overview ? 24 : 18, textAlign: "flex-start" }}>{text}</Typography>
            )}
        </Box>
    )
}

// list section for 
function ListSection(prop: { content: projectSection, timeline: boolean }) {

    if (!prop.content.subheadings || prop.content.body.length != prop.content.subheadings.length) {
        console.log("The length of timeline contents and headings are different")
        return <></>
    }
    if (prop.timeline) {
        return (
            <Box>
                <Typography variant="h4" sx={{ fontSize: 32 }}>
                    {prop.content.title}
                </Typography>
                <List>
                    {prop.content.subheadings.map((heading, i) => (
                        <ListItem>
                            <ListItemText 
                            primary={heading} 
                            primaryTypographyProps={{sx:{fontSize:20}}}
                            secondary={prop.content.body[i]}
                            secondaryTypographyProps={{sx:{fontSize:16}}}
                            />
                        </ListItem>
                    ))}
                </List>

            </Box>
        )
    } else {
        return (
            <Box>
                <Typography variant="h4" sx={{ fontSize: 32 }}>
                    {prop.content.title}
                </Typography>
                <List>
                    {prop.content.subheadings.map((heading, i) =>
                        <ListItem>
                            <ListItemText primary={heading} secondary={prop.content.body[i]} />
                        </ListItem>)}
                </List>
            </Box>
        )
    }
}


// Check if the given project section type is valid
// returns non-zero if it is not a valid type
export function assertProjectSection(section: projectSection): boolean{
    return sections.includes(section.type as SectionType)
}