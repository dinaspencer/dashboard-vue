//assign teacher name to student object?

export const students = [
{
    id: '123',
    name: 'Ima Student',
    company: 'Logical',
    numberOneHourClasses: 40,
    numberHalfHourClasses: 40,
    levelEnglish: 'B2',
    emailAddress: 'ima.s@logical.com',
    upcomingLessons: [],
    pastLessons: [],
    
},
{
    id: '345',
    name: 'Rosa Gomez',
    company: 'Pharma',
    numberOneHourClasses: 20,
    numberHalfHourClasses: 20,
    levelEnglish: 'C1',
    emailAddress: 'gomezrosa.@bigpharma.com',
    upcomingLessons: [],
    pastLessons: [
        {
            id: '001',
            teacherName: 'Patience Osborne',
            classDate: '16 May 2023',
            classStartTime: '16:00',
            classEndTime: '17:00',
            classNotes: 'We talked about phrasal verbs.',
        },
        {
            id: '002',
            teacherName: 'Patience Osborne',
            classDate: '18 May 2023',
            classStartTime: '16:00',
            classEndTime: '17:00',
            classNotes: 'We talked about phrasal verbs.',
        }
    ],
    
},

{
    id: '456',
    name: 'Ana Etxebarría',
    company: 'VisaTech',
    numberOneHourClasses: 40,
    levelEnglish: 'B1+',
    emailAddress: 'dinasfotos@gmail.com',
    upcomingLessons: [],
    pastLessons: [],
},

];


export const teachers = [
{
    id: '012',
    name: 'Patience Osborne',
    bioText: 'I love teaching English!',
    emailAddress: 'ms.dinakay@gmail.com',
    upcomingLessons: [],
    pastLessons: [],
},
];



