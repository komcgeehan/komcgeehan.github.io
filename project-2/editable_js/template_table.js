
/**
 * TABLE VIEW
 * Display data in sortable rows - good for scanning specific information
 */
function showTable(data) {
  // Requirements:
  // - Show data in a table format
  // - Include all important fields
  // - Make it easy to scan and compare
  // - Consider adding sorting functionality
  //   https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/

    /*
    const rows = data.map(function(restaurant) {
        const name = restaurant.name || '—';
        const city = restaurant.city || '—';
        const date = restaurant.inspection_date ? restaurant.inspection_date.slice(0, 10) : '—';
        const result = restaurant.inspection_results || '—';
        const address = restaurant.address_line_1 || '—';
        
        return `<tr>
            <td>${name}</td>
            <td>${city}</td>
            <td>${date}</td>
            <td>${result}</td>
            <td>${address}</td>
        </tr>`;
    }).join('');
        
    */ 
  /*html*/ 
    return `
        <h2 class="view-title">📋 Table View</h2>
        <p class="view-description">${data.length} inspection records</p>
        <div style="overflow-x: auto;">
            <table class="restaurant-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Date</th>
                        <th>Result</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

export default showTable;