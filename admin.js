function login() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    document.getElementById('adminResult').innerHTML = '<div class="alert alert-success">✅ Logged in as Admin (Demo Mode)</div>';
}

function uploadAdmitCard() {
    document.getElementById('adminResult').innerHTML = `
        <div class="card" style="margin-top:20px;">
            <h4>Upload Admit Card PDF</h4>
            <select id="batchSelect"><option>RC-04/2025</option><option>RC-03/2025</option></select>
            <input type="file" accept=".pdf" id="pdfFile">
            <button class="btn btn-primary" onclick="savePDF()">Upload</button>
        </div>`;
}

function savePDF() {
    alert('✅ Admit Card PDF Uploaded! (Demo - Firebase Storage will store in production)');
}

function viewTrainees() {
    document.getElementById('adminResult').innerHTML = `
        <div class="alert alert-success">📋 Trainees List (Demo):<br>
        - RC-24001 | Ali Raza | Batch RC-04/2025<br>
        - RC-24002 | Bilal Ahmed | Batch RC-04/2025<br>
        - LSC-23001 | Sana Khan | Batch LSC-03/2025<br>
        Total: 45 Trainees Registered
        </div>`;
}

function announcement() {
    let msg = prompt("Enter announcement message:");
    if(msg) alert("✅ Announcement posted: " + msg);
}