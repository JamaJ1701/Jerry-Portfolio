import { isTimeline, projectSection, assertProjectSection, bodyTimeline } from './baseProjectTypes'
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'

/**
 * Generate timeline from given data structure. 
 * @param title title of the section.
 * @param content timeline section content.
 * @returns The timeline section inside a Box component.
 */
export default function Timeline(prop: { content: projectSection }) {
    
    assertProjectSection(prop.content);
    if(isTimeline(prop.content.body)){
        if (!prop.content.title || prop.content.body.dates.length != prop.content.body.paragraphs.length) {
            throw new TypeError("The length of timeline contents and headings are different")
        }
        return (
            <Box>
                <Typography variant="h3">
                    {prop.content.title}
                </Typography>
                <List>
                    {prop.content.body.paragraphs.map((heading, i) => (
                        <ListItem>
                            <ListItemText
                                primary={heading}
                                primaryTypographyProps={{ sx: { fontSize: 20 } }}
                                secondary={(prop.content.body as bodyTimeline).dates[i]}
                                secondaryTypographyProps={{ sx: { fontSize: 16 } }}
                            />
                        </ListItem>
                    ))}
                </List>
    
            </Box>
        )
    }
    throw new TypeError("Given section is not a timeline type");
    
    
}