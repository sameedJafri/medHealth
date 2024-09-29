const Tesseract = require('tesseract.js');

// Function to perform OCR on an image buffer
const performOCR = async (imageBuffer) => {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imageBuffer,
            'eng',
            {
                logger: m => console.log(m) // Log progress messages
            }
        );
        return text;
    } catch (error) {
        console.error('Error during OCR:', error);
        throw new Error('OCR failed');
    }
};

module.exports = performOCR;
