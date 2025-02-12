// Fetch data from the LeetCode Stats API
fetch('https://leetcode-stats-api.herokuapp.com/R2024')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        // Populate the HTML elements with data from the API
        document.getElementById('leetcode-username').innerText = 'R2024'; // You can hardcode your username or fetch it from API if available
        document.getElementById('leetcode-problems-solved').innerText = data.totalSolved || '0';
        document.getElementById('leetcode-easy-solved').innerText = data.easySolved || '0';
        document.getElementById('leetcode-medium-solved').innerText = data.mediumSolved || '0';
        document.getElementById('leetcode-hard-solved').innerText = data.hardSolved || '0';
        document.getElementById('leetcode-ranking').innerText = data.ranking || 'N/A';
        document.getElementById('leetcode-contribution-points').innerText = data.contributionPoints || '0';
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Optionally, you can display an error message in the UI
        document.querySelector('.leetcode-details').innerHTML = '<p>Error fetching data. Please try again later.</p>';
    });
