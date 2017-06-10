var initialCats = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: ["Tabs", "Cutie", "OceanEye"]
}, {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    nicknames: ["Lion heart"]
}, {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: ["Scary cute"]
}, {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    nicknames: ["Ninja Cat"]
}, {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: ["Sleep Dog"]
}]

var Cat = function(data) {
    // Observables
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);

    // Computed Observables
    this.level = ko.computed(function() {
        this.clicks = this.clickCount();
        if (this.clicks <= 10) {
            return "New Born";
        } else if (this.clicks > 10 && this.clicks < 50) {
            return "Infant";
        } else {
            return "Teen";
        }
    }, this);

    // Observable array
    this.nicknames = ko.observableArray(data.nicknames);
};
var ViewModel = function() {
    // To handle changing binding context
    // Self always maps to the view model, regardless of current context
    var self = this;

    this.catList = ko.observableArray([]);
    initialCats.forEach(function(cat){
        self.catList.push(new Cat(cat));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    // Observable
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }

    this.updateCat = function(cat){
        self.currentCat(cat);
    }
}

ko.applyBindings(new ViewModel());
