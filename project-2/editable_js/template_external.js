
/**
 * EXTERNAL LIBRARY VIEW
 * Pick an external library and pipe your data to it.
 */
function showExternal(data) {

    // Count inspections by result type
    const resultCounts = {};
    data.forEach(function(r) {
        const result = r.inspection_results || 'Unknown';
        resultCounts[result] = (resultCounts[result] || 0) + 1;
    });

    const labels = Object.keys(resultCounts);
    const counts = Object.values(resultCounts);

  return `
        <h2 class="view-title">📊 External Library View</h2>
        <p class="view-description">Inspection results distribution using Chart.js</p>
        <canvas id="results-chart" height="120"></canvas>
        <script>
            const ctx = document.getElementById('results-chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ${JSON.stringify(labels)},
                    datasets: [{
                        label: 'Number of Inspections',
                        data: ${JSON.stringify(counts)},
                        backgroundColor: 'rgba(0, 124, 186, 0.7)',
                        borderColor: 'rgba(0, 124, 186, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        <\/script>
    `;
}

export default showExternal;