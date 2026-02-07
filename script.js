const menuIcon = document.querySelector("#menu-icon");
      const navbar = document.querySelector(".navbar");

      menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      };

      let data = [];

      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const number = document.querySelector("#number");
      const subject = document.querySelector("#subject");
      const message = document.querySelector("textarea");
      const form = document.querySelector("form");

      // Load existing data from localStorage
      function loadData() {
        const savedData = localStorage.getItem("contactData");
        if (savedData) {
          data = JSON.parse(savedData);
        }
      }

      // Save data to localStorage
      function saveData() {
        localStorage.setItem("contactData", JSON.stringify(data));
      }

      // Handle form submission
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        // if (!name.value || !email.value || !number.value || !subject.value || !message.value) {
        //   alert("Please fill in all fields");
        //   return;
        // }

        const contactInfo = {
          id: Date.now(),
          name: name.value,
          email: email.value,
          phone: number.value,
          subject: subject.value,
          message: message.value,
          timestamp: new Date().toLocaleString()
        };

        data.push(contactInfo);
        saveData();

        console.log("Contact data stored:", contactInfo);
        console.log("All contacts:", data);

        alert("Thank you! Your message has been saved.");
        form.reset();
      });

      // Load data when page loads
      loadData();