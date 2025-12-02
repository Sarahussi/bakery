document.addEventListener("DOMContentLoaded", function () {


    let table = document.querySelector("table");

    function loadRequests() {
        let requests = JSON.parse(localStorage.getItem("registerRequests")) || [];

    
        table.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Account Type</th>
                <th>Action</th>
            </tr>
        `;

        requests.forEach((req, index) => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${req.firstName} ${req.lastName}</td>
                <td>${req.email}</td>
                <td>${req.role.replace("_Option", "")}</td>
                <td>
                    <button class="btn approve-btn" data-index="${index}">Approve</button>
                    <button class="btn reject-btn" data-index="${index}">Reject</button>
                </td>
            `;

            table.appendChild(row);
        });
    }

    loadRequests();



    document.addEventListener("click", function(e) {
        let requests = JSON.parse(localStorage.getItem("registerRequests")) || [];

        if (e.target.classList.contains("approve-btn")) {
            let index = e.target.getAttribute("data-index");

            let acceptedUser = requests[index];

            
            let users = JSON.parse(localStorage.getItem("approvedUsers")) || [];
            users.push(acceptedUser);
            localStorage.setItem("approvedUsers", JSON.stringify(users));

           
            requests.splice(index, 1);
            localStorage.setItem("registerRequests", JSON.stringify(requests));

            alert("User Approved Successfully!");
            loadRequests();
        }

        if (e.target.classList.contains("reject-btn")) {
            let index = e.target.getAttribute("data-index");

            requests.splice(index, 1);
            localStorage.setItem("registerRequests", JSON.stringify(requests));

            alert("User Rejected!");
            loadRequests();
        }
    });

});


