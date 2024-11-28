import React, { useState, useEffect,  useMemo } from "react";
import Navbar from "../components/Header";
import {useNavigate} from "react-router-dom";

const Quiz = () =>  {
    const styles = {
        container: {
            padding: "20px",
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "#f4f7fc",
            color: "#333",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },

        title: {
            fontSize: "2.5rem",
            fontWeight:"600",
            color:"#003865",
            marginBottom: "30px",
            textAlign: "center",
        },

        question: {
            fontSize:"1.5rem",
            fontWeight:"500",
            color:"#003865",
            marginBottom:"20px",
        },

        options: {
            listStyleType:"none",
            padding: 0,
            marginBottom:"20px",
        },

        option: {
            padding:"12px 20px",
            margin:"10px 0",
            cursor:"pointer",
            borderRadius:"10px",
            border:"1px solid #003865",
            backgroundColor:"#e6f7ff",
            fontSize:"1rem",
            textAlign:"center",
            transition:"all 0.3s ease",
        },

        optionHover: {
            backgroundColor:"#005792",
            color:"#fff",
        },

        buttonContainer: {
            display:"flex",
            justifyContent:"space-between",
            width:"100%",
            maxWidth: "500px",
        },

        button: {
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight:"600",
            transition: "all 0.3s ease",
        },

        nextButton: {
            backgroundColor:"#005792",
            color:"#fff",
        },

        backButton: {
            backgroundColor: "#cccccc",
            color:"#333",
        },

        scoreContainer: {
            textAlign: "center",
            color:"#003865",
        },

        explanation: {
            marginTop: "15px",
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "10px",
            color: "#333",
            fontSize: "1rem",
            textAlign:"left",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
    };

    const questionData = [
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
        {
            question: "Apa yang dimaksud dengan hukum Newton pertama?",
            options: ["A. Hukum Kelembaman", "B. Hukum Aksi dan Reaksi", "C. Hukum Grativasi", "D. Hukum Percepatan"],
            answer: 0,
            explanation:
                "Sebuah benda akan tetap diam atau bergerak lurus beraturan kecuali ada gaya eksternal yang bekerja padanya,atau sama dengan Hukum Kelembaman.",
        },
        {
            question: "Sebuah mobil mula-mula diam dan kemudian bergerak dengan percepatan konstan sebesar 2 m/s². Berapa jarak yang ditempuh mobil setelah 5 detik?",
            options: ["A. 10 m", "B. 25 m", "C. 50 m", "D. 100 m"],
            answer: 0,
            explanation:
                 " jarak yang ditempuh mobil adalah 50 m.",     
       },

       [
        question:
       ]
        
    ];

    const question = useMemo(() => {
    const shuffleArray = (array) => array.sort(() => Math.random() -0.5);
    return shuffleArray(questionData)
    }, []);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState(Array(question.length).fill(null)); // Menyimpan jawaban

    const handleAnswerOptionClick = (index) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = index;
        setAnswers(updatedAnswers);

        if (index === question[currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
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

    const navigate = useNavigate();
    return (
        <div><Navbar />

    <button style={{
        position:"fixed",
        top:"150px",
        left:"20px",
        background:"linear-gradient(135deg, #007acc, #00bfff)",
        color:"white",
        border:"none",
        borderRadius:"50px",
        padding:"10px 20px",
        fontSize:"1rem",
        fontWeight:"bold",
        cursor:"pointer",
        boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)",
        transition:"all 0.3s ease-in-out",
        transform:"scale(1.05)",
        zIndex: 9999,
    }}
                onClick={() => navigate("/menuhome")}
            > Back
    </button>

        <div style={styles.container}>
            <h1 style={styles.title}>Quiz Fisika Kelas 11</h1>
            {showScore ? (
                <div style={styles.scoreContainer}>
                    <h2>Skor Anda: {score} / {question.length}</h2>
                    <button style={{ ...styles.button, ...styles.nextButton }} onClick={() => window.location.reload()}>
                        Mulai Lagi?
                    </button>
                    <div>

                        <h3 style={{ marginTop: "20px" }}>Pembahasan Soal:</h3>
                        {question.map((q, index) => 
                            answers[index] !== q.answer ? (
                            <div key={index} style={styles.explanation}>
                                <strong>Soal {index + 1}:</strong>
                                <p>{q.question}</p>
                                <strong>Jawaban:</strong>
                                <p>{q.options[q.answer]}</p>
                                <strong>Pembahasan:</strong>
                                <p>{q.explanation}</p>
                            </div>
                        ) : null
                    )}
                    </div>
                </div>
            ) : (
                <div>
                    <h2 style={styles.question}>{question[currentQuestion].question}</h2>
                    <ul>
                        {question[currentQuestion].options.map((option, index) => (
                            <li
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-selected={answers[currentQuestion] === index}
                                onKeyPress={(e) => e.key === "Enter" && handleAnswerOptionClick(index)}
                                style={
                                    answers[currentQuestion] === index 
                                    ? styles.optionHover
                                    : styles.option
                                }
                                onClick={() => handleAnswerOptionClick(index)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div style={styles.buttonContainer}>
                        <button
                            style={{...styles.button, ...styles.backButton}}
                            onClick={handleBackQuestion}
                            disabled={currentQuestion === 0}
                        >
                            Back
                        </button>
                        <button style={{ ...styles.button, ...styles.nextButton}} 
                        onClick={handleNextQuestion}
                        disabled={answers[currentQuestion] === null}
                        >
                            {currentQuestion === question.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default Quiz;
