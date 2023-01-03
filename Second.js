const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };
    // a. Calculate the total number of orders placed for the restaurant?.
    console.log("Total number of orders placed =",orderData["Below 500"]+orderData["500-1000"]+orderData["1000-1500"]+orderData["1500-2000"]+orderData["Above 2000"]);
    // b. Calculate the number of order proportion options.
    let count=0;
    for(list in orderData)
    {
    count=count+1;
    }
    console.log("Total number of order proportions =",count);
    // c. Calculate the percentage of each proportion in below format:
    let con=1;
    for(list in orderData)
    {
        const arr=({
            'id' : con++,
            'resturent': "punjab tadka",
            'order': list,
            'order percentage':((`${orderData[list]}`/199)*100).toFixed(2),
        })
        console.log(arr);
    }