export {
  StopwatchProvider,
  useStopwatchContext,
} from "./context/use-stop-watch-context";
export {
  default as getTimeFromMiliseconds,
  MaxTimeUnit,
} from "./lib/get-time-from-miliseconds";
export type { TimeUnit } from "./lib/get-time-from-miliseconds";
export { default as useStopwatch } from "./use-stopwatch";
export type {
  OnTickFunctionType as onTickType,
  TimeOffset,
  UseStopwatchProps as useStopwatchProps,
  UseStopwatchReturn as useStopwatchReturn,
} from "./use-stopwatch";
export { useStopwatchReplicant } from "./use-stopwatch-replicant";
