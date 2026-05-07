
    $(document).ready(function() {
      $('#studentsTable').DataTable({
        responsive: true,
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        order: [[0, 'asc']],
        language: {
          search: "Search students:",
          lengthMenu: "Show _MENU_ entries",
          info: "Showing _START_ to _END_ of _TOTAL_ students"
        },
        columnDefs: [
          { orderable: false, targets: [1,8] } // photo & actions no sorting
        ]
      });
    });
  