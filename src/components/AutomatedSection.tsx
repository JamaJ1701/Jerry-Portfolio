/**
 * This file is for automatically generating content section.
 */
import { projectSection, assertProjectSection } from "./baseProjectTypes"
import {Box, Typography} from "@mui/material"
import ListSection from "./ListSection"
import ParagraphSection from "./ParagraphSection"
import Timeline from "./Timeline"


// Project content generation based on json content type. 
// The problem here is that the type is part of the content. To solve this..
export default function AutomatedSection(prop: { data: projectSection }) {

    assertProjectSection(prop.data);
    switch (prop.data.type) {
        case "overview":
            return <ParagraphSection content={prop.data} fontSize="1.5rem" />
        case "paragraph":
            return <ParagraphSection content={prop.data} fontSize="1rem" />
        case "list":
            return <ListSection content={prop.data}/>
        case "timeline":
            return <Timeline content={prop.data}/>
        case "videoTwoCol":
            return <></>
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