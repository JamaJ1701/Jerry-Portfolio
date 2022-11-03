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
            return <ParagraphSection content={prop.data} fontSize="1.5rem" />
        case "paragraph":
            return <ParagraphSection content={prop.data} fontSize="1rem" />
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
function ParagraphSection(prop: { content: projectSection, fontSize:string }) {
    return (
        <Box>
            <Typography variant="h3" >
                {prop.content.title}
            </Typography>
            {prop.content.body.map((text) =>
                <Typography variant="body1" m={2} sx={{ fontSize: prop.fontSize, textAlign: "flex-start" }}>{text}</Typography>
            )}
        </Box>
    )
}

// list section for 
function ListSection(prop: { content: projectSection, timeline: boolean }) {


    if (prop.timeline) {
        if (!prop.content.subheadings || prop.content.body.length != prop.content.subheadings.length) {
            console.log("The length of timeline contents and headings are different")
            return <></>
        }
        return (
            <Box>
                <Typography variant="h3">
                    {prop.content.title}
                </Typography>
                <List>
                    {prop.content.subheadings.map((heading, i) => (
                        <ListItem>
                            <ListItemText
                                primary={heading}
                                primaryTypographyProps={{ sx: { fontSize: 20 } }}
                                secondary={prop.content.body[i]}
                                secondaryTypographyProps={{ sx: { fontSize: 16 } }}
                            />
                        </ListItem>
                    ))}
                </List>

            </Box>
        )
    } else {
        return (
            <Box>
                <Typography variant="h3">
                    {prop.content.title}
                </Typography>
                <List>
                    {prop.content.body.map((content) =>
                        <ListItem>
                            <ListItemText primary={content} />
                        </ListItem>)}
                </List>
            </Box>
        )
    }
}
function BannerSection(prop:{path:string}){
    
}

// Check if the given project section type is valid
// returns non-zero if it is not a valid type
export function assertProjectSection(section: projectSection): boolean {
    return sections.includes(section.type as SectionType)
}