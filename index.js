

new Vue({

    el: '#app',
    data: function () {
        return {
            'currentpage': 'home',
            'currentservice': ''
        }
    },
    methods: {
        changePageTo(clickedPage) {
            this.currentpage = clickedPage;
        },

        cambiaServicio(servicio) {
            this.currentservice = servicio;
            const el = this.$el.getElementsByClassName('descripcion')[0];

            if (el) {
                el.scrollIntoView();
            }
        },

        cambiaSobreMi(clickedInfo) {
            this.currentInfo = clickedInfo;
        },

    },
    mounted: function () {
        const cookieContainer = document.querySelector(".cookie-container")
        const cookieButton = document.querySelector(".cookie-btn")

        cookieButton.addEventListener("click", () => {
        
            cookieContainer.classList.remove("active");
            localStorage.setItem("cookieBannerDisplayed", "true")
        });

        setTimeout(() => {
            if (!localStorage.getItem("cookieBannerDisplayed"))
                cookieContainer.classList.add("active");
        }, 2000);


    }

});


