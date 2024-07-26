<template>
    <section class="bg-gray-200 p-4 rounded-lg">
      <h2 class="text-blue-500 text-2xl mb-4">Attendance Record</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-blue-500 text-white">
            <th class="p-2 text-left">Name</th>
            <th class="p-2 text-right">Status</th>
            <th class="ml-52 ">Date</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in records" :key="index" class="border-b">
            <td class="p-2">{{ record.name }}</td>
            <td class="p-2">{{ record.status }}</td>
            <td class="p-2">{{ record.date }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      records: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  