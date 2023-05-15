import { ClubMember } from "./club-member";

export declare type Club = {
    tag: string;
    name: string;
    description: string;
    type: string;
    badgeId: number;
    requiredTrophies: number;
    trophies: number;
    members: ClubMember[];
};  