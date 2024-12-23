function FetchUser() {
    // Get the username entered by the user
    const username = document.getElementById("username").value;

    // Fetch user data based on the username
    fetch(`http://54.172.124.101:8080/api/user/getByName?name=${username}`)
        .then(response => response.json()).catch(error => alert("No users matched that name!!"))
        .then(json => {
            console.log(json);
            // Update the HTML with the fetched data
            document.getElementById("userUsername").innerText = json.username;
            document.getElementById("userEmail").innerText = json.email;
            document.getElementById("userPassword").innerText = json.password;

        })
        .catch(error => alert('Error fetching data:', error));
}
//test2