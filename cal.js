let string="";
let buttons=document.querySelectorAll('.button');
let scr=document.querySelector('.screen');
let splbtn=document.querySelector(".spl");

splbtn.addEventListener('click',()=>{
    document.location.reload();
})

Array.from(buttons).forEach((button)=>{
    try{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="OFF")
        {
            string="";
            scr.value=string;
            scr.style.color='black';
            let bt=document.querySelectorAll('.button');
            Array.from(bt).forEach((val)=>{
                val.disabled=true;
            })
        }
        else if(e.target.innerHTML=='X')
            {
                string=string+'*';
            } 
        else if(e.target.innerHTML=='=')
        {
           string=eval(string);
           scr.value=string;
        }
       else if(e.target.innerHTML=='AC')
            {
                string="";
                scr.value=string;
            }
        else{
        string=string+e.target.innerHTML;
        scr.value=string;
        }
    })
    }
    catch(err)
    {
        scr.value=`error:${err}`;
    }
})

/*let bt7=document.getElementById("bt-7")
let cns=document.querySelector("input");
console.log(bt7);
bt7.addEventListener("click",()=>{
         cns.value=7;
         console.log(cns.value)
})*/