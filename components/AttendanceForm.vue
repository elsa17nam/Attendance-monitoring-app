<template>
    <section class="bg-gray-200 p-4 rounded-lg">
      <h2 class="text-blue-500 text-2xl mb-4">Mark Attendance</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block font-bold mb-2">Name:</label>
          <input type="text" v-model="name" id="name" class="w-full p-2 border rounded" required />
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
        this.$emit('submit-attendance', {
          name: this.name,
          status: this.status,
          date: new Date().toLocaleDateString(),
        });
        this.name = '';
        this.status = 'Present';
      },
    },
  };
  </script>
  