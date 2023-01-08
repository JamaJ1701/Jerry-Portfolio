/**
 * Contains components that can be used in different sections,
 * or used individually
 */

import { Typography, Box } from "@mui/material";

export function ImageWithCaption(prop: { image: string, caption: string, class:string }) {
    return (
        <Box textAlign='center'>
            <img className={prop.class} src={prop.image} alt={prop.caption}/>
            <Typography m={0} sx={{color:"#6a6a6a"}}>
                {prop.caption}
            </Typography>
        </Box>

    )
}