
    $(document).ready(function() {
      // Initialize DataTable with sorting, pagination, search, responsive
      $('#feesTable').DataTable({
        responsive: true,
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        order: [[0, 'asc']],
        language: {
          search: "Search fees:",
          lengthMenu: "Show _MENU_ entries",
          info: "Showing _START_ to _END_ of _TOTAL_ records"
        },
        columnDefs: [
          { orderable: false, targets: [7] } // actions column unsortable
        ]
      });

      // Save fee button demo
      $('#saveFeeBtn').on('click', function() {
        const student = $('#feeStudent').val();
        const amount = $('#feeAmount').val();
        const method = $('#paymentMethod').val();
        const date = $('#paymentDate').val();

        if (!amount || amount <= 0) {
          alert('Please enter a valid fee amount.');
          return;
        }

        alert(`Fee collected from ${student}\nAmount: $${amount}\nMethod: ${method}\nDate: ${date}`);
        // Clear form and close modal
        $('#feeAmount').val('');
        $('#collectFeeModal').modal('hide');
      });
    });
  