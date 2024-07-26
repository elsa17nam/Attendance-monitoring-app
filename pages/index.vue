<template>
  <div class="container mx-auto p-1 bg-blue-200 rounded-lg shadow">
    <!-- <div class="container mx-auto p-1 bg-blue-200 rounded-lg shadow"> -->

    <Header />
    <main class="flex gap-4">
      <AttendanceForm @submit-attendance="addRecord" />
      <AttendanceList :records="records" />
    </main>
    <div class="mt-4">
        <button @click="exportToExcel" class="bg-green-400 text-white py-2 px-4 rounded hover:bg-green-700 mb-2 ml-4">
          Export to Excel
        </button>
        <button @click="exportToPDF" class="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-700 ml-4 mt-1">
          Export to PDF
        </button>
      </div>
    <footer class="bg-blue-500 text-white p-2 text-center rounded-b-lg">
      
      <p>&copy; 2024 Attendance Monitoring Application</p>
      
    </footer>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; //installed but working even without importing
// import Header from '@/components/Header.vue';
// import AttendanceForm from '@/components/AttendanceForm.vue';
// import AttendanceList from '@/components/AttendanceList.vue';

const records = ref([]);

function addRecord(record) {
  records.value.push(record);
}

function exportToExcel() {
  // Create a new workbook and a worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(records.value);

  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Attendance Records');

  // Generate the Excel file and trigger a download
  XLSX.writeFile(wb, 'attendance_records.xlsx');
}

function exportToPDF() {
  const doc = new jsPDF();
  
  // Add title to the PDF
  doc.text('Attendance Records', 14, 16);
  
  // Define the columns we want and their titles
  const columns = [
    { title: 'Name', dataKey: 'name' },
    { title: 'Status', dataKey: 'status' },
    { title: 'Date', dataKey: 'date' }
  ];

  // Add the rows to the PDF
  doc.autoTable({
    head: [columns.map(col => col.title)],
    body: records.value.map(record => [record.name, record.status, record.date]),
    startY: 22,
  });

  // Save the PDF
  doc.save('attendance_records.pdf');
}
</script>







