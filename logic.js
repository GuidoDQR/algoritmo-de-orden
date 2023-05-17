var container = document.getElementsByClassName("grid-container");
var b_order     = document.getElementById("order");
var random    = document.getElementById("random");
let maxBlock  = 40;

createBlocks();

function createBlocks(){
    let block;
    let height = 10;
    for(i=0; i < maxBlock; i++){
        block = document.createElement("div");
        block.className = "grid-item";
        container[0].appendChild(block);
        height = getRandomInt(0,screen.height-200);
        block.style.height = height;
        block.innerHTML    = height;
        block.style.order  = i;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

b_order.addEventListener("click", order);

function order(){
    let blocks = Array.from(document.getElementsByClassName("grid-item"));

    orderbyOrder(blocks);
    
    orderbyHeight(blocks);
}

function orderbyOrder(blocks){
    do{
        var repeat = false;
        for(i=0;i<blocks.length-1;i++){
            if(parseInt(blocks[i].style.order) > parseInt(blocks[i+1].style.order)){
                var aux = blocks[i];
                blocks[i] = blocks[i+1];
                blocks[i+1] = aux;
                repeat = true;
            }
        }
    }while(repeat == true)
}

function orderbyHeight(blocks){
    do{
        repeat = false;
        for(i=0;i<blocks.length-1;i++){
            if(parseInt(blocks[i].style.height) > parseInt(blocks[i+1].style.height)){
                var aux = blocks[i].style.order;
                blocks[i].style.order = blocks[i+1].style.order;
                blocks[i+1].style.order = aux;

                var aux2 = blocks[i];
                blocks[i] = blocks[i+1];
                blocks[i+1] = aux2;
                repeat = true;
            }
        }
    }while(repeat == true)
}

random.addEventListener("click", rechargeThePage);

function rechargeThePage(){
    location.reload();
}