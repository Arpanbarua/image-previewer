

// let arr = ["green", "red","blue", 50, 'test'];

// // console.log(arr[1]);

// arr.map((el, index)=>{
//      console.log(el, index);
// });

let allImages = Array.from(document.querySelectorAll(".img_single img"));
let preview = document.querySelector('.preview');
let preview_img = document.querySelector('.preview_img img');
let rightbtn = document.querySelector('.right');
let leftbtn = document.querySelector('.left');
let crossbtn = document.querySelector(".cross_btn");

let currentIndex = 0;


allImages.map((el, index) => {

    el.addEventListener("click", function() {
        // console.log(allImages[index].src);
        currentIndex = index;
        preview_img.src = allImages[index].src;
        preview.classList.add("preview_active");

    
        
    });

});

rightbtn.addEventListener("click", function(){

            currentIndex++;
            
            if(currentIndex > allImages.length-1)
            {
                currentIndex = 0;
            }
            preview_img.src = allImages[currentIndex].src ;
            //console.log(allImages.length);
           


        });

        leftbtn.addEventListener("click", function(){
            currentIndex--;
           
            if(currentIndex <0)
            {
                currentIndex = allImages.length-1;
            }

            //console.log(allImages[index].src);
            preview_img.src = allImages[currentIndex].src ;
    });

crossbtn.addEventListener("click", function () {
    preview.classList.remove("preview_active");
});





