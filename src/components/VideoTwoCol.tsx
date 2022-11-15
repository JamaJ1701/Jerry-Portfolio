import { Grid, Typography, useTheme, Box } from "@mui/material"
import { projectSection, assertProjectSection, bodyVideo, isVideo } from "./baseProjectTypes";

// Section that generates two column video
export default function VideoTwoCol(prop: { content: projectSection }) {
    const theme = useTheme();
    assertProjectSection(prop.content);
    if(isVideo(prop.content.body)){
        return (
            <Box >
                <Grid container sx={{ minHeight: 360 }}>
                    <Grid item xs={6}>
                        <Typography variant="h3">
                            {prop.content.title}
                        </Typography>
    
                        {prop.content.body.paragraphs.map((text) =>
                            <Typography variant="body1" m={2}>{text}</Typography>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        <iframe width="100%" height="100%" src={prop.content.body.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Grid>
                </Grid>
            </Box>
        )
    }
    throw new TypeError("Invalid video type")
    
}