<template>
  <section class="bg-blue-400 p-4 rounded-lg w-4/5 ">
    <h2 class="text-white text-xl mb-6 text-center justify-center ">Attendance Record</h2>
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-blue-500 text-white">
          <th class="p-2 text-left">Name</th>
          <th class="p-2 text-left">Status</th>
          <th class="p-2 text-left ">Date</th>
          <th class="p-2 text-left">Time</th>
          <th class="p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in records" :key="index" class="border-b">
          <td class="p-2">{{ record.name }}</td>
          <td class="p-2">{{ record.status }}</td>
          <td class="p-2">{{ record.date }}</td>
          <td class="p-2">{{ record.time }}</td>
          <td class="p-2">
            <button @click="emitEditRecord(index)" class="bg-green-400 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-4">Edit</button>
            <button @click="emitDeleteRecord(index)" class="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-600 ">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  records: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['edit-record', 'delete-record']);

const emitEditRecord = (index) => {
  emit('edit-record', index);
};

const emitDeleteRecord = (index) => {
  emit('delete-record', index);
};
</script>

