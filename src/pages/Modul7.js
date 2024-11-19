import React from "react";

const Modul7 = () => {
    return (
        <div className="container">
            <style>
                {`
                    .container {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    header h1 {
                        color: #2c3e50;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    section h2 {
                        color: #34495e;
                    }
                    section p, section ul {
                        color: #555;
                    }
                    ul {
                        list-style-type: square;
                        padding-left: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 10px;
                    }
                    table th, table td {
                        border: 1px solid #ccc;
                        padding: 8px;
                        text-align: left;
                    }
                    table th {
                        background-color: #ecf0f1;
                    }
                `}
            </style>
            <header>
                <h1>KARAKTERISTIK GELOMBANG MEKANIK</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Gelombang mekanik adalah gelombang yang membutuhkan medium untuk merambat.
                    Contoh gelombang mekanin meliputi gelombang bunyi, gelombang air, dan gelombang pada tali.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Frekuensi (f):</strong> Jumlah gelombang yang melewati suatu titik per detik.
                    </li>
                    <li>
                        <strong>Periode (T)</strong> Waktu yang diperlukan untuk suatu siklus penuh gelombang.
                    </li>
                    <li>
                        <strong>Panjang Gelombang (λ):</strong> Jarak antara dua titik berturut-turut yang setara pada gelombang .
                    </li>
                    <li>
                        <strong>Kecepatan Gelombang (v):</strong> Jarak yang ditempuh gelomban per satuan waktu .
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Persamaan Penting</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Konsep</th>
                            <th>Persamaan</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kecepatan Gelombang</td>
                            <td>v = fλ</td>
                            <td>v = kecepatan, f = frekuensi, λ = panjang gelombang</td>
                        </tr>
                        <tr>
                            <td>Frekuensi</td>
                            <td>f = 1/T</td>
                            <td>f = frekuensi, T = periode</td>
                        </tr>
                        <tr>
                            <td>Energi Gelombang</td>
                            <td>E = ½kA²</td>
                            <td>k = konstanta pegas, A = amplitudo</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Karakteristik gelombang mekanik digunakan dalam sistem komunikasi seperti sonar,
                   teknologi medis seperti USG, dan eksplorasi geologi untuk mendeteksi gempa bumi.
                </p>
            </section>
        </div>
    );
};

export default Modul7;