export interface ComparedMonth {
    type:              string;//outcome or income, TODO: Enum
    actualMonthAmount: number;
    lastMonthAmount:   number;
    percentage:        number;
    actualPossitive:   boolean;
}


export interface comparedMonthCurrency {
    outcomeActual: number;
    outcomeLast: number;
    incomeActual: number;
    incomeLast: number;
}