var i = 0;
    var cars = ['assets/images/img-1.jpg', 'assets/images/car-2.jpg', 'assets/images/img-3.jpg']

    function next() {
        if (i == cars.length - 1) {
            i = 0;
        } else {
            i++;
        };
        document.slider.src = cars[i];
    }

    function previous() {
        if (i == 0) {
            i = cars.length - 1;
        } else {
            i--;
        }
        document.slider.src = cars[i];
    }

    function opeen() {
        var x = document.getElementById('crInfo').style.opacity = '1';
        var prev = document.getElementById('prev').style.opacity = '0';
        var prev = document.getElementById('next').style.opacity = '0';
    }

    function closee() {
        var x = document.getElementById('crInfo').style.opacity = '0';
        var prev = document.getElementById('prev').style.opacity = '1';
        var prev = document.getElementById('next').style.opacity = '1';
    }