import React, { useState } from "react";

const Quiz = () => {
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
            marginBottom: "30px",
            textAlign: "center",
        },
        scoreContainer: {
            textAlign: "center",
        },
        explanation: {
            marginTop: "15px",
            backgroundColor: "#00274d",
            padding: "15px",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "1rem",
            textAlign: "left",
        },
        button: {
            padding: "12px 25px",
            border: "2px solid #ffbf00",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#ffbf00",
            color: "#001f54",
            fontSize: "1.1rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
            marginTop: "15px",
        },
    };

    const question = [
        {
            question: "Hukum Newton I menyatakan bahwa ...",
            options: [
                "A. Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja",
                "B. Gaya berbanding lurus dengan percepatan",
                "C. Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
                "D. Momentum benda selalu konstan",
            ],
            answer: 0,
            explanation:
                "Hukum Newton I atau hukum kelembaman menyatakan bahwa sebuah benda akan tetap diam atau bergerak lurus beraturan kecuali ada gaya total yang bekerja pada benda tersebut.",
        },
        {
            question: "Percepatan gravitasi di permukaan bumi adalah ...",
            options: ["A. 9,8 m/s²", "B. 10 m/s²", "C. 8,9 m/s²", "D. 9 m/s²"],
            answer: 0,
            explanation:
                "Percepatan gravitasi di permukaan bumi adalah 9,8 m/s². Nilai ini sering dibulatkan menjadi 10 m/s² untuk mempermudah perhitungan dalam konteks tertentu.",
        },
        {
            question: "Energi kinetik suatu benda dihitung dengan rumus ...",
            options: ["A. 1/2 m v²", "B. m g h", "C. 1/2 k x²", "D. m a s"],
            answer: 0,
            explanation:
                "Energi kinetik dihitung dengan rumus 1/2 m v², di mana m adalah massa benda dan v adalah kecepatan benda.",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState(Array(question.length).fill(null)); // Menyimpan jawaban

    const handleAnswerOptionClick = (index) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = index;
        setAnswers(updatedAnswers);

        if (index === question[currentQuestion].answer) {
            setScore((prevScore) =>
                updatedAnswers[currentQuestion] === question[currentQuestion].answer
                    ? prevScore
                    : prevScore + 1
            );
        } else if (answers[currentQuestion] === question[currentQuestion].answer) {
            setScore((prevScore) => prevScore - 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < question.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleBackQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Quiz Fisika Kelas 11</h1>
            {showScore ? (
                <div style={styles.scoreContainer}>
                    <h2>Skor Anda: {score} / {question.length}</h2>
                    <button style={styles.button} onClick={() => window.location.reload()}>
                        Mulai Lagi?
                    </button>
                    <div>
                        <h3 style={{ marginTop: "20px" }}>Pembahasan Soal:</h3>
                        {question.map((q, index) => (
                            <div key={index} style={styles.explanation}>
                                <strong>Soal {index + 1}:</strong>
                                <p>{q.question}</p>
                                <strong>Jawaban:</strong>
                                <p>{q.options[q.answer]}</p>
                                <strong>Pembahasan:</strong>
                                <p>{q.explanation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h2>{question[currentQuestion].question}</h2>
                    <ul>
                        {question[currentQuestion].options.map((option, index) => (
                            <li
                                key={index}
                                style={{
                                    padding: "10px",
                                    margin: "5px 0",
                                    cursor: "pointer",
                                    backgroundColor:
                                        answers[currentQuestion] === index ? "#ffbf00" : "#001f54",
                                    color: "#ffffff",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    border: "1px solid #ffbf00",
                                }}
                                onClick={() => handleAnswerOptionClick(index)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button
                            style={styles.button}
                            onClick={handleBackQuestion}
                            disabled={currentQuestion === 0}
                        >
                            Back
                        </button>
                        <button style={styles.button} onClick={handleNextQuestion}>
                            {currentQuestion === question.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
