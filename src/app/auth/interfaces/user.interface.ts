export interface User {
    _id?: number;
    documentType:string;
    documentNumber: number;
    name: string;
    lastname: string;
    password: string;
    createdAt?: Date;
    cbu?: string;
    currency?: number;
}