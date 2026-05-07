
    $(document).ready(function() {
      // function to update present/absent counts based on toggles
      function updateSummary() {
        let total = 0;
        let present = 0;
        $('#attendanceTableBody tr').each(function() {
          total++;
          const checkbox = $(this).find('.attendance-toggle');
          if (checkbox.is(':checked')) {
            present++;
            // update label text
            $(this).find('.attendance-label').text('Present');
          } else {
            $(this).find('.attendance-label').text('Absent');
          }
        });
        const absent = total - present;
        $('#presentCount').text(present);
        $('#absentCount').text(absent);
      }

      // initial update
      updateSummary();

      // update on any toggle change
      $(document).on('change', '.attendance-toggle', function() {
        updateSummary();
      });

      // Save button click (simulate)
      $('#saveAttendanceBtn').on('click', function() {
        // gather data (demo: show success message)
        const selectedClass = $('#classSelect').val();
        const selectedDate = $('#attendanceDate').val();
        const present = $('#presentCount').text();
        const absent = $('#absentCount').text();
        
        // just a friendly toast-like alert (Bootstrap doesn't include toast, so we use alert for demo)
        alert(`Attendance saved for ${selectedClass} on ${selectedDate}\nPresent: ${present}, Absent: ${absent}`);
      });

      // optional: simulate class change (just for demo, keep same data)
      $('#classSelect').on('change', function() {
        // For demo, we keep same rows, but you could replace with AJAX.
        // We just update class column text to reflect selection (simple ui tweak)
        const newClass = $(this).val();
        $('#attendanceTableBody tr').find('td:eq(2)').text(newClass);
      });
    });
  