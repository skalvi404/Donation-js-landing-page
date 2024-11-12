// console.log("Index Js work properly");

const addMoney = document.getElementById('btn-donation')
    .addEventListener('click', function () {
        // console.log("donate button working properly");
        const addInputMoney = getInputElementById('ammount-input')
        console.log(addInputMoney);

        //Show add Input Money on Transection Histroy card-1
  
       const historyShow=document.createElement('div')
        historyShow.className='collapse collapse-close bg-white border-base-200 bg-base-200 border collapse-content p-5'
        historyShow.innerHTML=`
        <h2 class="font-semibold">${addInputMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <span class="flex gap-1">
        <p class="text-xs" text-gray-500">Date:${new Date().toDateString()}</p><br>
        <p class="text-xs" text-gray-500">${new Date().toLocaleTimeString()}GMT +0600 (Bangladesh Standard Time)</p>
        </span>
        `
        const historycontaier=document.getElementById('history-container');
        historycontaier.appendChild(historyShow);
        
        // const historyContainer=document.getElementById("history-tab");
        // historyContainer.innerBefore()
        



        const cardAvailableBalance = getTextFieldid('card-available-balance')
        console.log(cardAvailableBalance);

        const newCardBalance = addInputMoney + cardAvailableBalance;
        console.log(newCardBalance);
        document.getElementById('card-available-balance').innerText = newCardBalance;


        // Add Input Ammount In Main Balance For Card-1


        const mainBalance = getTextFieldid('main-balance')
        console.log(mainBalance);
        const newMainBalance = mainBalance - addInputMoney;
        console.log(newMainBalance);

        //Main Balance Show in Display card-1
        document.getElementById('main-balance').innerText = newMainBalance;

        // INPUT VALIDATION FOR CARD-1

        if (addInputMoney <= 0 || isNaN(addInputMoney)) {
            document.getElementById('invalid-1').classList.remove('hidden')
            document.getElementById('card-available-balance').classList.add('hidden')
            return;
        }
        // For Positive Number-Card-1
        if (addInputMoney > 0 || NaN(addInputMoney)) {
            document.getElementById('invalid-1').classList.add('hidden')
            document.getElementById('card-available-balance').classList.remove('hidden')
            return;
        }

// Modal Functionality Start




    })



// for card-2
const addMoney2 = document.getElementById('btn-donation2')
    .addEventListener('click', function () {
        // console.log("donate button working properly");
        const addInputMoney2 = getInputElementById('ammount-input2')
        console.log(addInputMoney2);


        //Show add Input Money on Transection Histroy card-2
  
        const historyShow2=document.createElement('div')
        historyShow2.className='collapse collapse-close bg-white border-base-200 bg-base-200 border collapse-content p-5'
        historyShow2.innerHTML=`
        <h2 class="font-semibold">${addInputMoney2} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <span class="flex gap-1">
        <p class="text-xs" text-gray-500">Date:${new Date().toDateString()}</p><br>
        <p class="text-xs" text-gray-500">${new Date().toLocaleTimeString()}GMT +0600 (Bangladesh Standard Time)</p>
        </span>
        `
        const historycontaier2=document.getElementById('history-container');
        historycontaier2.appendChild(historyShow2);



        const cardAvailableBalance2 = getTextFieldid('card-available-balance2')
        console.log(cardAvailableBalance2);

        const newCardBalance2 = addInputMoney2 + cardAvailableBalance2;
        console.log(newCardBalance2);
        document.getElementById('card-available-balance2').innerText = newCardBalance2;
        FormateCurrency(newCardBalance2);


        // Add Input Ammount In Main Balance For Card-2


        const mainBalance2 = getTextFieldid('main-balance')
        console.log(mainBalance2);
        const newMainBalance2 = mainBalance2 - addInputMoney2;
        console.log(newMainBalance2);

        //Main Balance Show in Display card-2
        document.getElementById('main-balance').innerText = newMainBalance2;

        // INPUT VALIDATION FOR CARD-2
        if (addInputMoney2 <= 0 || isNaN(addInputMoney2)) {
            document.getElementById('invalid-2').classList.remove('hidden')
            document.getElementById('card-available-balance2').classList.add('hidden')
            return;
        }

        // For Positive Number-Card-2

        if (addInputMoney2 > 0 || NaN(addInputMoney2)) {
            document.getElementById('invalid-2').classList.add('hidden')
            document.getElementById('card-available-balance2').classList.remove('hidden')
            return;
        }



    })

// for card-3
const addMoney3 = document.getElementById('btn-donation3')
    .addEventListener('click', function () {
        // console.log("donate button working properly");
        const addInputMoney3 = getInputElementById('ammount-input3')
        console.log(addInputMoney3);


        //Show add Input Money on Transection Histroy card-3
  
        const historyShow3=document.createElement('div')
        historyShow3.className='collapse collapse-close bg-white border-base-200 bg-base-200 border collapse-content p-5'
        historyShow3.innerHTML=`
        <h2 class="font-semibold">${addInputMoney3} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <span class="flex gap-1">
        <p class="text-xs" text-gray-500">Date:${new Date().toDateString()}</p><br>
        <p class="text-xs" text-gray-500">${new Date().toLocaleTimeString()}GMT +0600 (Bangladesh Standard Time)</p>
        </span>
        `
        const historycontaier3=document.getElementById('history-container');
        historycontaier3.appendChild(historyShow3);















        const cardAvailableBalance3 = getTextFieldid('card-available-balance3')
        console.log(cardAvailableBalance3);

        const newCardBalance3 = addInputMoney3 + cardAvailableBalance3;
        console.log(newCardBalance3);
        document.getElementById('card-available-balance3').innerText = newCardBalance3;
        FormateCurrency(newCardBalance3);


        // Add Input Ammount In Main Balance For Card-2


        const mainBalance3 = getTextFieldid('main-balance')
        console.log(mainBalance3);
        const newMainBalance3 = mainBalance3 - addInputMoney3;
        console.log(newMainBalance3);

        //Main Balance Show in Display card-2
        document.getElementById('main-balance').innerText = newMainBalance3;


        // INPUT VALIDAION FOR CARD-3

        if (addInputMoney3 <= 0 || isNaN(addInputMoney3)) {
            document.getElementById('invalid-3').classList.remove('hidden')
            document.getElementById('card-available-balance3').classList.add('hidden')
            return;
        }

        // For Positive Number-Card-3

        if (addInputMoney3 > 0 || NaN(addInputMoney3)) {
            document.getElementById('invalid-3').classList.add('hidden')
            document.getElementById('card-available-balance3').classList.remove('hidden')
            return;
        }

    })


// Hisoty TabFunctionality

const histoyTab=document.getElementById('histoy-button');
histoyTab.addEventListener('click',function(){

    histoyTab.classList.add("bg-primary")
    const donatinstyleChange=document.getElementById('donate-button');
    donatinstyleChange.classList.remove('bg-primary')

    const remoCardveSection=document.getElementById('all-three-card')
   remoCardveSection.classList.add('hidden');

  document.getElementById('history-tab').classList.remove('hidden')
   
    
})

// donation button
const donationTab=document.getElementById('donate-button');
donationTab.addEventListener('click',function(){

    

   const remoCardveSection=document.getElementById('all-three-card')
   remoCardveSection.classList.remove('hidden');

   const histoybuttonStylechange=document.getElementById('histoy-button')
   histoybuttonStylechange.classList.remove('bg-primary')
   const donateButton=document.getElementById('donate-button')
   donateButton.classList.add('bg-primary')

  document.getElementById('history-tab').classList.add('hidden')
  
   
    
})



