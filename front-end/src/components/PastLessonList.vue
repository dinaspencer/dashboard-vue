<template>
<div class="list-wrap">
    <div class="classlist-item" v-for="pastLesson in pastLessons" :key="pastLesson.id">
        <h3 class="class-label">{{ pastLesson.teacherName }}</h3>
        <p class="class-date">{{ pastLesson.classDate }}</p>
        <p class="class-time">{{ pastLesson.classStartTime }} - {{ pastLesson.classEndTime }}</p>
        <button class="lesson-open">See Details</button>
        <button class="lesson-cancel">Request to cancel</button>
    </div>
</div>
</template>


<script>
export default {
    name: "PastLessonList",
    //  props: ['pastLessons'],
    data() {
        return {
           pastLessons: [ {
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
    ]
        }
    }
}
</script>
