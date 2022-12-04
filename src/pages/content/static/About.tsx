import AutomatedSection from "../../../components/automated/AutomatedSection"
import about from "../json/about.json"

export default function About() {

    return (
        <>
            {about.sections.map((section) => <AutomatedSection data={section} />)}
        </>
    )
}