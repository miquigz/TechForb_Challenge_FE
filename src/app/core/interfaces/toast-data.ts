import { BehaviorSubject } from "rxjs";

export interface ToastData {
    show:boolean;
    message: string;
    background: string;
    duration: number;
}