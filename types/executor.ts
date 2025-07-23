import { Browser } from "puppeteer";

export type Environment = {
    browser?: Browser;
    phases: Record<string, {inputs: Record<string,any>; outputs: Record<string,any>;}>; 
}