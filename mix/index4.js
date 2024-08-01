
    let cars = ['audi', 'lykan', 'BMW', 'porsche', 'jaguar'];
    let num = [1, 23, 44, 64, 56, 77, 89, 35]

    let newArray1 = num.map((value) => {
        return value;
        // return value % 2 === 0;
    })

    console.log(newArray1);

    let newArray2 = num.filter((value) => {
        return value % 2 === 0;
    })

    console.log(newArray2);

    let output = num.reduce((prev, curr) => {
        // if (prev > curr) {
        //     return prev;
        // } else {
        //     return curr
        // }

        // OR

        return prev > curr ? prev : curr;
    })

    console.log(output);
