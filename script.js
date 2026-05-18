// SAAB RTC Hyderabad - Main Script

let selectedBatch = 'RC-04/2025';

// Batch selection
document.querySelectorAll('.batch-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.batch-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedBatch = this.dataset.batch;
    });
});

// Search Admit Card
document.getElementById('searchAdmitBtn')?.addEventListener('click', async function() {
    const rollNo = document.getElementById('rollNumber').value.trim();
    if (!rollNo) {
        showResult('Please enter Roll Number', 'error');
        return;
    }
    
    showResult(`🔍 Searching admit card for ${rollNo} (${selectedBatch})...<br> 
    ⚠️ Demo Mode: In production, PDF will be fetched from database. 
    <br><br><button class="btn btn-primary" onclick="window.print()">🖨️ Print Admit Card</button>`, 'success');
});

// Search Marks
document.getElementById('searchMarksBtn')?.addEventListener('click', async function() {
    const rollNo = document.getElementById('rollNumber').value.trim();
    if (!rollNo) {
        showResult('Please enter Roll Number', 'error');
        return;
    }
    
    showResult(`📊 Marks Certificate for ${rollNo} (${selectedBatch})<br>
    <strong>Total Marks:</strong> 100 | <strong>Obtained:</strong> 78 | <strong>Percentage:</strong> 78%<br>
    <strong>Status:</strong> ✅ PASSED<br><br>
    <button class="btn btn-primary" onclick="window.print()">🖨️ Download Certificate</button>`, 'success');
});

function showResult(message, type) {
    const div = document.getElementById('resultDisplay');
    div.innerHTML = `<div class="alert alert-${type === 'error' ? 'error' : 'success'}">${message}</div>`;
}