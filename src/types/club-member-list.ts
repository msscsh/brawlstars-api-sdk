import { ClubMember } from "./club-member";

export declare type ClubMemberList = {
  items: ClubMember[];
  paging: {
    cursors: {
      after: string;
    };
  };
};