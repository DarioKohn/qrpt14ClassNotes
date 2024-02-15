class Employee {
    id: number; 
    name: string; 
    phone: number; 
    email: string; 
    //! all of the above are now required in order to use the Employee class. 
    constructor(id: number, name: string, phone: number, email: string) {
        this.id = id; 
        this.name = name; 
        this.phone = phone; 
        this.email = email; 
    }; 
}; 
//First Object Below
let firstEmployee = new Employee (
    1, 
    'Ahsoka Tano', 
    8008008080, 
    'bestpadawanever@mylightsabersarecoolerthanyours.com'
); 
// Second Object below
let secondEmployee = new Employee (
    2, 
    'Obi Wan Kanobi', 
    8018018018,
    'itsoveranakin@ihavethehighground.com'
); 
console.log(firstEmployee); 
console.log(secondEmployee); 

let interns: Array<Employee> = [
    new Employee(3, 'Anakin Skywalker', 8098098090, 'ihatesand@itsroughandcourseandgetseverywhere.com'), 
    new Employee(4, 'Darth Vader', 8108108100, 'luke@iamyourfather.com'),
    new Employee(5, 'Chewbacca', 9009009090, 'argggggggggh@aragg.com'),
    new Employee(6, 'Han Solo', 9019019010, 'iknow@iknow.com'),
]; 

interns.forEach((person) => {
    console.log(`new intern info ${person.id} ${person.name} ${person.phone} ${person.email}`)
}); 