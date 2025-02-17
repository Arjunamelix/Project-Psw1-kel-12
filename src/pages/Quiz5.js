import React, { useState, useEffect,  useMemo } from "react";
import Navbar from "../components/Header";
import {useNavigate} from "react-router-dom";

const Quiz5 = () =>  {
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
        question: "Benda yang memiliki massa besar memerlukan ... untuk mempercepat geraknya.",
        options: [
            "A. Gaya yang lebih kecil",
            "B. Gaya yang lebih besar",
            "C. Percepatan yang lebih kecil",
            "D. Energi yang lebih kecil",
        ],
        answer: 1,
        explanation:
            "Menurut hukum Newton II, gaya yang dibutuhkan untuk mempercepat benda berbanding lurus dengan massa. Benda yang lebih besar memerlukan gaya yang lebih besar untuk mempercepatnya.",
    },
    {
        question: "Perubahan energi dari energi potensial menjadi energi kinetik terjadi pada ...",
        options: [
            "A. Benda diam",
            "B. Benda yang jatuh bebas",
            "C. Benda yang diputar",
            "D. Benda dalam keadaan setimbang",
        ],
        answer: 2,
        explanation:
            "Ketika benda jatuh bebas, energi potensialnya berkurang sementara energi kinetiknya bertambah sesuai hukum kekekalan energi.",
    },
    {
        question: "Gelombang bunyi termasuk gelombang ...",
        options: [
            "A. Elektromagnetik",
            "B. Longitudinal",
            "C. Transversal",
            "D. Stasioner",
        ],
        answer: 0,
        explanation:
            "Gelombang bunyi termasuk gelombang longitudinal, di mana partikel medium berosilasi sejajar dengan arah perambatan gelombang.",
    },
    {
        question: "Hukum Archimedes menyatakan bahwa ...",
        options: [
            "A. Benda yang terapung memiliki massa jenis yang lebih kecil dari fluida",
            "B. Benda akan selalu tenggelam dalam fluida",
            "C. Tekanan fluida selalu sebanding dengan gaya angkat",
            "D. Benda dalam fluida dipengaruhi gaya angkat sebesar berat fluida yang dipindahkan",
        ],
        answer: 3,
        explanation:
            "Hukum Archimedes menyatakan bahwa gaya angkat ke atas pada benda dalam fluida sama dengan berat fluida yang dipindahkan.",
    },
    {
        question: "Momentum sudut suatu benda dapat dihitung dengan rumus ...",
        options: [
            "A. L = r x p",
            "B. L = m x v",
            "C. L = I x ω",
            "D. L = F x d",
        ],
        answer: 2,
        explanation:
            "Momentum sudut dihitung dengan L = I x ω, di mana I adalah momen inersia dan ω adalah kecepatan sudut.",
    },
    {
        question: "Sebuah cermin cekung memiliki fokus sejauh 10 cm. Jarak fokusnya adalah ...",
        options: [
            "A. 10 cm",
            "B. 5 cm",
            "C. 20 cm",
            "D. 15 cm",
        ],
        answer: 0,
        explanation:
            "Jarak fokus cermin cekung adalah setengah dari jari-jari kelengkungan cermin. Dalam soal ini, fokus sudah diberikan sebagai 10 cm.",
    },
    {
        question: "Hasil kali gaya dan perpindahan disebut ...",
        options: [
            "A. Daya",
            "B. Usaha",
            "C. Energi",
            "D. Momentum",
        ],
        answer: 1,
        explanation:
            "Hasil kali gaya dan perpindahan disebut usaha, dengan rumus W = F x d x cos(θ).",
    },
    {
        question: "Hasil kali gaya dan perpindahan disebut ...",
        options: [
            "A. Daya",
            "B. Usaha",
            "C. Energi",
            "D. Momentum",
        ],
        answer: 3,
        explanation:
            "Hasil kali gaya dan perpindahan disebut usaha, dengan rumus W = F x d x cos(θ).",
    },
    {
        question: "Frekuensi suatu gelombang dapat dihitung dengan rumus ...",
        options: [
            "A. f = v / λ",
            "B. f = T / v",
            "C. f = 1 / T",
            "D. f = λ / v",
        ],
        answer: 2,
        explanation:
            "Frekuensi suatu gelombang dihitung dengan f = 1 / T, di mana T adalah periode gelombang.",
    },
    {
        question: "Satuan SI untuk daya adalah ...",
        options: [
            "A. Joule",
            "B. Watt",
            "C. Newton",
            "D. Pascal",
        ],
        answer: 1,
        explanation:
            "Satuan SI untuk daya adalah Watt (W), yang menunjukkan energi yang digunakan per satuan waktu.",
    },
    {
        question: "Gaya sentripetal selalu bekerja ...",
        options: [
            "A. Menjauh dari pusat lingkaran",
            "B. Sejajar dengan arah gerak benda",
            "C. Menuju pusat lingkaran",
            "D. Tegak lurus ke arah gravitasi",
        ],
        answer: 2,
        explanation:
            "Gaya sentripetal selalu bekerja menuju pusat lingkaran untuk menjaga benda tetap bergerak dalam lintasan melingkar.",
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

export default Quiz5;
