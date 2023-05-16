<template>
<div class="list-wrap">
    <div class="classlist-item" v-for="lesson in lessons" :key="lesson.id">
        <h3 class="class-label">{{ lesson.studentName }} and {{ lesson.teacherName }}</h3>
        <p class="class-date">{{ lesson.classDate }}</p>
        <p class="class-time">{{ lesson.classStartTime }} - {{ lesson.classEndTime }}</p>
        <button class="lesson-open">See Details</button>
        <button class="lesson-cancel">Request to cancel</button>
    </div>
</div>
</template>


<script>
import { lessons } from '../temp-data';
export default {
    name: "ClassList",
    props: ['lessons'],
}
</script>
