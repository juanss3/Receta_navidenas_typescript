import { Router } from "express"
import { getAllRecipes, getRecipeById, addRecipe } from "../controllers/recipeControllers";

const router = Router();

router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);  
router.post("/", addRecipe);  

export default router;