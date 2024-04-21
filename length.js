
        const arr = [1,2,3,4,5,6,7,8,9,10];

        console.log("Length of array = "+arr.length);

        for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        }

        //for loop
        console.log("===== for loop ====");
        let t1 = '';
        for(let i=0; i<arr.length; i++){
        t1=t1+ arr[i]+' ';
        }
        console.log(t1);

        //for in : use to get index of array
        console.log("===== for in loop ====");
        let t2 = '';
        for(let i in arr){
        t2=t2+ arr[i]+' ';
        }
        console.log(t2);

        //for of : use to get value of array
        console.log("===== for of loop ====");
        let t3 = '';
        for(let val of arr){
        t3=t3+ val+' ';
        }
        console.log(t3);

        //for each  : use to get value of array
        console.log("===== for each loop ====");
        arr.forEach(function(val,index,array){
        console.log(val,index,array);
        })

        //map : use to get value of array
        console.log("===== map loop ====");
        let arr1 = arr.map(function(val){
        return val*2;
        })
        console.log(arr1);

        //filter : use to get value of array
        console.log("===== filter loop ====");
        let arr2 = arr.filter(function(val){
        return val%1==0;
        })
        console.log(arr2);



       