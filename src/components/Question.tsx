interface QuestionProps {
  questionNumber: number;
  questionText: string;
  options: string[];
  selectedAnswer?: number;
  onAnswer: (answerIndex: number) => void;
}

export default function Question({
  questionNumber,
  questionText,
  options,
  selectedAnswer,
  onAnswer,
}: QuestionProps) {
  return (
    <div
      style={{
        width: "897px",
        height: "354px",
        position: "relative",
      }}
    >
      {/*QUESTION BOX */}
      <div
        style={{
          display: "flex",
          width: "896px",
          height: "78px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "10px",
          border: "1px solid #96E5FF",
          background:
            "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      >
        <div
          style={{
            color: "#15313D",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "-0.312px",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 600,
              fontSize: "22px",
              color: "rgba(21,49,61,1)",
            }}
          >
            {questionNumber}. {questionText}
          </span>
        </div>
      </div>

      {/* OPTIONS */}
      <div
        style={{
          display: "flex",
          width: "897px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "14px",
          position: "absolute",
          left: "0px",
          top: "92px",
        }}
      >
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            style={{
              display: "flex",
              width: "896px",
              height: "78px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "10px",
              border:
                selectedAnswer === index
                  ? "2px solid #96E5FF"
                  : "1px solid rgba(150, 229, 255, 0.50)",
              background:
                selectedAnswer === index
                  ? "linear-gradient(90deg, rgba(198, 233, 247, 0.30) 0.09%, rgba(229, 248, 255, 0.30) 99.91%)"
                  : "linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (selectedAnswer !== index) {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, rgba(198, 233, 247, 0.20) 0.09%, rgba(229, 248, 255, 0.20) 99.91%)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedAnswer !== index) {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)";
              }
            }}
          >
            <div
              style={{
                color: "#15313D",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.312px",
              }}
            >
              {option}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
