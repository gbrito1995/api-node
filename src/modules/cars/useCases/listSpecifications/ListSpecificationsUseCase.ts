import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute(): Specification[] {
    const specifications = this.specificationRepository.listAll();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
