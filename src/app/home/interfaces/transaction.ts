export interface Transaction {
    _id?: number;
    fromCBU: string;
    toCBU: string;
    amount: number;
    createdAt: Date;
    state:TransactionState;
    reason?: string;
}

export enum TransactionState {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
}