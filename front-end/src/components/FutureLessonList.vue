<template>
    <div class="list-wrap">
        <div class="classlist-item" v-for="futureLesson in futureLessons" :key="futureLesson.id">
            <h3 class="class-label">{{ futureLesson.teacherName }}</h3>
            <p class="class-date">{{ futureLesson.classDate }}</p>
            <p class="class-time">{{ futureLesson.classStartTime }} - {{ futureLesson.classEndTime }}</p>
            <button class="lesson-cancel">Request to cancel</button>
        </div>
    </div>
    </template>
    
    
    <script>
    export default {
        name: "FutureLessonList",
        //  props: ['pastLessons'],
        data() {
            return {
               futureLessons: [ {
                id: '221',
                teacherName: 'Patience Osborne',
                classDate: '22 May 2023',
                classStartTime: '16:00',
                classEndTime: '17:00',
                classNotes: '',
            },
            {
                id: '222',
                teacherName: 'Patience Osborne',
                classDate: '24 May 2023',
                classStartTime: '16:00',
                classEndTime: '17:00',
                classNotes: '',
            }
        ]
            }
        }
    }
    </script>
    