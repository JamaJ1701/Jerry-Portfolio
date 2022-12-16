import { Typography} from "@mui/material"

export default function Portfolio() {

    return (
        <>
            <Typography variant="h3" pt={0}>
                Overview
            </Typography>
            
            <Typography>
            The goal of portfolio project is to document and present my previous works in my personal website, while also learning and applying additional skills that I want to further develop. For this purpose, the website was built using React and Typescript, using Material UI (MUI) library for graphical elements.
            </Typography>
            <Typography>
            At some point, I decided to make an archive of my previous and upcoming projects that can be presented to others inside my personal website. Since I want to have more experience towards becoming a full-stack developer, I also thought this would be a good project for me to learn more about different tech stack and gain experience. Furthermore, having a portfolio website would allow me to experiment more back-end things and host the web applications I’ve previously developed.
            </Typography>

            <Typography>
            Since I am intending to use it as a learning tool, the portfolio project has multiple versions featuring different way of implementations and project presentations. Hence, it should be considered as an evolving project with rounds of releases.
            </Typography>
            <Typography variant="h3" pt={0}>
                Version 1.0
            </Typography>
            <Typography>
            Version 1.0 utilises create-react-app to make the portfolio as a single React application, using Typescript and Material UI. This version of website is focused on presenting the projects in a static way, as publishing a complete website has priority over embedding advanced interactivity. Hence the use of Typescript is not necessary for this version, but I just did that to learn about Typescript. 
            </Typography>
            <Typography>
            One of the main goals of portfolio website is to host the web applications that are developed from previous projects. However, it was found that some projects required debugging and adjustments in deployment settings due to change in some libraries used and difference in deployment environment. Therefore, embedding the applications were postponed for this version.
            </Typography>
            <Typography>
            Since the domain was already active with placeholder content, I decided to minimise the time spent on refining the project contents. Hence, descriptions of some project pages require further refinement in terms of content and presentation. 
            </Typography>
        </>
    )
}