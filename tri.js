var btn = document.getElementById("button"),
    ia=document.getElementById("side-a"),
    ib=document.getElementById("side-b"),
    ic=document.getElementById("side-c"),
    result=document.getElementById("result"),
    ed = document.getElementById("end");
var i,j,a=1,b=1,c=1,si,sj;
const p = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];



btn.addEventListener("click",function(){
    let t=0;
    a=ia.value/1;
    b=ib.value/1;
    c=ic.value/1;
    console.log();
    if(a+b>c&&b+c>a&&c+a>b){
        i=(a*a)+(b*b)-(c*c);
        j=(2*a*b);
        while(t<=24){
            if(j%p[t]==0&&i%p[t]==0){
                j/=p[t];
                i/=p[t];
            }
            else{
                t++;
            }
        }
        sj=j*j;
        si=sj-(i*i);
        while(t<=24){
            if(sj%p[t]==0&&si%p[t]==0){
                sj/=p[t];
                si/=p[t];
            }
            else{
                t++;
            }
        }
        if(Math.sqrt(si)%1!=0){
            result.innerHTML=`結果
            <br/>
            cos=${i+ "/" + j +  " = " +  (i/j).toFixed(5)} <br/>
            sin=${ "√(" + si + ")/" + j + " = " + Math.sqrt((si/sj)).toFixed(5)}`
        }
        else{
            result.innerHTML=`結果
            <br/>
            cos=${i+ "/" + j +  " = " +  (i/j).toFixed(5)} <br/>
            sin=${ Math.sqrt(si) + "/" + j + " = " + Math.sqrt((si/sj)).toFixed(5)}`
        }
    }
    else{
        result.innerHTML=`結果
        <br/>
        構不成三角形喔`
    }
    

})
ed.addEventListener("click",function(){
    close();
})
