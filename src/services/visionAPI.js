// src/services/visionAPI.js
import axios from 'axios';

const VISION_API_URL = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCFWVSs1DCzl5_kw4T6hE2saAtZLRU-f0A';

const analyzeImage = async (image) => {
    try {
      // Make API request to Google Cloud Vision API
      const response = await axios.post(VISION_API_URL, {
        requests: [
          {
            image: {
              content: image,
            },
            features: [
              {
                type: 'PRODUCT_SEARCH',
                maxResults: 5,
              },
            ],
          },
        ],
      });
  
      // Check if response contains valid data
      if (response && response.data && response.data.responses && response.data.responses.length > 0) {
        return response.data.responses[0];
      } else {
        throw new Error('Invalid response from API');
      }
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw new Error('Failed to analyze image');
    }
  };
  

export default analyzeImage;


