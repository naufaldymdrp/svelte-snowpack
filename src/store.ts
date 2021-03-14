import { writable } from "svelte/store";

export interface Form {
    name?: string;
    info?: string;
}

export const store = writable<Form[]>([]);