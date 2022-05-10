import Drug from '../../domain-layer/entities/Drug';
import DatabaseConnection from '../../persistence-layer/DatabaseConnection';
import IAsyncTask from './IAsyncTask';

export type AddDrugData = {
  name: string,
  laboratory: string,
  description: string,
  image: string,
};

export default class AddDrugTask implements IAsyncTask<Drug> {
  private addDrugData: AddDrugData;

  public constructor(addDrugData: AddDrugData) {
    this.addDrugData = addDrugData
  }

  public async execute(): Promise<Drug> {
    const databaseConnection = await DatabaseConnection.getInstance();
    const drugRepository = databaseConnection.getRepository(Drug);

    const drug = drugRepository.save(this.addDrugData);
    return drug;
  }
}
