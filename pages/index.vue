<!-- pages/index.vue -->
<template>
    <div class="container mx-auto p-4 bg-white rounded-lg shadow">
      <Header />
      <main class="flex gap-4">
        <AttendanceForm @submit-attendance="addRecord" />
        <AttendanceList :records="records" />
      </main>
      <footer class="bg-blue-500 text-white p-4 text-center rounded-b-lg">
        <p>&copy; 2024 Attendance Monitoring Application</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '@/components/Header.vue';
  import AttendanceForm from '@/components/AttendanceForm.vue';
  import AttendanceList from '@/components/AttendanceList.vue';
  
  const records = ref([]);
  
  function addRecord(record) {
    records.value.push(record);
  }
  </script>
  