/**
 * This file is for automatically generating content section.
 */
import { projectSection, assertProjectSection } from "./baseProjectTypes"
import {Box, Typography} from "@mui/material"
import ListSection from "./ListSection"
import ParagraphSection from "./ParagraphSection"


// Project content generation based on json content type. 
export default function AutomatedSection(prop: { data: projectSection }) {

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