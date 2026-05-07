
    $(document).ready(function() {
      $('#saveMarksBtn').on('click', function() {
        const student = $('#studentSelect').val();
        const exam = $('#examSelect').val();
        const marks = $('#marksInput').val();
        if (marks === '') {
          alert('Please enter marks.');
          return;
        }
        alert(`Result saved for ${student} in ${exam} with marks: ${marks}`);
        // optional: clear marks input
        $('#marksInput').val('');
      });
    });
  