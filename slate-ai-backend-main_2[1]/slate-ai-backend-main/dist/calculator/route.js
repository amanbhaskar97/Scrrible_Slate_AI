"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const image_js_1 = require("image-js");
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    try {
        const data = req.body;
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
        let image;
        try {
            image = await image_js_1.Image.load(imageBuffer);
        }
        catch (error) {
            return res.status(400).json({
                message: "Invalid image data",
                error: "Failed to load image from buffer",
                status: "error"
            });
        }
        // Process image with OpenRouter integration
        const responses = await (0, utils_1.analyze_image)(image, data.dict_of_vars || {});
        console.log('Processed response:', responses);
        res.json({
            message: "Image processed successfully",
            data: responses,
            status: "success"
        });
    }
    catch (error) {
        console.error('Route error:', error);
        res.status(500).json({
            message: "Internal server error",
            error: error instanceof Error ? error.message : "Unknown error",
            status: "error"
        });
    }
});
exports.default = router;
