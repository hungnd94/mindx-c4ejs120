let laptop = {
    series : "NDH307",
    color : ["Black", "Red"],
    hasWebcam : true,
    turnOn : function (sound) {
        console.log("Laptop speaks", sound);
    }
}

console.log(laptop.color);
laptop.turnOn("What's uppppppppppp??")