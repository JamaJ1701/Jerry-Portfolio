import { Typography, Stack, Box, Container, useTheme, CardMedia, Button, Card, CardActions, CardContent, Grid } from "@mui/material"
import { projectPageContent } from "../components/baseProjectTypes";
import ProjectTags from "../components/ProjectTags";
import AutomatedSection from "../components/AutomatedSection";
import VideoTwoCol from "../components/VideoTwoCol";

// About page

export default function Spark(prop: { content: projectPageContent }) {
    const theme = useTheme();
    return (
        <Container maxWidth="lg">
            <Stack m={{ xs: 2, md: 5 }} spacing={4}>
                <Box>
                    <Typography variant="h2" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
                        {prop.content.pageTitle}
                    </Typography>
                    <ProjectTags tags={prop.content.projectTags} />
                </Box>
                <img src={require("../res/sparkBanner.png")} />

                <VideoTwoCol
                    heading="Enhancing social interactions"
                    content="Through research"
                    link="https://www.youtube.com/embed/QewGZPsnylU" />
                <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "center" }}>
                        <img src={require("../res/spark_icon_led.png")} />
                        <Typography variant="h5">Led lights</Typography>
                        <Typography variant="body1" sx={{ textAlign: "start" }}>
                            Array of lights on the Spark hat represent the responses to the questionnaire, which is visible to all other participants of the event. This lights inform other users about the possible conversation topics, allowing them to easily approach the user. The order of lights are different to questions from the questionnaire, allowing them to be used as a conversation prop.
                        </Typography>
                    </Grid>
                </Grid>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={require("../res/spark_icon_led.png")}
                        alt="Spark"
                    />
                    {/* <img src={require("../res/spark_icon_led.png")} /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Led
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Array of lights on the Spark hat represent the responses to the questionnaire, which is visible to all other participants of the event. This lights inform other users about the possible conversation topics, allowing them to easily approach the user. The order of lights are different to questions from the questionnaire, allowing them to be used as a conversation prop.
                        </Typography>
                    </CardContent>
                </Card>
                {prop.content.sections.map((section) => <AutomatedSection data={section} />)}

            </Stack>
        </Container>
    )
}