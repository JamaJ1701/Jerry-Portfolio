
import { Typography, Link } from "@mui/material"

export default function Isbar() {

    return (
        <>
            <Typography variant="h3" pt={0}>
                Application demo
            </Typography>
            <iframe title="app" className="app-demo" src="https://solving-isbarriers.github.io/COMP3820-ISBAR/#" />
            <Typography variant="h3" pt={0}>
                The project
            </Typography>
            <Typography>
            This was a project from a university course that engages with CSIRO and UQ School of Medicine. The goal of the project was to develop a patient ISBAR (Introduction, Situation, Background, Assessment, Recommendation) handover form for EHR (Electronic Health Record) system of UQ for student training purposes, using FHIR (Fast Healthcare Interoperability Resources).
            </Typography>
            <Typography>
            Students were free to use any technology for the web-application to be used in the EHR, and our group selected React with Material UI for the application. The application was developed using EHR testing environment and development FHIR server, which simulates the deployment environment of student EHR system used in UQ’s medical school. 
            </Typography>

            <Typography>
            Detailed information about the project is included in the group report downloadable in the additional resources section.
            </Typography>
            <Typography variant="h3" pt={0}>
                Additional resources
            </Typography>

            {/* <a href="/ISBAR-final-report.pdf" target="_blank" download="ISBAR-final-report">Download group report</a> */}
            <Link href="/ISBAR-final-report.pdf" target="_blank" download="ISBAR-final-report">Project group report</Link>
            <Link href="https://solving-isbarriers.github.io/COMP3820-ISBAR/" target="_blank">Github page deployment</Link>
            
        </>
    )
}