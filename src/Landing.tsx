import { Box, Typography, useTheme } from "@mui/material"
import { Container } from "@mui/system";
export default function Landing() {
    const theme = useTheme();
    return (
        <Box sx={{ p: 0 }}>
            {/* Have the banner */}
            <Box sx={{ background: "#000" }}>
                <Container>
                    <Typography variant="h2" color={theme.palette.primary.main}>
                        What can I do?
                    </Typography>
                </Container>
            </Box>
            {/* Have featured project */}
            <Typography variant="h2">
                Featured Project
            </Typography>
            <Box>

            </Box>
        </Box>
    )
}