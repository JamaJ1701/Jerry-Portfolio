import { projectSection } from './baseProjectTypes'
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'

interface timelineSection extends projectSection {
    subHeadings: string[];
}

export default function Timeline(prop: { content: timelineSection }) {
    if (!prop.content.subHeadings || prop.content.body.length != prop.content.subHeadings.length) {
        console.log("The length of timeline contents and headings are different")
        return <></>
    }
    return (
        <Box>
            <Typography variant="h3">
                {prop.content.title}
            </Typography>
            <List>
                {prop.content.subHeadings.map((heading, i) => (
                    <ListItem>
                        <ListItemText
                            primary={heading}
                            primaryTypographyProps={{ sx: { fontSize: 20 } }}
                            secondary={prop.content.body[i]}
                            secondaryTypographyProps={{ sx: { fontSize: 16 } }}
                        />
                    </ListItem>
                ))}
            </List>

        </Box>
    )
}