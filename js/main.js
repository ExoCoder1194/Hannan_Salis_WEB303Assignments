// WEB303 Assignment2
// Author: Hannan Salis
// Student ID: 0820285
// Date Created: 2023-09-16

$(document).ready(function() {
    // Function to load content from a file using AJAX
    function loadContent(file) {
      $('#content').fadeOut(function() {
        $.ajax({
          url: file,
          dataType: 'html',
          success: function(data) {
            $('#content').html(data).hide().fadeIn();
          },
          error: function() {
            alert('Error loading content');
          }
        });
      });
    }
  
    // Click event handlers for the links
    $('#prospect').click(function(e) {
      e.preventDefault();
      loadContent('prospect.html');
    });
  
    $('#convert').click(function(e) {
      e.preventDefault();
      loadContent('convert.html');
    });
  
    $('#retain').click(function(e) {
      e.preventDefault();
      loadContent('retain.html');
    });
  });
  

