import { TaskDefinition } from './taskDefinition.model';

export class Task {
    public id: Number;
    public name: String;
    public type: String;
    public createdBy: String;
    public lastUpdate: Date;
    public status: String;
    public definition: TaskDefinition;
}
