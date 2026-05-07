
    $(document).ready(function() {
      $('#classesTable').DataTable({
        responsive: true,
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        order: [[0, 'asc']],
        language: {
          search: "Search classes:",
          lengthMenu: "Show _MENU_ entries",
          info: "Showing _START_ to _END_ of _TOTAL_ classes"
        },
        columnDefs: [
          { orderable: false, targets: [5] } // actions column unsortable
        ]
      });
    });
  