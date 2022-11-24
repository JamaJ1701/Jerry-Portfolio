/**
 * Contains components that can be used in different sections,
 * or used individually
 */

import { Typography } from "@mui/material";

export function ImageWithCaption(prop: { image: string, caption: string }) {
    return (
        <>
            <img src={prop.image} />
            <Typography textAlign='center'>
                {prop.caption}
            </Typography>
        </>

    )
}