import React, { useState, useEffect,  useMemo } from "react";
import Navbar from "../components/Header";
import {useNavigate} from "react-router-dom";

const Quiz4 = () =>  {
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
            question: "Hukum Newton III menyatakan bahwa ...",
            options: [
                "A. Benda tetap diam jika tidak ada gaya yang bekerja",
                "B. Gaya berbanding lurus dengan percepatan",
                "C. Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
                "D. Momentum benda selalu konstan",
            ],
            answer: 2,
            explanation: 
                "Hukum Newton III menyatakan bahwa untuk setiap aksi terdapat reaksi yang sama besar tetapi berlawanan arah.",
        },
        {
            question: "Rumus gaya pada sebuah benda adalah ...",
            options: [
                "A. F = m x a",
                "B. F = m x v",
                "C. F = m x g",
                "D. F = m x h",
            ],
            answer: 0,
            explanation: 
                "Rumus gaya berdasarkan hukum Newton II adalah F = m x a, di mana F adalah gaya, m adalah massa, dan a adalah percepatan.",
        },
        {
            question: "Besaran yang termasuk dalam kelompok besaran pokok adalah ...",
            options: [
                "A. Waktu, panjang, massa",
                "B. Kecepatan, massa, panjang",
                "C. Massa, percepatan, waktu",
                "D. Momentum, panjang, waktu",
            ],
            answer: 1,
            explanation: 
                "Besaran pokok meliputi waktu, panjang, massa, arus listrik, suhu, intensitas cahaya, dan jumlah zat.",
        },
        {
            question: "Energi potensial gravitasi dihitung dengan rumus ...",
            options: [
                "A. E = m x g x h",
                "B. E = 1/2 m v²",
                "C. E = k x²",
                "D. E = m x a x h",
            ],
            answer: 3,
            explanation: 
                "Energi potensial gravitasi dihitung dengan rumus E = m x g x h, di mana m adalah massa, g adalah percepatan gravitasi, dan h adalah ketinggian.",
        },
        {
            question: "Kecepatan sebuah benda yang bergerak lurus dihitung dengan rumus ...",
            options: [
                "A. v = s / t",
                "B. v = a x t",
                "C. v = m x g",
                "D. v = F / m",
            ],
            answer: 1,
            explanation: 
                "Kecepatan benda yang bergerak lurus dihitung dengan rumus v = s / t, di mana s adalah jarak dan t adalah waktu.",
        },
        {
            question: "Satuan SI untuk arus listrik adalah ...",
            options: [
                "A. Volt",
                "B. Ampere",
                "C. Ohm",
                "D. Watt",
            ],
            answer: 2,
            explanation: 
                "Satuan SI untuk arus listrik adalah Ampere (A).",
        },
        {
            question: "Dalam hukum Pascal, tekanan pada fluida ...",
            options: [
                "A. Berbeda di setiap titik",
                "B. Sama besar ke segala arah",
                "C. Bergantung pada massa benda",
                "D. Hanya bekerja ke bawah",
            ],
            answer: 0,
            explanation: 
                "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada fluida dalam wadah tertutup diteruskan sama besar ke segala arah.",
        },
        {
             question: "Rumus tekanan dalam fisika adalah ...",
             options: [
            "A. P = F / A",
            "B. P = F x A",
            "C. P = m x a",
            "D. P = m / V",
            ],
            answer: 2,
             explanation: 
                  "Tekanan dihitung dengan rumus P = F / A, di mana P adalah tekanan, F adalah gaya, dan A adalah luas permukaan.",
    },
    {
        question: "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Energi kinetiknya adalah ...",
        options: [
            "A. 3 Joule",
            "B. 6 Joule",
            "C. 9 Joule",
            "D. 18 Joule",
        ],
        answer: 3,
        explanation: 
            "Energi kinetik dihitung dengan rumus 1/2 m v². Dalam kasus ini, 1/2 x 2 x (3)² = 18 Joule.",
    },
    {
        question: "Hasil kali massa dan kecepatan disebut ...",
        options: [
            "A. Momentum",
            "B. Gaya",
            "C. Energi kinetik",
            "D. Daya",
        ],
        answer: 0,
        explanation: 
            "Hasil kali massa dan kecepatan disebut momentum, yang dinyatakan dengan p = m x v.",
    },
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

export default Quiz4;
