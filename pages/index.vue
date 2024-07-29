
<template>
  <div class="container mx-auto p-1 bg-blue-400 rounded-lg shadow">
    <Header />
    <main class="flex gap-4">
      <AttendanceForm @submit-attendance="addRecord" />
      <AttendanceList :records="records" @edit-record="handleEditRecord" @delete-record="handleDeleteRecord" />
    </main>
    <div class="mt-4">
      <button @click="exportToExcel" class="bg-green-400 text-white py-2 px-4 rounded hover:bg-green-700 mb-2 ml-20">
        Export to Excel
      </button>
      <button @click="exportToPDF" class="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-700 ml-5">
        Export to PDF
      </button>
    </div>
    <footer class="bg-blue-500 text-white p-2 text-center rounded-b-lg">
      <p>&copy; 2024 Attendance Monitoring Application</p>
    </footer>
  </div>
</template>

<script setup>
import { useAttendance } from '~/composables/useAttendance';
// import { useAttendanceStore } from '~/store/attendance';

import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const { records, addRecord, editRecord, deleteRecord } = useAttendance();
// const attendanceStore = useAttendanceStore();
// const { records, addRecord, editRecord, deleteRecord } = attendanceStore;

function handleEditRecord(index) {
  const updatedRecord = promptForRecord(records.value[index]);
  if (updatedRecord) {
    editRecord(index, updatedRecord);
  }
}

function handleDeleteRecord(index) {
  if (confirm('Are you sure you want to delete this record?')) {
    deleteRecord(index);
  }
}

function promptForRecord(record) {
  const name = prompt('Enter name:', record.name);
  const status = prompt('Enter status:', record.status);
  const date = new Date().toLocaleDateString();
  return name && status ? { name, status, date } : null;
}

function exportToExcel() {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(records.value);
  XLSX.utils.book_append_sheet(wb, ws, 'Attendance Records');
  XLSX.writeFile(wb, 'attendance_records.xlsx');
}

function exportToPDF() {
  const doc = new jsPDF();
  doc.text('Attendance Records', 14, 16);
  const columns = [
    { title: 'Name', dataKey: 'name' },
    { title: 'Status', dataKey: 'status' },
    { title: 'Date', dataKey: 'date' },
    { title: 'Time', dataKey: 'time' }
  ];
  doc.autoTable({
    head: [columns.map(col => col.title)],
    body: records.value.map(record => [record.name, record.status, record.date, record.time]),
    startY: 22,
  });
  doc.save('attendance_records.pdf');
}
</script>


