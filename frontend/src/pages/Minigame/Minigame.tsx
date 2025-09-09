import Options from "./sections/Options";
import SudokuDisplay from "./sections/SudokuDisplay";
import Suggestions from "./sections/Suggestions";
import UserInput from "./sections/UserInput";

const Minigame = () => {
    return (
        <div className="width-control">
            <SudokuDisplay />
            <UserInput />
            <Suggestions />
            <Options />
        </div>
    );
};

export default Minigame;
