
    $(document).ready(function() {
      $('#teachersTable').DataTable({
        responsive: true,
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        order: [[0, 'asc']],
        language: {
          search: "Search teachers:",
          lengthMenu: "Show _MENU_ entries",
          info: "Showing _START_ to _END_ of _TOTAL_ teachers"
        },
        columnDefs: [{ orderable: false, targets: [1,8] }]
      });
    });
  