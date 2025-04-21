import express, { Router, Request, Response } from 'express';
import { ImageData } from '../schema';
import { analyze_image } from './utils';
import { Image } from 'image-js';


const router: Router = express.Router();


router.post('/', async (req: Request, res: Response) => {
  try {
    const data = req.body as ImageData;
    
    // Validate request body
    if (!data.image || !data.image.startsWith('data:image')) {
      return res.status(400).json({
        message: "Invalid image format",
        status: "error"
      });
    }

    // Decode base64 image
    const base64Data = data.image.split(',')[1];
    const imageBuffer = Buffer.from(base64Data, 'base64');
    
    // Load image with error handling
    let image: Image;
    try {
      image = await Image.load(imageBuffer);
    } catch (error) {
      return res.status(400).json({
        message: "Invalid image data",
        error: "Failed to load image from buffer",
        status: "error"
      });
    }

    // Process image with OpenRouter integration
    const responses = await analyze_image(image, data.dict_of_vars || {});
    
    console.log('Processed response:', responses);
    
    res.json({
      message: "Image processed successfully",
      data: responses,
      status: "success"
    });
    
  } catch (error) {
    console.error('Route error:', error);
    res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
      status: "error"
    });
  }
});

export default router;