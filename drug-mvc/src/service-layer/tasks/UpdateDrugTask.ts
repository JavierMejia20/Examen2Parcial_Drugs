import Drug from "../../domain-layer/entities/Drug";
import DatabaseConnection from "../../persistence-layer/DatabaseConnection";
import FindDrugTask from "./FindDrugTask";
import IAsyncTask from "./IAsyncTask";

export type UpdateDrugData = {
  id: number,
  name: string,
  laboratory: string,
  description: string,
  image: string,
};

export default class UpdateDrugTask implements IAsyncTask<Drug> {
  private updateDrugData: UpdateDrugData;

  public constructor(drugData: UpdateDrugData) {
    this.updateDrugData = drugData;
  }

  public async execute(): Promise<Drug> {
    const findDrugTask = new FindDrugTask(this.updateDrugData.id);

    const drug = await findDrugTask.execute();

    drug.name = this.updateDrugData.name;
    drug.laboratory = this.updateDrugData.laboratory
    drug.description = this.updateDrugData.description
    drug.image = this.updateDrugData.image

    const databaseConnection = await DatabaseConnection.getInstance();
    const drugRepository = databaseConnection.getRepository(Drug);

    drugRepository.save(drug);

    return drug;
  }
}