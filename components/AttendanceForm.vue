
// AttendanceForm.vue
<template>
    <section class="bg-blue-400 p-4 rounded-lg w-1/5">
      <h2 class="text-white text-xl mb-4 text-center">Mark Attendance</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block font-bold mb-2">Name:</label>
          <input type="text" v-model="name" id="name" class="w-full p-2 border rounded" required placeholder="Enter name" />
        </div>
        <div class="mb-4">
          <label for="status" class="block font-bold mb-2">Status:</label>
          <select v-model="status" id="status" class="w-full p-2 border rounded" required>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
      
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        status: 'Present',
      };
    },
    methods: {
      submitForm() {
        const now = new Date();

        this.$emit('submit-attendance', {
          name: this.name,
          status: this.status,
          date: new Date().toLocaleDateString(),
          time: now.toLocaleTimeString(),
        });
        this.name = '';
        this.status = 'Present';
      },
    },
  };
  </script>
  