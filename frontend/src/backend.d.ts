import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Form {
    name: string;
    travelMonth: string;
    timestamp: bigint;
    numberOfAdults: bigint;
    phone: string;
    packageInterest: string;
}
export interface backendInterface {
    getForms(): Promise<Array<Form>>;
    submitForm(form: Form): Promise<void>;
}
