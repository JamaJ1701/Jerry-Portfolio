import { Grid, Button, Typography } from "@mui/material"

// Project summary for in a row layout.
export function DetailedProjectSummary(prop: { title: string, tags: string[], summary: string, thumbnail:string }) {
    return (
        <Grid container spacing={3} sx={{mt:4, mb:4}}>

            <Grid item xs={6} >
                {/* Project image */}
                <img src={prop.thumbnail} width="100%"/>
            </Grid>
            <Grid item xs={6} sx={{alignSelf:"center"}}>
                <Typography variant="h2">
                    {prop.title}
                </Typography>
                <Typography variant="h6">
                    {prop.tags.map((text) => "#" + text + " ")}
                </Typography>
                <Typography variant="body1">
                    {prop.summary}
                </Typography>
                <Button onClick={() => console.log("pressed")}>
                    Learn more
                </Button>
            </Grid>

        </Grid>
    )
}