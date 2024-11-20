import React, {useState} from "react";

const Quiz = () => {
    const question = [
        {
            question: "Hukum Newton I menyatakan bahwa ...",
            options: [
                "Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja",
                "Gaya berbanding lurus dengan percepatan",
                "Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
                "Momentum benda selalu konstan",
            ],
            answer: 0,
        },
        {
            question: "Percepatan gravitasi di permukaan bumi adalah ...",
            options: ["9,8 m/s²", "10 m/s²", "8,9 m/s²", "9 m/s²"],
            answer: 0,
        },
        {
            question: "Energi kinetik suatu benda dihitung dengan rumus ...",
            options: ["1/2 m v²", "m g h", "1/2 k x²", "m a s"],
            answer: 0,

        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useSatet(null);

    const handleAnswerOptionClick = (index) => {
        if (index === question[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < question.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Quiz Fisika Kelas 11</h1>
            {showScore ? (
                <div style={styles.scoreContainer}>
                    <h2 style={styles.text}>Skor Anda: {score} / {BsQuestionSquare.length}</h2>
                    <button style={styles.button} onClick={() => window.location.reload()}>
                        Mulai Lagi
                    </button>
                </div>
            ) : (
                <div>
                    <h2 style={styles.text}>{questions[currentQuestion].question}</h2>
                    <ul style={styles.optionsList}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li key={index} style={styles.optionItem}>
                                <button
                                  onClick={() => handleAnswerOptionClick(index)}
                                  style={{
                                    ...styles.button,
                                    backgroundColor: selectedAnswer === index ? "#001f54" : "#ffbf00",
                                  }}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#001f54",
        color: "#ffbf00",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "15px",
    },
    text: {
        fontSize: "2.5rem",
        marginBottom: "20px",
    },
    scoreContainer: {
        textAlign:"center",
    },
    optionsList: {
        listStyle: "none",
        padding: 0,
    },
    optionItem: {
        margin: "10px 0",
    },
    button: {
        padding: "10px 20px",
        border: "2px solid #ffbf00",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "0.3s",
        backgroundColor: "#001f54",
        color: "ffbf00",

    },
};

export default Quiz;