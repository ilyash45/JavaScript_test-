// Map and Filter Example
const data = [
    {id: '1', title: "car"},
    {id: '2', title: "bus"},
    {id: '3', title: "plane"},
    {id: '4', title: "train"},
    {id: '5', title: "ship"},
];
const upperData = data.map((el) => {
    return el.title.toUpperCase();
});
console.log(upperData);

// Splice and Slice Example
const data2 = [
    'car',
    'bus',
    'train',
    'bike',
];
const removedArray = data2.splice(2, 2);
console.log(removedArray);

// Concat Example
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [11, 12, 13, 14, 15];

const mergedArray = array1.concat(array2, array3);
console.log(mergedArray);

// Find and FindIndex Example
const data3 = [
    {id: '1', title: "first"},
    {id: '2', title: "second"},
    {id: '3', title: "third"},
    {id: '4', title: "fourth"},
];

const item = data3.find((el) => {
    return el.title === "third";
});
console.log(item);

// Destructuring Example
const name = ["ilyash", "rohit"];
const [firstName, lastName] = name;
console.log(firstName, lastName);

// Promise Example
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         
        if (!response.ok) throw new Error('Network response was not ok');
        
        const result = await response.json();
        return result;

    } catch (e) {
        console.log(e);
    }
};

fetchData().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('request finished');
});
