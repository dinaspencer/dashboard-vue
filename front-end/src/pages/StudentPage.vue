<template>
    <div class="main-wrap">
        <div class="main-details">
            <h1>{{ student.name }}</h1>
            <h3>Company: {{ student.company }}</h3>
            <h3>Total number of 1-hour classes: <strong>{{ student.numberOneHourClasses }}</strong></h3>
            <h3>Total number of 30-minute classes: <strong>{{ student.numberHalfHourClasses }}</strong></h3>
            <h3>Current English Level: <strong>{{ student.levelEnglish }}</strong></h3>
        </div>
        <div class="countdown">
            <!--insert: graphic with x out of 40 completed-->
        </div>
        <div class="class-button">
            <button>Schedule Class</button>
        </div>
        <div class="class-upcoming-list">
            <h3>Upcoming Classes</h3>
            <ClassList :lessons="lessons" />
        </div>
        <div class="class-history-list">
            <h3>Class History</h3>
        </div>
    </div>
</template>


<script>

import ClassList from '../components/ClassList.vue';
import { students } from '../temp-data';
    export default {
        name: 'StudentPage',
        components: {
            ClassList,
        },
        data() {
            return {
                student: students.find(student => student.id === this.$route.params.studentId)
            }
        }
    }
</script>