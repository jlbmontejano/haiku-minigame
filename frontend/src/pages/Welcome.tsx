import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/app-context";

const Welcome = () => {
    const { handlePageChange } = useAppContext();

    return (
        <section className="width-control">
            <div className="text-sage-green text-5xl font-semibold">
                <p>Haiku</p>
                <p>Minigame</p>
            </div>
            <p>
                Welcome to a space shaped by the calm and simplicity of Japanese
                poetry. Receive a random haiku with one line blank, write your
                own sentence or choose one of the suggestions, then let AI
                reflect back on your creation.
            </p>
            <p>Enjoy the quiet, one verse at a time.</p>
            <Button
                onClick={() => handlePageChange("minigame")}
                className="w-full max-w-[200px] self-center"
            >
                Play
            </Button>
        </section>
    );
};

export default Welcome;
