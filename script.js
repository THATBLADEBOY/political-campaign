// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)
// Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement
// URL for donation form
// Calendar of events
// Volunteer information
// Name
// Address
// Email
// Phone number
// Availability
// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
// Biography
// Image gallery
// Head shot
// Picture of family
// Picture of constituents
// Mission statement
// URL for registering to vote

const elizabeth = {
    congressionalDistrict: "1st District",
    platformStatements:
        {   taxes: "increase",
            jobs: "we need more jobs",
            infrastructure: "is good",
            healthcare: "should be free",
            crimeAndEnforcement: "crime is bad ok?"
        },
    donationForm: "www.gimmesomemoney.org",
    eventCalendar: [
        {
            event: "kissing babies",
            when: "12/11/2018",
            where: "orphanage"
        },
        {
            event: "shaking hands",
            when: "12/15/2018",
            where: "arm wrestling association"
        },
        {
            event: "smiling and nodding",
            when: "12/17/2018",
            where: "McDonald's"
        }
    ],
    volunteers: [
        {
            name: "Sue",
            address: "123 Easy St.",
            email: "sue@email.com",
            phone: "555-444-0000",
            availability: "weekends",
            activities: ["phone calls, door to door, taking polls"]
        },
        {
            name: "Joe",
            address: "321 Hard St.",
            email: "joe@email.com",
            phone: "123-456-0000",
            availability: "weekdays",
            activities: ["taking polls"]
        },
        {
            name: "BillyBob",
            address: "1 Medium St.",
            email: "billybob@email.com",
            phone: "222-333-4444",
            availability: "all day errday",
            activities: ["phone calls, door to door, taking polls, spitting dip"]
        }
    ],
    biography: "Elizabeth is a good person. She will make change. Vote for her.",
    galler: [
        {
            name: "head shot",
            image: "#"
        },
        {
            name: "family",
            image: "#",
        },
        {
            name: "constituents",
            image: "#"
        }
    ],
    missionStatement: "To infinity and beyond.",
    voteURL: "www.voteforpedro.com"

}