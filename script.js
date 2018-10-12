/**
 * Created by sstienface on 07/10/2018.
 */

var viewport = document.getElementById('viewport'),
    zone_rouge = document.createElement('div'),
    death_counter = 0;

zone_rouge.style.height = '50px';
zone_rouge.style.width = '50px';
zone_rouge.style.backgroundColor = 'red';

viewport.append(zone_rouge);

function resetKenny() {
    document.getElementById('kenny').style.top = '200px';
    document.getElementById('kenny').style.left = '200px';
}

function checkForDeath() {
    var top = parseInt(document.getElementById('kenny').style.top),
        left = parseInt(document.getElementById('kenny').style.left);

    if (top < 40 && left < 40) {
        death_counter++;
        alert('You are dead!\nDeath Counter: ' + death_counter);
        resetKenny();
        return true;
    }
    return false;
}

function moveLeft() {
    var t = parseInt(document.getElementById('kenny').style.left);
    t -= 10;

    if (checkForDeath()) {
        return;
    }

    if (t < 0) {
        return;
    }
    document.getElementById('kenny').style.left = t + 'px';
}

function moveUp() {
    var t = parseInt(document.getElementById('kenny').style.top);
    t -= 10;

    if (checkForDeath()) {
        return;
    }

    if (t < 0) {
        return;
    }
    document.getElementById('kenny').style.top = t+'px';
}

function moveRight() {
    var t = parseInt(document.getElementById('kenny').style.left);
    t += 10;
    if (t > 470) {
        return;
    }
    document.getElementById('kenny').style.left = t + 'px';
}

function moveDown() {
    var t = parseInt(document.getElementById('kenny').style.top);
    t += 10;
    if (t > 470) {
        return;
    }
    document.getElementById('kenny').style.top = t+'px';
}

document.addEventListener('keydown', function(e) {
    switch (e.which) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
        default:
            e.preventDefault();
    }

});

document.getElementById('up').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.top);
    t -= 10;

    if (checkForDeath()) {
        return;
    }

    if (t < 0) {
        return;
    }
    document.getElementById('kenny').style.top = t+'px';
});
document.getElementById('down').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.top);
    t += 10;
    if (t > 470) {
        return;
    }
    document.getElementById('kenny').style.top = t+'px';
});

document.getElementById('left').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.left);
    t -= 10;

    if (checkForDeath()) {
        return;
    }

    if (t < 0) {
        return;
    }
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('right').addEventListener('click',function() {
    var t = parseInt(document.getElementById('kenny').style.left);
    t += 10;
    if (t > 470) {
        return;
    }
    document.getElementById('kenny').style.left = t + 'px';
});