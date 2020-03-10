// function printobjects (students){
//     var students = [
//         {name: 'Remy', cohort: 'Jan'},
//         {name: 'Genevieve', cohort: 'March'},
//         {name: 'Chuck', cohort: 'Jan'},
//         {name: 'Osmund', cohort: 'June'},
//         {name: 'Nikki', cohort: 'June'},
//         {name: 'Boris', cohort: 'June'}
//     ];
//     var x;
//     for (x of students){
//         console.log ("Name: "+ x.name + ", Cohort: "+ x.cohort );
//     } 

// }

function printobjects2(users) {
    var users = {
        employees: [
            { first_name: 'Miguel', last_name: 'Jones' },
            { first_name: 'Ernie', last_name: 'Bertson' },
            { first_name: 'Nora', last_name: 'Lu' },
            { first_name: 'Sally', last_name: 'Barkyoumb' }
        ],
        managers: [
            { first_name: 'Lillian', last_name: 'Chambers' },
            { first_name: 'Gordon', last_name: 'Poe' }
        ]
    };
    var x;
    var i = 1;
for (var position in users) {
        for (x of users[position]) {
        console.log(`${i} - ${x.last_name}, ${x.first_name}  -  ${x.last_name.length + x.first_name.length}`.toUpperCase());
        i++
    }
}

}

