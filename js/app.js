var ViewModel = function() {
    // Observables
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

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

    // Observable
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    }

    // Observable array
    this.nicknames = ko.observableArray(["Tabs", "Cutie", "OceanEye"]);
}

ko.applyBindings(new ViewModel());
