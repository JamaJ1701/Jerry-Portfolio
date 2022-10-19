import { Grid, Button, Typography } from "@mui/material"

// Project summary for in a row layout.
export function DetailedProjectSummary(prop: { title: string, tags: string[], summary: string, thumbnail:string, link:string }) {
    return (
        <Grid container sx={{mt:4, mb:4}}>

            <Grid item xs={12} md={6} sx={{p:{xs:5, md:2}, pb:{xs:0}}}>
                {/* Project image */}
                <img src={prop.thumbnail} width="100%"/>
            </Grid>
            <Grid item xs={12} md={6} sx={{alignSelf:"center", p:{xs:5, md:2}}}>
                <Typography variant="h3">
                    {prop.title}
                </Typography>
                <Typography variant="h6">
                    {prop.tags.map((text) => "#" + text + " ")}
                </Typography>
                <Typography variant="body1" sx={{mt:2}}>
                    {prop.summary}
                </Typography>
                <Button onClick={() => console.log("pressed")} sx={{p:0, mt:1}}>
                    Learn more
                </Button>
            </Grid>

        </Grid>
    )
}

// Project summary card