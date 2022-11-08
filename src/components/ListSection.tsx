import { Typography, Box, List, ListItem, ListItemText } from "@mui/material"
import { projectSection } from "./baseProjectTypes"

// list section for 
export default function ListSection(prop: { content: projectSection, timeline: boolean }) {

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