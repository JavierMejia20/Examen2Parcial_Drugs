import Drug from '../../domain-layer/entities/Drug';
import DatabaseConnection from '../../persistence-layer/DatabaseConnection';
import IAsyncTask from './IAsyncTask';

export default class GetDrugListTask implements IAsyncTask<Drug[]> {
public async execute(): Promise<Drug[]> {
    const databaseConnection =  await DatabaseConnection.getInstance();
    const drugRepository = databaseConnection.getRepository(Drug);
    return drugRepository.find();
  }
}
