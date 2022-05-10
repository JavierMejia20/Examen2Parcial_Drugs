import Drug from '../../domain-layer/entities/Drug';
import DatabaseConnection from '../../persistence-layer/DatabaseConnection';
import IAsyncTask from './IAsyncTask';

export default class FindDrugTask implements IAsyncTask<Drug> {
  private drugId: number;

  public constructor(drugId: number) {
    this.drugId = drugId;
  }

  public async execute(): Promise<Drug> {
    const databaseConnection = await DatabaseConnection.getInstance();
    const drugRepository = databaseConnection.getRepository(Drug);

    const drug = await drugRepository.findOneBy({ id: this.drugId });

    if (!drug) {
      throw new Error('Drug not found.');
    }

    return drug;
  }
}
