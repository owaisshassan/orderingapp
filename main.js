let allitems=document.querySelectorAll("input[type=checkbox]");

let imgarr=["https://b.zmtcdn.com/data/pictures/chains/0/18887360/1870f458f82f92289a6411afdf4b59f7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
"https://b.zmtcdn.com/data/pictures/chains/0/18361680/ae2e4b97edcf813b90d13c0133ba9f15.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
"https://b.zmtcdn.com/data/pictures/chains/0/18361680/8ee5fddfbd5253bb8873dda923bc0929.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
"https://b.zmtcdn.com/data/pictures/chains/4/19856274/2d0d2d1253485a3658cf664dcff562aa.jpg?fit=around|300:273&crop=300:273;*,*"];

let menu=[];

for(i=0;i<allitems.length;i++)
{
    let item={
        name: allitems[i].value,
        image:imgarr[i],
    }
    menu.push(item);
}

 
localStorage.setItem("menu",JSON.stringify(menu));

let orderbutton= document.querySelector("button");

orderbutton.addEventListener("click",function(){

    let orderitems=document.querySelectorAll("input[type=checkbox]:checked");

    let menu=JSON.parse(localStorage.getItem("menu"));

    let food=[];

    let count=5;

    let promise=new Promise(function(resolve,reject){

        let id=setInterval(function(){
            count--;
            let p=document.getElementById('para');
            p.innerText=null;
            p.innerText=`${count} sec to go for you order...`;

            if(count===0)
            {
                clearInterval(id);
                p.innerText=null;
            }
        },1000);

        setTimeout(function(){
            let pa=document.getElementById('para');
            menu.map(function(el){
                for(let i=0;i<orderitems.length;i++)
                {
                    console.log("el", el)
                    
                    if(el.name===orderitems[i].value)
                    {
                    food.push(el);
                    }
                }
            })
            console.log(pa)

            if(food.length === 0) {
                pa.innerText='No food selected. Please select a food item';
            } else {
                pa.innerText='Your Order Is Ready. Thank You ! Visit Again..';
            }

            food.forEach(function(el){
                let bag=document.getElementById('foody');
                console.log(bag)
                let image=document.createElement('img');
                image.src=el.image;
                let p=document.createElement('p');
                p.innerText = el.name;
        
                bag.append(image,p);
                document.querySelector("#foodbox").append(bag);
            });
            if(food.length===0)
            {
                reject("please order some food");
            }
            else
            {
                resolve();
            }
        },5000);

    })
    promise.then(function(res){
        console.log('fooditems:',orderitems);
        console.log('please receive your order');
    })
    .catch(function(err){
        console.log(err);
    })

    
    console.log("foo", food);
    
});






