let votes = {
    1: 0,
    2: 0,
    3: 0
};

document.getElementById('startVoting').addEventListener('click', () => {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('votingSection').style.display = 'block';
});

const ctx = document.getElementById('voteChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Abhishek singh', 'Ashish gupta', 'Sachin singh'],
        datasets: [{
            label: 'Votes',
            data: [0, 0, 0],
            backgroundColor: ['#ff7675', '#74b9ff', '#55efc4'],
            borderWidth: 1,
            hoverBackgroundColor: ['#d63031', '#0984e3', '#00b894']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Number of Votes' }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutBounce'
        }
    }
});

function vote(candidateId) {
    votes[candidateId]++;
    document.getElementById(`votes${candidateId}`).innerText = votes[candidateId];
    updateChart();
}

function updateChart() {
    chart.data.datasets[0].data = [votes[1], votes[2], votes[3]];
    chart.update();
}