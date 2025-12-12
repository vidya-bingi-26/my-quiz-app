import { useState} from "react";
import Question from "../components/Question";
import GoodLuckBadge from "../components/GoodLuckBadge";
import GradientButton from "../components/GradientButton";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const navigate = useNavigate();

  const questions = [
    {
      questionText: "What sound does a cat make?",
      options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    },
    {
      questionText: "What would you probably find in your fridge?",
      options: ["Shoes", "Ice Cream", "Books"],
    },
    {
      questionText: "What color are bananas?",
      options: ["Blue", "Yellow", "Red"],
    },
    {
      questionText: "How many stars are in the sky?",
      options: ["Two", "Infinite", "Hundred"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [completed, setCompleted] = useState<boolean[]>(() =>
    questions.map(() => false)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== undefined) {
      setCompleted((prev) => {
        const copy = [...prev];
        copy[currentQuestion] = true;
        return copy;
      });
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((c) => c + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion((c) => c - 1);
  };

  const handleSubmit = () => {
    if (isSubmitting) return;

    if (answers[currentQuestion] !== undefined) {
      setCompleted((prev) => {
        const copy = [...prev];
        copy[currentQuestion] = true;
        return copy;
      });
    }

    setIsSubmitting(true);

    const t = setTimeout(() => {
      navigate("/result");
    }, 1000);

    return () => clearTimeout(t);
  };

 
  const getFillPercent = (i: number) => {
    if (completed[i]) return 100;
    if (i === currentQuestion) return 50;
    return 0;
  };

  return (
    <div
      className="
        w-[1920px] 
        h-[1080px] 
        relative 
        overflow-x-scroll overflow-y-scroll
        bg-[linear-gradient(107.96deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)]
        backdrop-blur-[200px]
      "
    >
      {/* Blurred container */}
      <div
        className="
          absolute
          w-[1625px]
          h-[920px]
          top-[80px]
          left-[148px]
          rounded-[50px]
          border-[white]
          border-[0.72px]
          p-[19.31px]
          shadow-[0px_43.63px_69.16px_0px_#000000A1]
          backdrop-blur-[13.94609260559082px]
          bg-[linear-gradient(112.86deg,rgba(255,255,255,0.4)_-6.68%,rgba(255,255,255,0.12)_45.63%,rgba(255,255,255,0.4)_103.45%)]
          flex items-center justify-center
        "
      >
        {/* White content box */}
        <div
          className="
            w-[1542px]
            h-[856px]
            rounded-[42px]
            bg-[#F4FDFF]
            flex flex-col items-center
            pt-[80px]
          "
        >
          {/* Title */}
          <h1
            className="
              text-[90px] font-[400px] italic
              font-[DM Serif Display]
              bg-gradient-to-r from-[#15313D] to-[#3CABDA]
              bg-clip-text text-transparent
              tracking-[-4px] leading-[90px]
              text-center
              w-full
            "
          >
            Test Your Knowledge
          </h1>

          {/* Subtitle */}
          <p className="text-[20px] font-[500] text-[#15313D] mt-[10px] font-[Manrope]">
            Answer all questions to see your results
          </p>

          {/* Progress bar */}
          <div className="w-full flex justify-center mt-[24px] mb-[8px]">
            <div className="flex gap-[12px]">
              {questions.map((_, i) => {
                const percent = getFillPercent(i);
                return (
                  <div
                    key={i}
                    className="w-[220px] h-[10px] bg-[#E8F7FB] rounded-[6px] overflow-hidden"
                  >
                    
                    <div
                      className="h-full bg-[#15313D] transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question Component */}
          <div className="mt-[16px]">
            <Question
              questionNumber={currentQuestion + 1}
              questionText={questions[currentQuestion].questionText}
              options={questions[currentQuestion].options}
              selectedAnswer={answers[currentQuestion]}
              onAnswer={handleAnswer}
            />
          </div>

          <GoodLuckBadge />

          {/* Navigation / Subimt Buttons */}
          <div className="absolute top-[700px] left-[1150px] gap-[10px]">
            {currentQuestion === questions.length - 1 ? (
              <GradientButton
                text="Submit"
                onClick={handleSubmit}
                isSubmitting={isSubmitting}
                disabled={isSubmitting}
              />
            ) : (
              <div className="flex gap-[10px]">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className={
                    "w-[53px] h-[50px] rounded-[10px] flex items-center justify-center " +
                    "bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)] border border-[#96E5FF0D] " +
                    "transition-all " +
                    (currentQuestion === 0
                      ? "opacity-30 pointer-events-none cursor-not-allowed"
                      : "opacity-100 cursor-pointer")
                  }
                  aria-disabled={currentQuestion === 0}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#15313D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className={
                    "w-[53px] h-[50px] rounded-[10px] flex items-center justify-center " +
                    "bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)] border border-[#96E5FF0D] transition-all " +
                    (currentQuestion === questions.length - 1
                      ? "opacity-30 pointer-events-none cursor-not-allowed"
                      : "opacity-100 cursor-pointer")
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#15313D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
