import { ExpandMore } from "@mui/icons-material";
import { Typography, Stack, Box, Container, useTheme, Link, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { projectPageContent } from "../components/automated/baseProjectTypes";
import ProjectTags from "../components/ProjectTags";
import { ImageWithCaption } from "../components/SectionSubComponents";

// About page

export default function Spark(prop: { content: projectPageContent }) {
    const theme = useTheme();
    // var projectImages = require('../res/spark');
    return (
        
        <Container maxWidth="md">
            <Stack m={{ xs: 2, md: 5 }} spacing={2}>
                {/* Title */}
                <Box>
                    <Typography variant="h2" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
                        {prop.content.pageTitle}
                    </Typography>
                    <ProjectTags tags={prop.content.projectTags} />
                    <Link href="https://github.com/Physcomp-hermes" underline="none" mt={0}>Project Repository
                    </Link>
                </Box>


                {/* Banner image */}
                <img src={require("../res/spark/sparkBanner.png")} />

                <Typography variant="h3" pt={2}>
                    Enhancing social interactions
                </Typography>
                <Typography sx={{ textAlign: "flex-start" }}>
                    Sometimes, it can be hard to start a conversation with a stranger because you’re not sure what to talk about. Spark is a proof-of-concept device for a design that enhances social interactions between strangers in an event, by allowing users to play a little guessing game.
                </Typography>
                <iframe className="content_video" src={"https://www.youtube.com/embed/QewGZPsnylU"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

                <Typography>
                    Nowadays, some people struggle to socialise and interact with other people at social events. These people do not want to initiate a conversation with strangers due to their fear of having an awkward and thus unsuccessful conversation. Spark aimed to give users the confidence to initiate conversations by informing them how much they share interests and acting as a conversation prop.
                </Typography>

                <Typography>
                    Spark will ask users to enter their basic information and interests before entering the social networking venue. The information entered by the user will then be stored on the LED hat, and the user will also need to wear a necklace with a vibration function. When the user faces other people in a social activity place, the necklace will provide the user with vibration feedback. The stronger the vibration, the more similar interests between the two people. In addition, the hat on the user's head has LED lights, and the colour of each light represents a different kind of interest. However, the user does not know what kind of interest each colour represents. To discover the meaning of LEDs the user must have a conversation with others in the event, who would also be interested in discovering them. By allowing everyone to participate in a guessing game, Spark gives everyone a common conversation topic as well as motivating them to start conversations with others.
                </Typography>

                <Typography variant="h3" pt={2}>
                    The Prototype
                </Typography>
                <Typography>
                    To allow the experience of using the Spark system, the team developed a prototype. The prototype consists of the Spark device and the main application, which interact with each other via WIFI. The device consists of a hat with LED, a necklace with vibration motor and a fiducial marker on top of the hat with set orientation. The LEDs and vibration motor were controlled by a microcontroller that constantly communicates with the main system, updating its colour sequence and vibration pattern.
                </Typography>
                <ImageWithCaption image={require("../res/spark/device-3.jpg")} caption="Prototype device" class="img-full" />
                <Typography>
                    The OpenCV library and fiducial markers are used to determine the location and orientation of each user in the event venue, which were used to determine who each user is looking at. The main application allows users to enter their interests, detect who is facing who, and communicates with the device via web socket.
                </Typography>
                <Typography>
                    Final product developed by our team successfully allowed the core experience of original design. It informs the users with varying vibration, which could be felt from the necklace. It also has an array of LED representing different interests, allowing the users to initiate conversations based on the colours of the LEDs. The main limitation of the final product was its area coverage, which comes from limitations in webcam and fiducial markers. However, we’ve confirmed that the final product could cover a space as big as 4m x 3m, which was sufficient to demonstrate core user experience.
                </Typography>

                <Typography variant="h3" pt={2}>
                    Design process
                </Typography>
                <Typography>
                    During the initial phase of the project, I focused on the researching the problem space. I’ve conducted interviews and reviewed literatures to investigate the human behaviours in social events, psychology related to such behaviours and factors associated with them. The findings from each team members were then shared to develop more thorough understanding about the problem and the solutions space. The team then designed the initial version of the device, which vibrates differently depending on the number of shared interests that user is looking at.
                </Typography>
                <Typography>
                    After the development of initial design, I actively facilitated and participated in discussions related to our design, suggesting possible ideas, and evaluating them with the team. Having constructive team discussions throughout the semester allowed us to reach the final design and the prototype we developed. I also encouraged the team to be on the same page the semester by communicating with both internal and external team members, often summarising the key tasks we must complete and sharing with the team in Slack.
                </Typography>

                <Typography variant="h3" pt={2}>
                    Development
                </Typography>
                <Typography>
                    After the initial design proposal, I worked on prototype development as a lead developer, while contributing to the design. As the developer, I lead the team discussion about the development requirements and task allocation between team members. During this process, I’ve also researched the technologies we could use to build our prototype such as the microcontroller, programming languages and libraries. The final prototype used ESP-32 (with Arduino core), Python and OpenCV. After the initial allocation, I actively communicated with the team members about their tasks and assisted them when required to ensure the development can meet the deadlines.
                </Typography>
                <Typography>
                    I was allocated to develop the locator component, which detects who each user is facing during the social event. For more detailed explanation about the locator component, please refer to corresponding section. While developing the locator component, I developed the main application that integrates all components.
                </Typography>

                <Typography variant="h3">
                    Core Logic
                </Typography>
                <Typography>
                    When the application starts, it displays the UI, console, and latest frame from the webcam. The UI allows users to enter their interests along with user ID, which are stored in a python dictionary. Then, users are allowed to enter the event venue with the device that corresponds to their user ID. The fiducial markers on top of the hats will map the orientation of different users within the scene, which is then used to calculate who each user is facing. If a user is facing another user, the application calculates the ‘commonality score’ based on the number of interests they share with that specific person. This calculated value is then communicated to the microcontroller upon period request via web socket, which updates the vibration logic of the motor based on the commonality score.
                </Typography>
                <Box>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>UI</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <ImageWithCaption image={require("../res/spark/ui.jpg")} caption="Application UI" class="img-half" />
                            <Typography m={2}>
                                UI of the application was made using TKinter GUI library for python. The UI contains number of dropdown menus to enter interests, and buttons used for form submission and system calibration. Dropdown menus were used for prototypes to simplify the interest matching, as having complex interest matching algorithm was not necessary to demonstrate the core user interaction. First field, ID, is the ID of the fiducial marker this person is allocated to and was entered by the team members during the demonstration.
                            </Typography>
                            <Typography m={2}>
                                Once the user clicks submit button, the information about the specific participant is saved in the main system in a form of Python dictionary entry. This data is then accessed by other parts of the application to update the colours of LEDs and vibration strength of the device.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                Locator
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <ImageWithCaption image={require("../res/spark/mapping.jpg")} caption="3D to 2D mapping" class="img-half" />
                            <Typography m={2}>
                                Locator is a component that detects who each user is looking at. This was done using AruCo fiducial marker, webcam and OpenCV library for python. Once a frame is retrieved from the webcam's video stream, the OpenCV library detects the markers inside the frame. Then, transformation matrix from each marker's coordinate system to the camera frame is calculated for each marker. This transformation matrix is later used to map the coordinates of each marker into one coordinate system.
                            </Typography>
                            <Typography m={2}>
                                Assuming there is no significant difference in users’ heights, these coordinates are then mapped into a 2D coordinate system defined by a reference marker. This reference marker is manually positioned on a flat surface for calibration during the initial setup of the system. The transformed coordinates are then used to calculate the angles between each marker’s frontal vector and vector towards other users, which are used to determine who each user is facing. This approach was adopted after noticing the head orientation significantly affecting the detection when the calculation was done in 3D.
                            </Typography>
                            <Typography m={2}>
                                To reduce the errors from each frame, the detection algorithm calculates the angle by moderating the data from five frames instead of single frame. Although this reduces the processing speed hence responsiveness of the system, the system was able to maintain sufficient responsiveness of approximately 5 updates per second. For system monitoring, the locator also displays processed frame and its current state on separate window. The frames are processed using a callback function, which periodically calls itself. This callback function is attached to the main UI, as TKinter library didn’t allow multithreading.
                            </Typography>
                            <Typography m={2}>
                                To allow maximum markers to be detected by the system, the webcam had to be positioned above the heads of the users. As the webcam’s field of view and resolution had significant effect on the prototype’s functional area, the webcam was decided to be hang on approximately 4m from the ground during the demonstration. This allowed reliable detection of markers assuming user height of 170cm within a space of 4m x 3m.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                Server
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography m={2}>
                                The communication between the device and application was done using python web server and web sockets. The wireless communication is used to update the interest LED colours and vibration strengths of the device upon request. The server is run on a separate thread to the main function to ensure it doesn’t get affected by the main process loop.
                            </Typography>
                            
                            <Typography m={2}>
                                Once the server thread starts, it waits for a connection through a web socket. The incoming communication request to the server is handled by starting another thread that processes the request, so the server remains available for other incoming requests. This was implemented this way to ensure multiple devices could be connected to the server.
                            </Typography>
                            <Typography m={2}>
                                Initially, the design only communicated vibration strength, thus the server only sent vibration strength to the device. Later when the LEDs were added to the design, the server had to handle two types of update requests that occur in different frequencies. The LEDs only had to be updated when the user interests were changed, while vibration strength had to be updated every time the user is looking at another user (or empty space). Hence, the server was programmed to handle two different types of requests depending on the type of request and user ID included in the request.
                            </Typography>

                        <ImageWithCaption image={require("../res/spark/communication.jpg")} caption="Hardware and server communication" class="img-half" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                Device
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography m={2}>
                                The Spark device consists of a microcontroller, Neopixel LED strip and vibration motor. The Neopixel LED strip was used to indicate the interests of each user to others using colours, also allowing them to start conversations by trying to guess the meaning of colours.
                            </Typography>
                            <ImageWithCaption image={require("../res/spark/device-2.jpg")} caption="Hat with LED" class="img-half" />
                            <Typography m={2}>
                                ‘ESP-32 thing plus’ development board was used as the central processor of the device due to its wireless connectivity. To simplify the development, Arduino core was used for the microcontroller, as well as Arduino libraries for Wifi communication and Neopixel LED control. Each microcontroller had hard-coded participant ID, which was used to update its LED colours and vibration strength.
                            </Typography>
                            <Typography m={2}>
                                Upon booting, the microcontroller connects to the application server using hard-coded WIFI then requests the LED colour corresponding to its device ID. Once the LED colours are received, the microcontroller will update the colours on LED strip to match the received data. Then, the device sends periodic request to update its vibration value every 250ms for responsiveness. Once non-zero vibration strength is received from the server, the device will control the vibration motor to start vibrating using PWM.
                            </Typography>
                            <ImageWithCaption image={require("../res/spark/device.jpg")} caption="Device circuit" class="img-half" />
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Typography variant="h3">
                    The Exhibit
                </Typography>
                <Typography>
                    Final version of the prototype was demonstrated during the Physical Computing Exhibition 2022. During the exhibition, all teams from the course set up their project and presented their design to guests and pedestrians. For Spark project, the team set up the webcam on top of the venue and prepared visual support.
                </Typography>
                <Typography>
                    The exhibit was successful, and we were able to present our idea to many other people. The guests also gave us some interesting feedback that could be helpful with further development of the project. Some suggested the project could be used in product expos to allow guests to easily filter the products they are interested in, allowing more efficient communication between guests and salespeople. Also, asking same set of questions to all users allowed them to have conversations about them regardless of their interests, demonstrating the questionnaire could be a successful conversation prop by itself.
                </Typography>
                <Typography variant="h3">
                    Gallery
                </Typography>
            </Stack>
        </Container>
    )
}

const literatures = [
    "J. Schroeder, D. Lyons, and N. Epley, “Hello, Stranger? Pleasant Conversations Are Preceded by Concerns About Starting One,”(2021).",
    "P. Mandeno and W. L. Baxter, “Six principles for the design of better networking events,” (2021).",
    "J.Y Williams, Why You're Afraid Of Networking (And What To Do About It), Forbes, March 2020.",
    "R. S. Albert and T. R. Brigante, “The Psychology of Friendship Relations: Social Factors,”(1962)",
    "G. M. Sandstrom and E. J. Boothby, “Why do people avoid talking to strangers? A mini meta-analysis of predicted fears and actual experiences talking to a stranger,”(2021).",
    "Epley, N., Kardas, M., Zhao, X., Atir, S., & Schroeder, J. “Undersociality: miscalibrated social cognition can inhibit social connection”(2022)."


]