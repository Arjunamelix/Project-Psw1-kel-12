import React, { useState } from "react";
import bankSoal from "./BankSoalPage"; 

const BankSoalPage = () => {
  const [soalSaatIni, setSoalSaatIni] = useState(0);
  const [skor, setSkor] = useState(0);
  const [tampilkanSkor, setTampilkanSkor] = useState(false);
  const [opsiDipilih, setOpsiDipilih] = useState("");
  const [showPembahasan, setShowPembahasan] = useState(false);

  const handleJawaban = (opsi) => {
    setOpsiDipilih(opsi);
    setShowPembahasan(true);
    if (opsi === bankSoal[soalSaatIni].answer) {
      setSkor(skor + 1);
    }
  };

  const soalBerikutnya = () => {
    if (soalSaatIni < bankSoal.length - 1) {
      setSoalSaatIni(soalSaatIni + 1);
      setOpsiDipilih("");
      setShowPembahasan(false);
    } else {
      setTampilkanSkor(true);
    }
  };

  const ulangKuis = () => {
    setSoalSaatIni(0);
    setSkor(0);
    setTampilkanSkor(false);
    setOpsiDipilih("");
    setShowPembahasan(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Bank Soal Fisika Kelas 11</h1>
      {tampilkanSkor ? (
        <div>
          <h2>Skor Anda: {skor} dari {bankSoal.length}</h2>
          <button onClick={ulangKuis}>Mulai Lagi</button>
        </div>
      ) : (
        <div>
          <h2>Soal {soalSaatIni + 1} dari {bankSoal.length}</h2>
          <p>{bankSoal[soalSaatIni].question}</p>
          <div>
            {bankSoal[soalSaatIni].options.map((opsi, index) => (
              <button
                key={index}
                style={{
                  display: "block",
                  margin: "10px 0",
                  padding: "10px",
                  backgroundColor: opsiDipilih === opsi ? "#4caf50" : "#e0e0e0",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => handleJawaban(opsi)}
                disabled={showPembahasan}
              >
                {opsi}
              </button>
            ))}
          </div>
          {showPembahasan && (
            <div style={{ marginTop: "20px" }}>
              <h3>Pembahasan:</h3>
              <p>{bankSoal[soalSaatIni].explanation}</p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={soalBerikutnya}
              >
                {soalSaatIni === bankSoal.length - 1 ? "Lihat Skor" : "Soal Berikutnya"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BankSoalPage;