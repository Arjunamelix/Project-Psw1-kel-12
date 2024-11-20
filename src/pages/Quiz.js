import React, {useState} from "react";

const Quiz = () => {
    const question = [
        {
            question: "Hukum Newton I menyatakan bahwa ...",
            options: [
                "A.Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja",
                "B.Gaya berbanding lurus dengan percepatan",
                "C.Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
                "D.Momentum benda selalu konstan",
            ],
            answer: 0,
        },
        {
            question: "Percepatan gravitasi di permukaan bumi adalah ...",
            options: ["A. 9,8 m/s²", "B. 10 m/s²", "C. 8,9 m/s²", "D. 9 m/s²"],
            answer: 0,
        },
        {
            question: "Energi kinetik suatu benda dihitung dengan rumus ...",
            options: ["A. 1/2 m v²", "B.m g h", "C. 1/2 k x²", "D. m a s"],
            answer: 0,

        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswerOptionClick = (index) => {
        setSelectedAnswer(index);
        const isAnswerCorrect = index === question[currentQuestion].answer;
        setIsCorrect(isAnswerCorrect);

        if (isAnswerCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < question.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
            }
        }, 1000);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Quiz Fisika Kelas 11</h1>
            {showScore ? (
                <div style={styles.scoreContainer}>
                    <h2 style={styles.text}>Skor Anda: {score} / {question.length}</h2>
                    <button style={styles.button} onClick={() => window.location.reload()}>
                        Mulai Lagi?
                    </button>
                </div>
            ) : (
                    <div>
                        <h2 style={styles.text}>{question[currentQuestion].question}</h2>
                        <ul style={styles.optionsList}>
                            {question[currentQuestion].options.map((option, index) => (
                                <li
                                key={index}
                                style={styles.optionItem}
                                onClick={() => handleAnswerOptionClick(index)}
                                >
                                    {option}
                                </li>
                            )
                        )}
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
        fontSize: "1.5rem",
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