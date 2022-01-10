export const array = [
    {
        name: "amp",
        score: 5
    },
    {
        name: "m",
        score: 3
    },
    {
        name: "d",
        score: 1
    },
    {
        name: "adf",
        score: 0
    },
    {
        name: "xvb",
        score: 4
    },
    {
        name: "sfgsf",
        score: 10
    }


]

console.log(array);
let sort = array.sort((a, b) => {
    return a.name - b.name;
});

console.log(sort);