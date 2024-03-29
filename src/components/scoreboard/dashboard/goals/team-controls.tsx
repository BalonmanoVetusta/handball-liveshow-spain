import { useMatchActions } from "hooks/use-match-actions";
import { MatchActionType, Team } from "hooks/use-match-actions/types";
import { ReactElement } from "react";

export function GoalsTeamControls({ team, teamLabel }: { team: Team; teamLabel?: string }): ReactElement {
  const { addGoal, removeLastGoal, getTeamActions } = useMatchActions();

  const handleAddGoal = () => (event) => {
    event.preventDefault();
    addGoal(team);
  };

  const handleSubstractGoal = () => (event) => {
    event.preventDefault();
    removeLastGoal(team);
  };

  const score = getTeamActions(team, MatchActionType.GOAL).length.toString().padStart(2, "0") || "00";

  if (!teamLabel) {
    teamLabel = team === Team.LOCAL ? "Local" : "Visitor";
  }

  return (
    <fieldset>
      <h3>{teamLabel}</h3>
      <h3>{score}</h3>
      <button onClick={handleAddGoal()}>{teamLabel} +1</button>
      <button onClick={handleSubstractGoal()}>{teamLabel} -1</button>
    </fieldset>
  );
}
