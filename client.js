var cohorts = [{
    name: 'Fomalhaut',
    status: 'In-Class',
    count: 13
  },
  {
    name: 'Elnath',
    status: 'In-Class',
    count: 14
  },
  {
    name: 'Deneb',
    status: 'In-Class',
    count: 16
  },
  {
    name: 'Alpine',
    status: 'Prework',
    count: 10
  },
  {
    name: 'Canopus',
    status: 'Graduated',
    count: 17
  }
];

console.log(cohorts);
$(document).ready(function() {
  console.log('jquery ready');
  //append cohorts to the DOM
  appendToDom();


  //delete cohorts from list
  $('#cohortTableBody').on('click', '.deleteButton', deleteCohort);

});

function appendToDom() {
  for (var i = 0; i < cohorts.length; i++) {
    var cohort = cohorts[i]; //makes everything else easier to read, easier to access proeprties
    var $row = $('<tr>');
    /* When creating a variable to store a jQuery object (like $row),
    put $$$ in front to show that it is a jQuery object with jQuery methods
    */

    //check cohort's status and add class to define background color
    $row.addClass(cohort.status.toLowerCase());

    $row.append('<td>' + cohort.name + '</td>');
    $row.append('<td>' + cohort.count + '</td>');
    $row.append('<td>' + cohort.status + '</td>');
    $row.append('<td><button class="deleteButton">Delete Cohort</button></td>');
    $('#cohortTableBody').append($row);


    // $('#cohortTableBody').append('<tr><td>' + cohort.name +
    // '</td><td>' + cohort.count + '</td></tr>');
  }
}

function deleteCohort() {
  $(this).closest('tr').remove();
}
