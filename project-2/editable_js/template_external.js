
/**
 * EXTERNAL LIBRARY VIEW
 * Pick an external library and pipe your data to it.
 */
function showExternal(data) {

    const resultCounts = {};
    data.forEach(function(r) {
        const result = r.inspection_results || 'Unknown';
        resultCounts[result] = (resultCounts[result] || 0) + 1;
    });

    const labels = JSON.stringify(Object.keys(resultCounts));
    const counts = JSON.stringify(Object.values(resultCounts));

  return `
        <h2 class="view-title">📊 External Library View</h2>
        <p class="view-description">Inspection results distribution using Chart.js</p>
        <canvas id="results-chart" height="120"></canvas>
        <img src onerror="
            const ctx = document.getElementById('results-chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ${labels},
                    datasets: [{
                        label: 'Number of Inspections',
                        data: ${counts},
                        backgroundColor: 'rgba(0, 124, 186, 0.7)',
                        borderWidth: 1
                    }]
                },
                options: { responsive: true, scales: { y: { beginAtZero: true } } }
            });
        ">
    `;
}

export default showExternal;