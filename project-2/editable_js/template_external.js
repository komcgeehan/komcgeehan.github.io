
/**
 * EXTERNAL LIBRARY VIEW
 * Pick an external library and pipe your data to it.
 */
function showExternal(data) {

    const resultCounts = {};
    data.forEach(function(r) {
        const result = r.inspection_results || 'Unknown';
        if (result !== '------') {
            resultCounts[result] = (resultCounts[result] || 0) + 1;
        }
    });

    const labels = Object.keys(resultCounts);
    const counts = Object.values(resultCounts);

    // Store data on window so we can access it after render
    window._chartLabels = labels;
    window._chartCounts = counts;

    setTimeout(function() {
        const canvas = document.getElementById('results-chart');
        if (canvas && typeof Chart !== 'undefined') {
            new Chart(canvas.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: window._chartLabels,
                    datasets: [{
                        label: 'Number of Inspections',
                        data: window._chartCounts,
                        backgroundColor: 'rgba(0, 124, 186, 0.7)',
                        borderWidth: 1
                    }]
                },
                options: { responsive: true, scales: { y: { beginAtZero: true } } }
            });
        }
    }, 100);

  return `
        <h2 class="view-title">📊 External Library View</h2>
        <p class="view-description">Inspection results distribution using Chart.js</p>
        <canvas id="results-chart" height="120"></canvas>
    `;
}

export default showExternal;