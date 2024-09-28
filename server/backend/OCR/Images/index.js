const Tesseract = require('tesseract.js');

// Function to perform OCR on an image
const performOCR = async (imagePath) => {
    const { data: { text } } = await Tesseract.recognize(
        imagePath,
        'eng',
        {
            logger: m => console.log(m) // Log progress messages
        }
    );
    console.log(text);
};

// Example usage: Replace 'your-image.jpg' with the path to your image
performOCR('/Users/khyativyas/AIwork/WhatsApp Image 2024-09-28 at 8.37.44 AM.jpg');

