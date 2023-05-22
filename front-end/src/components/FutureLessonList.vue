<template>
    <div class="list-wrap">
        <div class="classlist-item" v-for="upcomingLesson in upcomingLessons"  :key="upcomingLesson.id">
            <h3 class="class-label">{{ upcomingLesson.teacherName }}</h3>
            <p class="class-date">{{ upcomingLesson.classDate }}</p>
            <p class="class-time">{{ upcomingLesson.classStartTime }} - {{ upcomingLesson.classEndTime }}</p>
            <button class="lesson-cancel">Request to cancel</button>
        </div>
    </div>
    </template>
    
    
    <script>
    import { students } from '../temp-data';
    export default {
        name: "FutureLessonList",
         props: ['upcomingLessons'],
        data() {
            return {
                students,
        //        futureLessons: [ {
        //         id: '221',
        //         teacherName: 'Patience Osborne',
        //         classDate: '22 May 2023',
        //         classStartTime: '16:00',
        //         classEndTime: '17:00',
        //         classNotes: '',
        //     },
        //     {
        //         id: '222',
        //         teacherName: 'Patience Osborne',
        //         classDate: '24 May 2023',
        //         classStartTime: '16:00',
        //         classEndTime: '17:00',
        //         classNotes: '',
        //     }
        // ]
            }
        }
    }
    </script>
    