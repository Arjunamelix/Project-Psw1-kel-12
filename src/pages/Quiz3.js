import React, { useState, useEffect,  useMemo } from "react";
import Navbar from "../components/Header";
import {useNavigate} from "react-router-dom";

const Quiz3 = () =>  {
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
            question: "Berapa panjang gelombang suara yang memiliki frekuensi 340 Hz jika cepat rambat suara di udara adalah 340 m/s?",
            options: ["A. 0,5 m", "B. 1 m", "C. 1,5 m", "D. 2 m"],
            answer: 0,
            explanation:
                "Gunakan rumus: λ = v / f. Dengan v = 340 m/s dan f = 340 Hz, maka λ = 340 / 340 = 1 m. Jawaban yang benar adalah B.",
        },
        {
           question: "Sebuah mobil bermassa 1000 kg bergerak dengan kecepatan 20 m/s. Berapa energi kinetik mobil tersebut?",
           options: ["A. 200.000 J", "B. 400.000 J", "C. 500.000 J", "D. 800.000 J"],
           answer: 2,
           explanation:
               "Gunakan rumus energi kinetik: EK = 0,5 × m × v². Dengan m = 1000 kg dan v = 20 m/s, maka EK = 0,5 × 1000 × 20² = 400.000 J. Jawaban yang benar adalah B.",
        },
        {
            question: "Sebuah benda bermassa 2 kg diikat pada tali dan diayunkan dengan panjang tali 1 meter. Berapa percepatan sentripetalnya jika kecepatannya 4 m/s?",
            options: ["A. 8 m/s²", "B. 10 m/s²", "C. 12 m/s²", "D. 16 m/s²"],
            answer: 1,
            explanation:
                 "Gunakan rumus percepatan sentripetal: a = v² / r. Dengan v = 4 m/s dan r = 1 m, maka a = 4² / 1 = 16 m/s². Jawaban yang benar adalah D.",
        },
        {
            question: "Dua bola masing-masing bermassa 1 kg dan 3 kg berada dalam keadaan diam dan bertabrakan secara elastis. Jika bola 1 bergerak dengan kecepatan 4 m/s setelah tumbukan, berapa kecepatan bola 2? (Sistem tertutup)",
            options: ["A. 2 m/s", "B. 4 m/s", "C. 6 m/s", "D. 8 m/s"],
            answer: 3,
            explanation:
                "Gunakan hukum kekekalan momentum: m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'. Dengan m₁ = 1 kg, m₂ = 3 kg, v₁ = 0, v₂ = 0, dan v₁' = 4 m/s, maka 0 = (1 × 4) + (3 × v₂'). Jadi v₂' = -4 / 3 = 4 m/s (dalam arah sebaliknya). Jawaban yang benar adalah B.", 
        },
        {
            question: "Sebuah benda bermassa 4 kg dipanaskan hingga menyerap energi sebesar 8000 J. Jika kalor jenis benda tersebut adalah 2000 J/kg·°C, berapa kenaikan suhunya?",
            options: ["A. 1°C", "B. 2°C", "C. 3°C", "D. 4°C"],
            answer: 0,
            explanation:
                "Gunakan rumus Q = m × c × ΔT. Dengan Q = 8000 J, m = 4 kg, dan c = 2000 J/kg·°C, maka ΔT = Q / (m × c) = 8000 / (4 × 2000) = 2°C. Jawaban yang benar adalah B.",
        },
        {
            question: "Sebuah benda bermassa 2 kg digerakkan ke atas dengan gaya 50 N selama 3 detik. Jika percepatan gravitasi adalah 10 m/s², berapa besar usaha yang dilakukan gaya tersebut?",
            options: ["A. 150 J", "B. 300 J", "C. 450 J", "D. 600 J"],
            answer: 2,
            explanation:
                "Usaha dilakukan oleh gaya total. Gaya total = 50 N - (m × g) = 50 - (2 × 10) = 30 N. Usaha = F × s. Karena s = v × t = (a × t²) / 2, percepatan = 30/2 = 15 m/s². Maka usaha = 600 J. Jawaban adalah D.",
        },
        {
            question: "Sebuah benda bermassa 10 kg berada dalam keadaan diam. Jika sebuah gaya sebesar 40 N bekerja pada benda selama 5 detik, berapa kecepatan akhirnya?",
            options: ["A. 10 m/s", "B. 15 m/s", "C. 20 m/s", "D. 25 m/s"],
            answer: 1,
            explanation:
                 "Gunakan rumus impuls: F × t = m × Δv. Dengan F = 40 N, t = 5 s, dan m = 10 kg, maka Δv = (F × t) / m = (40 × 5) / 10 = 20 m/s. Jawaban yang benar adalah C.",
        },
        {
            question: "Berapa besar energi mekanik sebuah benda bermassa 2 kg yang berada di ketinggian 5 meter dengan kecepatan 3 m/s? (g = 10 m/s²)",
            options: ["A. 40 J", "B. 55 J", "C. 70 J", "D. 85 J"],
            answer: 0,
            explanation:
                "Energi mekanik adalah penjumlahan energi kinetik (EK) dan energi potensial (EP). EK = 0,5 × m × v² = 0,5 × 2 × 3² = 9 J. EP = m × g × h = 2 × 10 × 5 = 100 J. Total energi mekanik = 9 + 100 = 109 J. Jawaban adalah B.",
        },
        {
            question: "Sebuah resistor memiliki hambatan 10 ohm, dan arus sebesar 2 A mengalir melaluinya. Berapa besar tegangan pada resistor tersebut?",
            options: ["A. 10 V", "B. 15 V", "C. 20 V", "D. 25 V"],
            answer: 2,
            explanation:
                "Gunakan hukum Ohm: V = I × R. Dengan I = 2 A dan R = 10 ohm, maka V = 2 × 10 = 20 V. Jawaban yang benar adalah C.",
        },
        {
            question: "Energi kinetik suatu benda dihitung dengan rumus ...",
            options: [
                "A. 1/2 m v²",
                "B. m g h",
                "C. 1/2 k x²",
                "D. m a s",
            ],
            answer: 3,
            explanation: 
                "Energi kinetik dihitung dengan rumus 1/2 m v², di mana m adalah massa benda dan v adalah kecepatan benda.",
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

export default Quiz3;
