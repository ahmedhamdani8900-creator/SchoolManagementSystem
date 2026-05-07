
    $(document).ready(function() {
      $('#subjectsTable').DataTable({
        responsive: true,
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        order: [[0, 'asc']],
        language: {
          search: "Search subjects:",
          lengthMenu: "Show _MENU_ entries",
          info: "Showing _START_ to _END_ of _TOTAL_ subjects"
        },
        columnDefs: [
          { orderable: false, targets: [5] } // actions column unsortable
        ]
      });
    });
  