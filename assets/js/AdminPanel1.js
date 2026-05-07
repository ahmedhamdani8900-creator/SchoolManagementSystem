
  $(document).ready(function() {
    $('#recentStudentsTable').DataTable({
      responsive: true,          // enable responsiveness (uses Bootstrap layout)
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50],
      order: [[4, 'desc']],       // sort by enrollment date desc (recent first)
      language: {
        search: "Filter:",
        lengthMenu: "Show _MENU_ entries",
        info: "Showing _START_ to _END_ of _TOTAL_ students"
      },
      columnDefs: [
        { orderable: false, targets: [5] }  // status column no sort
      ]
    });
  });
