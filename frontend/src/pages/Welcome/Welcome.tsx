import { Button } from "@/components/ui/button";
import { useHaikuContext } from "@/context/haiku-context";

const Welcome = () => {
    const { setCurrentPage } = useHaikuContext();

    return (
        <div className="width-control">
            <p className="text-sage-green text-3xl font-semibold">
                Haiku Minigame
            </p>
            <p>
                Welcome to a space shaped by the calm and simplicity of Japanese
                poetry. Receive a random haiku with one line blank, write your
                own sentence or choose one of the suggestions, then let the AI
                reflect back on your creation.
            </p>
            <p>Enjoy the quiet, one verse at a time.</p>
            <Button onClick={() => setCurrentPage("minigame")}>Play</Button>
        </div>
    );
};

export default Welcome;
