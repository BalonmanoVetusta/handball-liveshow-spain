import type NodeCG from "@nodecg/types";
import { MatchAction } from "types/schemas/match-action";
import { MatchActions } from "types/schemas/match-actions";

export declare interface PlayerInfoPayload {
  id?: number;
  name?: string;
  position?: AttackPosition;
  number: number;
  avatarUrl?: string;
  team: Team;
  teamId?: number | string;
  teamName?: string;
}

export declare interface PlayerInfoSuspensionPayload extends PlayerInfoPayload {
  length: number;
}

export declare interface MatchSuspensionActionType {
  action: MatchActionType.SUSPENSION;
  team: Team;
  matchTime?: number;
  payload: PlayerInfoPayload;
}

export enum MatchActionType {
  GOAL = "GOAL",
  TIMEOUT = "TIMEOUT",
  WARNING = "WARNING",
  SUSPENSION = "SUSPENSION",
  DISQUALIFICATION = "DISQUALIFICATION",
  MATCH_START = "MATCH_START",
  MATCH_END = "MATCH_END",
  START_SEVEN_PLAYERS = "START_SEVEN_PLAYERS",
  END_SEVEN_PLAYERS = "END_SEVEN_PLAYERS",
  OTHER = "OTHER",
  UNKNOWN = "UNKNOWN",
}

export enum Team {
  LOCAL = "LOCAL",
  VISITOR = "VISITOR",
}

export enum AttackPosition {
  GOALKEEPER = "GOALKEEPER", // Because can score goals
  LW = "LEFT_WING",
  LHB = "LEFT_HALF_BACK",
  PM = "PLAYMAKER",
  RHB = "RIGHT_HALF_BACK",
  RW = "RIGHT_WING",
  PI = "PIVOT",
  SPI = "SECOND_PIVOT",
  LP = "LEFT_PIVOT",
  RP = "RIGHT_PIVOT",
}

export interface GoalActionType {
  player?: number;
  distance?: 6 | 9 | 7;
  assist?: number;
  quantity: number;
  position?: AttackPosition;
}

export enum WarningType {
  YELLOW_CARD = "YELLOW_CARD",
  RED_CARD = "RED_CARD",
  BLUE_CARD = "BLUE_CARD",
  OTHER_COLOR_CARD = "OTHER_COLOR_CARD",
  TIME_SUSPENSION = "TIME_SUSPENSION",
}

export interface WarningActionType {
  player: number | "COACH" | "SECOND_COACH" | "OFFICIAL" | "OTHER" | "UNKNOWN";
  type: WarningType;
}

export type MatchActionsReplicantOptions = NodeCG.Replicant.Options<MatchActions> & {
  namespace?: string;
};

export type UseMatchActionsMatchActionType = Omit<MatchAction, "gmtTimestamp">;
export type UseMatchActionsAddActionType = Omit<MatchAction, "gmtTimestamp" | "id" | "matchTime">;

export interface UseMatchActionsReturn extends MatchActions {
  goals: { local: MatchAction[]; visitor: MatchAction[] };
  setActions: (actions: MatchActions) => void;
  addAction: (matchTime: number, action: MatchAction) => void;
  removeActionById: (id: string) => void;
  removeActionsByTimestamp: (timestamp: number) => void;
  addGoal: (matchTime: number, goal: GoalActionType) => void;
  removeLastGoal: (team: Team) => void;
  addWarning: (matchTime: number, warning: WarningActionType) => void;
  reset: () => void;
}
