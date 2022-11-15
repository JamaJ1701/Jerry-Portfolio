import { Typography, Box, List, ListItem, ListItemText } from "@mui/material"
import { isParagraph, projectSection, assertProjectSection } from "./baseProjectTypes"

// list section for 
export default function ListSection(prop: { content: projectSection }) {
    assertProjectSection(prop.content);
    if (isParagraph(prop.content.body)) {
        return (
            <Box>
                <Typography variant="h3">
                    {prop.content.title}
                </Typography>

                <List>
                    {prop.content.body.paragraphs.map((content) =>
                        <ListItem>
                            <ListItemText primary={content} />
                        </ListItem>)}

                </List>
            </Box>
        )
    }
    throw new TypeError("Information given to List section has invalid structure.");
}