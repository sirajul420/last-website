        // NAV SECTION
        let vaLue=document.querySelector(".menu");
        let navHeader=document.querySelector(".header1")
        let toggleNavbar = () => {
                // alert("sHUVO");
            navHeader.classList.toggle("active");
        };
        vaLue.addEventListener("click" , () => toggleNavbar());