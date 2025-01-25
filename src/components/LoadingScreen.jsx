import { useProgress } from "@react-three/drei";

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();

  const handleButtonClick = () => {
    if (progress === 100) {
      onStarted(); // Call the onStarted function only when progress is 100%
    }
  };

  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Welcome to PlanMyDiet!!</h1>
        <p className="loadingScreen__description">
          Your journey to a healthier lifestyle starts here...
        </p>
        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={handleButtonClick}
        >
          Begin Journey!!
        </button>
      </div>
    </div>
  );
};