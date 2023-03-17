import { useMatchActions } from "hooks/use-match-actions";
import { MatchActionType, Team } from "hooks/use-match-actions/types";
import { ReactElement } from "react";

export function ScoreboardPanel(): ReactElement {
  const { addGoal, removeLastGoal, goals, setActions, actions } =
    useMatchActions();

  const local = goals.local.length.toString().padStart(2, "0");
  const visitor = goals.visitor.length.toString().padStart(2, "0");

  return (
    <div>
      <fieldset>
        <h3>Local Team Score</h3>
        <h4>{local}</h4>
        <button
          onClick={() => {
            addGoal(Team.LOCAL);
          }}
        >
          +1
        </button>
        <button onClick={() => removeLastGoal(Team.LOCAL)}>-1</button>
      </fieldset>
      <fieldset>
        <h3>Visitor Team Score</h3>
        <h4>{visitor}</h4>
        <button
          onClick={() => {
            addGoal(Team.VISITOR);
          }}
        >
          +1
        </button>
        <button onClick={() => removeLastGoal(Team.VISITOR)}>-1</button>
      </fieldset>
      <button
        onClick={(event) => {
          event.preventDefault();
          const filteredActions = actions.filter(
            ({ action }) => action !== MatchActionType.GOAL
          );
          setActions(filteredActions);
        }}
      >
        Reset All Goals (only actions that are goals)
      </button>
    </div>
  );
}
