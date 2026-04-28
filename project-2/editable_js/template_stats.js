/**
 * STATS VIEW
 * Show aggregate statistics and insights - good for understanding the big picture
 */
function showStats(data) {
    // Stat 1: Total inspections
    const total = data.length;

    // Stat 2: How many passed (compliant)
    const passing = data.filter(function(r) {
        const result = (r.inspection_results || '').toLowerCase();
        return result.includes('compliant') || result.includes('reopened') || result.includes('completed');
    }).length;

    // Stat 3: How many had critical violations
    const critical = data.filter(function(r) {
        const result = (r.inspection_results || '').toLowerCase();
        return result.includes('critical') || result.includes('non-compliant');
    }).length;

    // Stat 4: How many were closed
    const closed = data.filter(function(r) {
        return (r.inspection_results || '').toLowerCase().includes('closed');
    }).length;

    // Stat 5: Hand washing violations
    const handWashFail = data.filter(function(r) {
        return r.proper_hand_washing && r.proper_hand_washing !== 'In Compliance' && r.proper_hand_washing !== '------';
    }).length;

    // Stat 6: Most inspected city
    const cityCounts = {};
    data.forEach(function(r) {
        const city = r.city || 'Unknown';
        cityCounts[city] = (cityCounts[city] || 0) + 1;
    });
    const topCity = Object.entries(cityCounts).sort((a, b) => b[1] - a[1])[0];

  return `
        <h2 class="view-title">📊 Stats View</h2>
        <p class="view-description">Key insights from ${total} inspections across Prince George's County</p>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-label">Total Inspections</div>
                <div class="stat-number">${total}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Passed / Compliant</div>
                <div class="stat-number">${passing}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Critical Violations</div>
                <div class="stat-number">${critical}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Facilities Closed</div>
                <div class="stat-number">${closed}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Hand Washing Violations</div>
                <div class="stat-number">${handWashFail}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Most Inspected City</div>
                <div class="stat-number" style="font-size:1.5rem">${topCity[0]}</div>
            </div>
        </div>
    `;
}

export default showStats