<template>
<div class="list-wrap">
    <div class="classlist-item" v-for="lesson in lessons"  :key="lesson.id">
            <h3 class="class-label">{{ lesson.studentName }} and {{ lesson.teacherName }}</h3>
            <p class="class-date">{{ lesson.classDate }}</p>
            <p class="class-time">{{ lesson.classStartTime }} - {{ lesson.classEndTime }}</p>
            <p class="class-notes">Notes: {{ lesson.classNotes }}</p>
            <p class="class-link">Document: {{ lesson.classLink }}</p>
            <button class="lesson-feedback">Give Feedback</button>
        </div>
</div>
</template>


<script>
 import { lessons } from '../temp-data';
export default {
    name: "PastLessonList",
    //  props: ['pastLessons'],
    data() {
        return {
           lessons,
        }
    }
}
</script>
