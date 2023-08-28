import { Router } from "express"
import { usersRoutes } from "./users.routes"
import { passwordRoutes } from "./password.routes"
import { authenticateRoutes } from "./authenticate.routes"

const router = Router()

router.use("/users", usersRoutes)
router.use("/password", passwordRoutes)
router.use(authenticateRoutes)

export { router }