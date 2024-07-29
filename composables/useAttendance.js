// composables/useAttendance.js
import { ref } from 'vue';

export const useAttendance = () => {
  const records = ref([]);

  const addRecord = (record) => {
    records.value.push(record);
  };

  const editRecord = (index, updatedRecord) => {
    records.value[index] = updatedRecord;
  };

  const deleteRecord = (index) => {
    records.value.splice(index, 1);
  };

  return {
    records,
    addRecord,
    editRecord,
    deleteRecord,
  };
};
