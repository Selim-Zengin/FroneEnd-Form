const tutucu=['E','E','E','E'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');


form.addEventListener('submit',e=>{
    // sayfanın yenilenmemesi içinn preventDefault kodu kullanılır
    e.preventDefault();
    let scor=0;
    const kullaniciSorusu=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    kullaniciSorusu.forEach((element,index) => {
        if (element===tutucu[index]) {
            scor+=25;
        }
        
    });
    // console.log(scor);
    // result.classList.remove('d-none');
    // let puan=0;
    // const bastir=setInterval(() => {
    //     result.querySelector('span').textContent=`${puan}%`;
    //     if(puan==scor){
    //         clearInterval(bastir);
    //     }
    //     else{
    //         puan++;
    //     }

    // }, 20);
    console.log(scor);
    result.classList.remove('d-none');
    let puan=0;
    const bastir=setInterval(() => {
        result.querySelector('span').textContent=`%${puan}`;
        if(puan==scor){
            clearInterval(bastir);
        }
        else{
            puan++;
        }
    }, 20);

})

