import { Typography } from "@mui/material"

/**
 * Component that renders project tags.
 * @param prop 
 * @returns 
 */
export default function ProjectTags(prop: { tags: string[] }) {
    return (
        <Typography variant="h6">
            {prop.tags.map((text) => "#" + text + " ")}
        </Typography>
    )
}