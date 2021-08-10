const sortByKey = (key) => (a, b) => {
    // if a is greater than b, go ahead and move B (positive 1! green light!)
    // else keep in same order
    return a[key] > b[key] ? 1 : -1;
};

const employees = [
    {
        eid: 181090121,
        fName: "Johnny",
        lName: "Cash"
    },
    {
        eid: 182131491,
        fName: "John",
        lName: "Smith"
    },
    {
        eid: 10210301,
        fName: "Jane",
        lName: "Smith"
    },
    {
        eid: 102911201,
        fName: "Bob",
        lName: "Dylan"
    }
];

const sortByFirstName = sortByKey("fName");
const sortByLastName = sortByKey("lName");
const sortByEID = sortByKey("eid");

const sortByMany = (...keys) => {
    //given column keys, we're saving the function calls to sort by those keys
    const predicates = keys.map(key => sortByKey(key));

    // using a reducer to create a final sorted result, we go thru each predicate
    // we go thru every element of predicates, which holds our sort functions
    // we pass a,b (which will be every element in our employee array)
    // if result || isn't there, it sorts by the last predicate aka doesn't ACCUMULATE
    // this is because IF the predicate sorts, we have a sort (1), but if it doesn't sort (-1)
    // we want to still keep the place of everything, so we use an OR to keep the
    // sorting saved in our result variable
    // and an initialValue of 0 for our accumulator. If we didn't do this, it would use
    // the first element in the array as the initial value and skip it
    // (aka wouldn't sort by lName, just eid)
    return (a, b) => predicates.reduce((result, predicate) => result || predicate(a, b), 0);
};

const sortedEmployees = [...employees].sort(sortByMany("lName", "eid"));

console.log(sortedEmployees);