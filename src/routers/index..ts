
import {Router, Request, Response} from "express"
import * as modules from "./modules"


const router = Router();


router.use("/dolls", modules.dolls);
router.use("/vehicles", modules.vehicles);
router.use("/videoGames", modules.videoGames);
router.use("/teddies", modules.teddies);



router.get("/", (req: Request, res: Response)=>{
    res.send('You have reached the API!');
})

export default router;