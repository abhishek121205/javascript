var i = 1
var str = ""
while(i<=5) {
    var j = 1
    while (j <= 5) {
        if (j==1 || j==5 || i==1 || i==3) {
            str += "* "

        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "&nbsp "
    var j = 1
    while (j <= 5) {
        if (j==1 || j==5 || i==1 || i==3 || i==5) {
            str += "* "
        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "&nbsp "
    var j = 1
    while (j <= 5) {
        if (j==1 || j==5 || i==3) {
            str += "* "
        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "&nbsp "
    var j = 1
    while (j <= 5) {
        if (i==1 || i==5 || j==3) {
            str += "* "
        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "&nbsp "
    var j = 1
    while (j <= 5) {
        if (i==1 || i==5 || i==3 || (i==2 && j==1) || (i==4 && j==5)) {
            str += "* "
        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "&nbsp "
    var j = 1
    while (j <= 5) {
        if (j==1 || j==5 || i==3) {
            str += "* "
        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "&nbsp "
    var j = 1
    while (j <= 5) {
        if (i==1 || i==3 || i==5 || j==1) {
            str += "* "
        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "&nbsp "
    var j = 1
    while (j <= 5) {
        if (j==1 || (i==3 && j==2) || (i==1 && j==4) || (i==2 && j==3) || (i==5 && j==4) || (i==4 && j==3)) {
            str += "* "
        } else {
            str += "&nbsp "
        }
        j++
    }

    str += "<br/>"
    i++
}
document.write(str)
