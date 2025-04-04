import { z } from "zod"
import { categories } from "./categories"

export const campingSchema = z.object({
    title : z.string().min(2,"Title must be more than 2 character"),
    price : z.coerce.number(),
    description : z.string().max(50,"Description must be less than 50 character"),
    category : z.string()
})
