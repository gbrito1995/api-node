import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification/index";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications/index";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
  return listSpecificationsController.handle(req, res);
});

export { specificationRoutes };
