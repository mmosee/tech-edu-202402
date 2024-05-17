const UI ={
    init: function() {
        this.popup.init();
    },
    activate: function(elem, className) {
        elem.classList.add(className)
    },
    inActivate: function(elem) {
        elem.classList.remove(className)
    },
    toggle: function(elem) {
        elem.classList.toggle(className)
    },
    popup: {
        items: document.querySelectorAll("[data-popup]"),
        itemArray: [],
        init: function() {
            this.items.length > 0 ?
                this.dataCollection ()
                : console.log("Popup fail")
        },
        dataCollection : function() {
            const _this = this;
            this.items.forEach((item) => {
                if(_this.itemArray.indexOf(item.dataset.popup) === -1) {
                    _this.itemArray.push(item.dataset.popup)
                }
            })

            if(this.itemArray.length > 0) {
                this.events()
            } else {
                return
            }
        },
        events: function() {
            this.itemArray.forEach((dataName) => {
                const popup = document.querySelector(`[data-popup=${dataName}]`)
                const open = document.querySelector(`[data-popup-open=${dataName}]`)
                const close = document.querySelector(`[data-popup-close=${dataName}]`)

                open.addEventListener("click", () => UI.activate(popup, "is-show"))
                close.addEventListener("click", () => UI.inActivate(popup, "is-show"))
            })
        }
    }
}

UI.init();