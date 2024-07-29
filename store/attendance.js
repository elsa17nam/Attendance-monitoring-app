// store/attendance.js
import { defineStore } from 'pinia';

export const useAttendanceStore = defineStore('attendance', {
  state: () => ({
    records: [],
  }),
  actions: {
    addRecord(record) {
      this.records.push(record);
    },
    editRecord(index, updatedRecord) {
      this.records[index] = updatedRecord;
    },
    deleteRecord(index) {
      this.records.splice(index, 1);
    },
  },
});
