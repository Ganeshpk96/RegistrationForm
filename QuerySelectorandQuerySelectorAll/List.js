var item = document.querySelector('.list-group-item');
var Seconditem = document.querySelector('.list-group-item:nth-child(2)');
Seconditem.style.color = "green";
console.log(item);

var Lastitem = document.querySelector('.list-group-item:last-child');
Lastitem.style.opacity = 0;

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
var li = document.querySelectorAll('li');

for( var i=0; i<li.length; i++)
{
    if(i == 2)
    {
        li[i].style.color = "green";  
    }
}
for( var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = "green";
    odd[i].style.color = "white";
}


// item[0].style.fontWeight = "bold";
// item[1].style.fontWeight = "bold";
// item[2].style.fontWeight = "bold";
// item[2].style.color = "bold";
// item[3].style.fontWeight = "bold";
// item[4].style.fontWeight = "bold";

// item[1].style.backgroundColor = "green";

