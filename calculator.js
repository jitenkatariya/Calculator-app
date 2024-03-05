

var flag = 0;

function display(x) { 
    if(flag == 1){
        cleardisplay();
        document.getElementById("title").value += x;  
        flag=0;
    }else{
        document.getElementById("title").value+= x;  
}
}

function result () {
    let calculator = document.getElementById("title").value;
    let result = eval(calculator);
    document.getElementById("title").value = result;
    flag = 1;
}

function cleardisplay() {
    document.getElementById("title").value ='';
}


























// take one varible as flag. When = is pressed it's activated and based on that change it's value. Keep two values for varible. 
// 1 is there tyare normally lahay badhu.
// 0 hoi tyare junu clear thay and navu lakhay

// flag =1: normally lakhay
// = dabave atle 0 thay 
// navu koj btn dabave atle screen clear thay, ae btn nu lakhase screen par and  flag ni value 1 thay 
// flag=0: answer clear thay and varible ni value 1 thay