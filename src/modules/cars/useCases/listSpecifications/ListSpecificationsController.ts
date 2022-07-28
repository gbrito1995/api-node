import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationUseCase: ListSpecificationsUseCase) { }

  handle(req, res): Response {
    const allSpecifications = this.listSpecificationUseCase.execute();

    return res.json(allSpecifications);
  }
}

export { ListSpecificationsController };
