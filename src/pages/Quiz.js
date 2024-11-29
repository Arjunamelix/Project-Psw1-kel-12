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
<<<<<<< HEAD
       {
            question: "Sebuah benda bermassa 4 kg ditarik dengan gaya 16 N pada bidang datar tanpa gesekan. Hitung percepatan benda tersebut.",
            options: ["A. 2 m/s²", "B. 3 m/s²", "C. 4 m/s²", "D. 5 m/s²"],
            answer: 0,
            explanation:
                  "Gunakan hukum ll newton F=m.a, a=f/m=16/4=4m/s^2.",
       },
       {
            question: "Sebuah benda bermassa 2 kg dipercepat oleh gaya sebesar 10 N pada bidang datar.Berapakah percepatan benda tersebut?.",
            options: ["A. 5 M/S^2", "B. 10 m/s^2", "C. 2 m/s^2", "D. 4 m/s^2",],
            answer: 0,
            explanation:
                  "Gunakan hukum II Newton: F = m.a. Dengan massa (m) = 2 kg dan gaya (F) = 10 N, maka percepatan (a) = F / m = 10 / 2 = 5 m/s^2. Jawaban yang benar adalah A. 5 m/s^2.",
        },
        {
              question: "Sebuah benda di jatuhkan bebas dari ketinggian 20 meter.berapa waktu yang diperlukan benda untuk mencapai tanah? (g = 10m/s^2)",
              options: ["A. 2 s", "B. 3 s", "C. 4 s", "D. 5 s"],
              answer: 0,
              explanation:
                "Gunakan rumus kinematika: h = 0.5 × g × t². Dengan h = 20 m dan g = 10 m/s², maka t² = (2 × 20) / 10 = 4, sehingga t = √4 = 2 s. Jawaban yang benar adalah A.",
        },
        {   
               question: "Sebuah bola dilempar ke atas dengan kecepatan awal 15 m/s. Berapa waktu yang diperlukan bola untuk mencapai titik tertinggi? g = 10 m/s².",
               options: ["A. 1,0 s", "B. 1,5 s", "C. 2,0 s", "D. 2,5 s"],
              answer: 0,
              explanation:
                   "Gunakan rumus v = v₀ - g × t. Pada titik tertinggi, v = 0, sehingga t = v₀ / g = 15 / 10 = 1,5 s. Jawaban yang benar adalah B.",
        },
        {
               question: "Sebuah gaya sebesar 50 N digunakan untuk mendorong sebuah benda sejauh 4 meter pada bidang datar. Berapa besar usaha yang dilakukan?",
               options:  ["A. 100 J", "B. 150 J", "C. 200 J", "D. 250 J"],
               answer: 0,
               explanation:
                      "Gunakan rumus usaha: W = F × s. Dengan F = 50 N dan s = 4 m, maka W = 50 × 4 = 200 J. Jawaban yang benar adalah C.",
        },
        {
             question: "Berapa besar daya yang dihasilkan oleh sebuah mesin yang melakukan usaha 300 J dalam waktu 5 detik?",
             options:  ["A. 50 W", "B. 60 W", "C. 75 W", "D. 100 W"],
             answer: 0,
             explanation:
                    "Gunakan rumus daya: P = W / t. Dengan W = 300 J dan t = 5 s, maka P = 300 / 5 = 100 W. Jawaban yang benar adalah D.",
        },
        {
              quetion: "Sebuah benda bermassa 2 kg bergerak melingkar dengan jari-jari lintasan 0,5 m dan kecepatan 4 m/s. Berapa besar gaya sentripetal yang bekerja pada benda?",
              options:  ["A. 16 N", "B. 32 N", "C. 8 N", "D. 4 N"],
              answer: 0,
              explanation:
                    "Gunakan rumus gaya sentripetal: F = m × v² / r. Dengan m = 2 kg, v = 4 m/s, dan r = 0,5 m, maka F = 2 × 4² / 0,5 = 32 N. Jawaban yang benar adalah B.",
        },
        {
              question: "Sebuah muatan +2 μC dan +3 μC dipisahkan sejauh 0,2 meter. Berapa besar gaya listrik yang bekerja di antara kedua muatan? (k = 9 × 10⁹ Nm²/C²)",
              options: ["A. 1,35 N", "B. 2,7 N", "C. 3,6 N", "D. 4,5 N"],
              answer: 0,
              explanation:
                  "Gunakan hukum Coulomb: F = k × |q₁ × q₂| / r². Dengan q₁ = 2 × 10⁻⁶ C, q₂ = 3 × 10⁻⁶ C, dan r = 0,2 m, maka F = 9 × 10⁹ × (2 × 10⁻⁶ × 3 × 10⁻⁶) / 0,2² = 3,6 N. Jawaban yang benar adalah C.",
       },
        {
              question: "Berapa besar momentum sebuah benda bermassa 4 kg yang bergerak dengan kecepatan 5 m/s?",
              options: ["A. 10 kg·m/s", "B. 15 kg·m/s", "C. 20 kg·m/s", "D. 25 kg·m/s"],
              answer: 0,
              explanation:
                  "Gunakan rumus momentum: p = m × v. Dengan m = 4 kg dan v = 5 m/s, maka p = 4 × 5 = 20 kg·m/s. Jawaban yang benar adalah C.",
          },
          {
               question: "Sebuah benda bermassa 5 kg digantung pada tali yang panjangnya 2 meter. Berapa periode ayunan sederhana jika benda tersebut digerakkan? (g = 10 m/s²)",
               options: ["A. 2,83 s", "B. 3,14 s", "C. 1,26 s", "D. 2,0 s"],
               answer: 0,
               explanation:
                     "Gunakan rumus periode ayunan: T = 2π × √(l / g). Dengan l = 2 m dan g = 10 m/s², maka T = 2π × √(2 / 10) ≈ 2,83 s. Jawaban yang benar adalah A.",
          },
        {
              question: "Sebuah benda memiliki massa 10 kg dan percepatan gravitasi di tempat tersebut adalah 9,8 m/s². Berapa berat benda tersebut?",
              options: ["A. 88 N", "B. 96 N", "C. 98 N", "D. 100 N"],
              answer: 0,
              explanation:
        "Gunakan rumus berat: W = m × g. Dengan m = 10 kg dan g = 9,8 m/s², maka W = 10 × 9,8 = 98 N. Jawaban yang benar adalah C.",
        },
            
=======
>>>>>>> cccf120b5567ceac5edf931ad0fce70bd24946e3
        
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
