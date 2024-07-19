document.getElementById('generateButton').addEventListener('click', generateQRCode);

function generateQRCode() {
    const textInput = document.getElementById('textInput').value;
    const qrCodeContainer = document.getElementById('qrcode');

    // Clear any existing QR code
    qrCodeContainer.innerHTML = '';

    // Generate the QR code
    new QRCode(qrCodeContainer, {
        text: textInput,
        width: 128,
        height: 128,
    });
}
