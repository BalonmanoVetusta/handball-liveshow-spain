import type NodeCG from "@nodecg/types";
import { Stopwatch } from "types/schemas/stopwatch";
import { handleStopwatchReplicant } from "./handle-stopwatch-replicant";
import { StopwatchActions } from "./types";

const STOPWATCH_REPLICANT_NAME = "stopwatch";

function getCurrentTimeResponse(stopwatchCurrentValue: Stopwatch): string {
  const { offset = 0, startTime = 0, limit = 0, backwards = false } = stopwatchCurrentValue || {};

  let totalTime = offset;
  if (startTime > 0) {
    totalTime = Date.now() - startTime;
    totalTime += offset;
  }

  if (backwards && totalTime < limit) {
    totalTime = limit - totalTime;
  } else if (backwards) {
    totalTime = 0;
  }

  const minutes = Math.floor(totalTime / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((totalTime % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export function handleApiRoutes(nodecg: NodeCG.ServerAPI) {
  const router = nodecg.Router();

  function handleGetTime() {
    const stopwatchCurrentValue = nodecg.readReplicant<Stopwatch>(STOPWATCH_REPLICANT_NAME, nodecg.bundleName);
    try {
      if (!stopwatchCurrentValue) throw new Error("stopwatchCurrentValue is undefined");

      return getCurrentTimeResponse(stopwatchCurrentValue);
    } catch (error) {
      // console.error(error);
    }

    return "00:00";
  }

  router.get("/get", (req, res) => {
    return res.json(handleGetTime());
  });

  router.get("/addOffset", (req, res) => {
    try {
      const { offset = "0" } = req.query || {};
      const offsetFormattedValue = parseInt(offset as string, 10) || 0;

      handleStopwatchReplicant(nodecg, {
        type: StopwatchActions.ADD_OFFSET,
        payload: offsetFormattedValue,
      });
    } catch (error) {
      // console.error(error);
    }

    return res.json(handleGetTime());
  });

  router.get("/start", (req, res) => {
    try {
      const stopwatchCurrentValue = nodecg.readReplicant<Stopwatch>(STOPWATCH_REPLICANT_NAME, nodecg.bundleName);

      if (!stopwatchCurrentValue) return res.status(204).send();

      if (stopwatchCurrentValue.startTime === 0) {
        handleStopwatchReplicant(nodecg, {
          type: StopwatchActions.START,
          payload: undefined,
        });
      }
    } catch (error) {
      // console.error(error);
    }

    return res.json(handleGetTime());
  });

  router.get("/stop", (req, res) => {
    try {
      const stopwatchCurrentValue = nodecg.readReplicant<Stopwatch>(STOPWATCH_REPLICANT_NAME, nodecg.bundleName);

      if (!stopwatchCurrentValue) return res.status(204).send();

      if (stopwatchCurrentValue.startTime > 0) {
        handleStopwatchReplicant(nodecg, {
          type: StopwatchActions.STOP,
          payload: undefined,
        });
      }
    } catch (error) {
      // console.error(error);
    }

    return res.json(handleGetTime());
  });

  router.get("/reset", (req, res) => {
    try {
      handleStopwatchReplicant(nodecg, {
        type: StopwatchActions.RESET,
        payload: undefined,
      });
    } catch (error) {
      // console.error(error);
    }

    return res.json("00:00");
  });

  router.get("/toggle", (req, res) => {
    const stopwatchCurrentValue = nodecg.readReplicant<Stopwatch>(STOPWATCH_REPLICANT_NAME, nodecg.bundleName);
    try {
      if (!stopwatchCurrentValue) throw new Error("stopwatchCurrentValue is undefined");

      let type = StopwatchActions.STOP;

      if (stopwatchCurrentValue.startTime === 0) {
        type = StopwatchActions.START;
      }

      handleStopwatchReplicant(nodecg, {
        type,
        payload: undefined,
      });
    } catch (error) {
      // console.error(error);
    }

    return res.json(handleGetTime());
  });

  nodecg.mount(`/${nodecg.bundleName}/stopwatch`, router);
}
