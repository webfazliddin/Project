// const tabsBtn   = document.querySelectorAll(".tabs_nav-btn");
// const tabsItems = document.querySelectorAll(".tabs_item");


// tabsBtn.forEach(function(item) {
//       item.addEventListener("click", function() { 
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute("data-tab");
//         let currentTab = document.querySelector(tabId);

//         if( ! currentBtn.classList.contains('active')) {
//             tabsBtn.forEach(function(item) {
//                 item.classList.remove('active');
//             });
    
//             tabsItems.forEach(function(item) {
//                 item.classList.remove('active');
//             });
    
//             currentBtn.classList.add('active');
//             currentTab.classList.add('active');
//         }
//     });
// });
// document.querySelector('.tabs_nav-btn').click();




const tabsBtn   = document.querySelectorAll(".tabs_nav-btn");
const tabsItems = document.querySelectorAll(".tabs_item");



tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        

        if( ! currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});
