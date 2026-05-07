
    $(document).ready(function() {
      // Common export buttons configuration
      const exportButtons = [
        {
          extend: 'csvHtml5',
          title: 'Report',
          className: 'btn-export',
          text: '<i class="bi bi-filetype-csv"></i> CSV'
        },
        {
          extend: 'pdfHtml5',
          title: 'Report',
          className: 'btn-export',
          text: '<i class="bi bi-file-pdf"></i> PDF',
          orientation: 'portrait',
          pageSize: 'A4'
        }
      ];

      // Initialize each table with buttons and responsive
      $('#studentReportsTable').DataTable({
        responsive: true,
        pageLength: 5,
        dom: 'Bfrtip',
        buttons: exportButtons,
        language: { search: "Search students:" }
      });

      $('#attendanceReportsTable').DataTable({
        responsive: true,
        pageLength: 5,
        dom: 'Bfrtip',
        buttons: exportButtons,
        language: { search: "Search attendance:" }
      });

      $('#feeReportsTable').DataTable({
        responsive: true,
        pageLength: 5,
        dom: 'Bfrtip',
        buttons: exportButtons,
        language: { search: "Search fees:" }
      });

      $('#examReportsTable').DataTable({
        responsive: true,
        pageLength: 5,
        dom: 'Bfrtip',
        buttons: exportButtons,
        language: { search: "Search exams:" }
      });

      // Dummy filter apply (demo)
      $('#applyFilters').on('click', function() {
        const cls = $('#globalClass').val();
        const from = $('#fromDate').val();
        const to = $('#toDate').val();
        const subj = $('#globalSubject').val();
        alert(`Filters applied:\nClass: ${cls}\nFrom: ${from} To: ${to}\nSubject: ${subj}\n(Table data would be filtered in real implementation.)`);
      });
    });
  