
    let info = [
        { name: 'abc', email: 'abc@gmail.com', age: 123 },
        { name: 'def', email: 'def@gmail.com', age: 456 },
        { name: 'ghi', email: 'ghi@gmail.com', age: 789 }
    ]

    let stu = {
        name: 'jkl',
        email: 'jkl@gmail.com',
        age: 101112
    }

    info.push(stu);
    localStorage.setItem('info', JSON.stringify(info));