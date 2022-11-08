/**
 * File for interafaces and types that are used for project page content
 */

// Contents of the a project Page
export interface projectPageContent {
    pageTitle: string;
    projectTags: string[];
    sections: projectSection[];
}

// private interfaces and types

// Different types of project content, used in the json files.
const sections = ['overview', 'paragraph', 'list', 'image', 'timeline'] as const;
type SectionType = typeof sections[number];

/**
 * Interface for project section item format
 */
export interface projectSection {
    title: string;
    type: string;
    body: string[];
}

// Check if the given project section type is valid
// returns non-zero if it is not a valid type
export function assertProjectSection(section: projectSection): boolean {
    return sections.includes(section.type as SectionType)
}