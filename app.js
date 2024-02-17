const allBtn=document.getElementsByClassName('add-btn');
let count=0;
for(const btn of allBtn){
  btn.addEventListener('click',function(event){
    count+=1;

    const placeName=event.target.parentNode.childNodes[1].innerText;
    const price=parseInt(event.target.parentNode.childNodes[3].childNodes[1].innerText);
    const selectedPlaceContainer=document.getElementById('selected-place-container');
    const li=document.createElement('li');
    const p=document.createElement('p');
    const p2=document.createElement('p');
    p.innerText=placeName;
    p2.innerText=price;
    li.appendChild(p);
    li.appendChild(p2);

    const budget=document.getElementById('budget').innerText;
    const convertoBudget=parseInt(budget);
    if(convertoBudget-price<0){
      alert('low budget')
      return
    }
    document.getElementById('budget').innerText=convertoBudget-price;
    setInnerTextById('cart-count',count);
    event.target.setAttribute('disabled', '');
    event.target.parentNode.parentNode.style.background='gray'
    // Calculation Area
    // 1. Total Cost
    const totalCostById=document.getElementById('total-cost').innerText
    const totalCost=parseInt(totalCostById);
    const total=price+totalCost;
    setInnerTextById('total-cost',total);
    // Grand Total
    const categoryBtn=document.querySelectorAll('.category-btn');
    const granTotalById=document.getElementById('grand-total');
    for(const btn of categoryBtn){
      btn.addEventListener('click',function(){
        const btnInnertext=btn.innerText.split(' ')[0];
        if(btnInnertext==='Bus'){
          const grandTotal=total+100;
          granTotalById.innerText=grandTotal;
        }
        else if(btnInnertext==='Train'){
          const grandTotal=total-200;
          granTotalById.innerText=grandTotal;
        }
        else if(btnInnertext==='Flight'){
          const grandTotal=total+500;
          granTotalById.innerText=grandTotal;
        }
      })
    }
    grandTotal('grand-total',price)
  })
}

function setInnerTextById(elementId,value){
  const cartCount=document.getElementById(elementId);
  cartCount.innerText=value;
}
function grandTotal(elementId, value){
  const totalCostByid=document.getElementById(elementId);
  const totalCost=parseInt(totalCostByid.innerText);
  const total=value+totalCost;
  totalCostByid.innerText=total;
}