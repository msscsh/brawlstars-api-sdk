import { Event } from "./event";

export declare type ScheduledEvent = {
    startTime: string;
    endTime: string;
    slotId: number;
    event: Event;
};

export declare type ScheduledEventList = ScheduledEvent[];