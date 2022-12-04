/**
 * File for interafaces and types that are used for project page content
 */

// Contents of the a project Page
export interface projectPageContent {
    pageTitle: string;
    projectTags: string[];
    sections: any[];
    link?: string;
}

// private interfaces and types

// Different types of project content, used in the json files.
const sections = ['overview', 'paragraph', 'list', 'image', 'timeline','video', 'videoTwoCol'] as const;
type SectionType = typeof sections[number];

/**
 * Interface for project section item format
 */
export type projectSection = {
    title: string;
    type: string;
    body: bodyTimeline | bodyParagraph | bodyVideo | bodyImg;
}

export interface bodyParagraph {
    paragraphs: string[]
}

export function isParagraph(obj: any): obj is bodyParagraph{
    return 'paragraphs' in obj
}


export interface bodyTimeline extends bodyParagraph {
    dates: string[],
}
export function isTimeline(obj: any): obj is bodyTimeline{
    return 'paragraphs' in obj && 'dates' in obj
}


export interface bodyVideo extends bodyParagraph{
    link: string
}

export function isVideo(obj: any): obj is bodyVideo{
    return 'paragraphs' in obj && 'link' in obj
}


export interface bodyImg{
    link:string;
    caption?:string;
}

export function isImg(obj: any): obj is bodyImg{
    return 'link' in obj;
}

// Check if the given project section type is valid
// returns non-zero if it is not a valid type
export function assertProjectSection(section: projectSection) {
    if(!sections.includes(section.type as SectionType)){
        throw new TypeError("Given section type is not a valid section type")
    }
}