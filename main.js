

$(document).ready(function(){
    $("#exploreBtn").click(function(e){
        e.preventDefault();
        alert("Let's explore the world!");
        setTimeout(function() {
            document.querySelector('#discover').scrollIntoView({ behavior: 'smooth' });
        }, 100); 
    });
});

$(document).ready(function(){
    $("#exploreplace").click(function(e){
        e.preventDefault();
        alert("Let's explore the beautiful places!");
        setTimeout(function(){
            document.querySelector("#explore").scrollIntoView({behavior: 'smooth'});
        },100);
    });
});

$(document).ready(function(){
    $("#travel").click(function(){
        $("body").append( `
            <div class="modal__container show remove">
                <div class="inner__modal__container">
                    <div class="modal__text--container">
                        <div class="inner__text">
                            <h2 class="modal__title">Subscribe Our Newsletter</h2>
                            <p class="modal__subtitle">Subscribe our new beach and enjoy your travel</p>
                        </div>
                    </div>
                    <button class="close__modal" id="closeModalBtn">&times;</button>
                </div>
            </div>
            `
        );
        $("#closeModalBtn").click(function(){
            $(".modal__container").remove();
        });
    });
});
$(document).ready(function(){
$(".burger").click(function(){
    $(".inner__header--items").toggleClass("active");
});
$(".link").click(function() {
    $(".inner__header--items").removeClass("active");
});
});