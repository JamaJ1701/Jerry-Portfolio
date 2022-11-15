import { projectSection, assertProjectSection, isParagraph } from "./baseProjectTypes"
import { Box, Typography } from "@mui/material"

// Paragraph section component, which generates overview or content paragraph
// takes in fontSize as a prop.
export default function ParagraphSection(prop: { content: projectSection, fontSize: string }) {
    assertProjectSection(prop.content);
    if (isParagraph(prop.content.body)) {
        return (
            <Box>
                <Typography variant="h3" >
                    {prop.content.title}
                </Typography>
                {prop.content.body.paragraphs.map((text) =>
                    <Typography variant="body1" m={2} sx={{ fontSize: prop.fontSize, textAlign: "flex-start" }}>{text}</Typography>
                )}
            </Box>
        )
    }
    throw new TypeError("Invalid paragraph format");
}