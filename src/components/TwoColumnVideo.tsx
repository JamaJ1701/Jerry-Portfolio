import { Grid, Typography, useTheme, Box } from "@mui/material"

export default function TwoColumnVideo(prop: { heading: string, content: string, link: string }) {
    const theme = useTheme();
    return (
        <Box >
            <Grid container sx={{ minHeight: 360 }}>
                <Grid item xs={6}>
                    <Typography variant="h4" >
                        {prop.heading}
                    </Typography>
                    {prop.content}
                </Grid>
                <Grid item xs={6}>
                    <iframe width="100%" height="100%" src={prop.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </Grid>
            </Grid>
        </Box>
    )
}