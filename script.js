$(function() {
    $('p').hide();
    var
        $mainMenuItems = $('#main-menu ul').children('li'),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,
        animationSpeed = 400,
        init = function() {
            bindEvents();
            if (validIndex(openedIndex)) {
                animateItem($item = $mainMenuItems.eq(openedIndex), true, animationSpeed);
            }
        }

    bindEvents = function() {

        $mainMenuItems.children('.images').click(function() {
            var newIndex = $(this).parent().index();
            $item = $mainMenuItems.eq(newIndex);
            checkAndAnimateItem(newIndex);
        });

        $('.button').hover(
            function() {
                $(this).addClass("hovered")
            },
            function() {
                $(this).removeClass("hovered")
            });

        $(".button").click(function() {
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);

        })
    }

    validIndex = function(indexToCheck) {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    }

    animateItem = function($item, toOpen, speed) {
        var $colorImage = $item.find('.color'),
            itemParam = toOpen ? { width: "420px" } : { width: "140px" },
            colorImageParam = toOpen ? { left: "0px" } : { left: "140px" };

        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed, function() {
            animateParagraph($item, toOpen)
        });

    };

    animateParagraph = function($item, toOpen) {
        if (toOpen) {
            $item.find('p').eq(0).fadeIn(function() {
                $item.find('p').eq(1).fadeIn(function() {
                    $item.find('p').eq(2).fadeIn(function() {

                    });
                });
            });
        } else {
            $item.find('p').hide();
        }
    }

    checkAndAnimateItem = function(indexToCheckAndAnimate) {
        if (openedIndex === indexToCheckAndAnimate) {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, animationSpeed);
            openedIndex = -1;
        } else {
            if (validIndex(indexToCheckAndAnimate)) {
                animateItem($mainMenuItems.eq(openedIndex), false, animationSpeed);
                openedIndex = indexToCheckAndAnimate;
                animateItem($mainMenuItems.eq(openedIndex), true, animationSpeed);
            }
        }
    };

    init();

});