
import { Typography, Link } from "@mui/material"

export default function Isbar() {

    return (
        <>
            <Typography variant="h3" pt={0}>
                Application demo
            </Typography>
            <iframe title="app" className="app-demo" src="https://solving-isbarriers.github.io/COMP3820-ISBAR/#" />
            <Typography variant="h3" pt={0}>
                Summary
            </Typography>
            <Typography>
                This was a project from a university course that engages CSIRO and UQ School of Medicine. The goal of the project was to develop a patient ISBAR (Introduction, Situation, Background, Assessment, Recommendation) handover form for EHR (Electronic Health Record) system and intended to be used for student training purposes.
            </Typography>
            <Typography>
                The main purpose of the project was to store the patient data using FHIR (Fast Healthcare Interoperability Resources) specification, which is designed to store and share medical information via pre-defined, extendable data structure. By doing so, effectiveness of communication can be greatly improved, preventing degradation of healthcare quality and accidents caused from communication.
            </Typography>
            <Typography>
            The developed application is a proof-of-concept prototype that uses FHIR, executed in a testing EHR environment. Since it could be a single page application that mainly consists of forms, React and Material UI were used. The application stores and loads the information to and from a development FHIR server, simulating the communication with remote FHIR database.
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