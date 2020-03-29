const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'magenta'],
  lis = document.querySelectorAll('li');
  console.dir(lis);
  
lis.forEach((li,i)=>{
  li.addEventListener('click', paint());
});

function paint() {
  var i = 0;
    return  function (){
      this.style.backgroundColor = colors[i%colors.length];
    i++;
    };
};