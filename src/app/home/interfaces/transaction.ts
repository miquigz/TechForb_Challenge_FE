export interface Transaction {
    _id?: number;
    fromCBU: string;
    toCBU: string;
    toCBUFullname:string;
    fromCBUFullname:string;
    amount: number;
    createdAt: Date;
    createdHour?: string;
    state:TransactionState;
    reason?: string;
}

export enum TransactionState {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
}