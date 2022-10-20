import { Grid, Button, Typography, Box } from "@mui/material"

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

// Project overview styling
export function ProjectContentSection(prop: { title: string, content: string[] | string, overview?: boolean }) {
    return (
        <Box>
            <Typography variant="h4" sx={{ fontSize: prop.overview ? 36 : 32 }}>
                {prop.title}
            </Typography>
            {typeof prop.content === "string"
                ? <Typography variant="body1" m={2} sx={{ fontSize: prop.overview ? 24 : 18, textAlign:"justify" }}>{prop.content}</Typography>
                : prop.content.map((text) => 
                    <Typography variant="body1" m={2} sx={{ fontSize: prop.overview ? 24 : 18, textAlign:"justify"}}>{text}</Typography>
                )}
        </Box>
    )
}