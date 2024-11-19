import React from "react";

const Modul5 = () => {
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
                <h1>SUHU DAN KALOR</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Suhu dan kalor adalah dua konsep penting dalam termodinamika yang saling berkaitan.
                    Suhu mengukur tingkat panas suatu benda, sedangkan kalor adalah energi yang berpindah akibat perbedaan suhu.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Suhu:</strong> Ukuran tingkat panas atau dingin suatu benda, biasanya dinyatakan dalam skala Celcius, Fahrenheit, atau Kelvin.
                    </li>
                    <li>
                        <strong>Kalor:</strong> Energi yang berpindah akibat perbedaan suhu antara dua benda.
                    </li>
                    <li>
                        <strong>Kalor Jenis (c):</strong> Jumlah energi yang diperlukan untuk menaikkan suhu 1 kg zat sebesar 1°C.
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
                            <td>Hubungan Kalor</td>
                            <td>Q = mcΔT</td>
                            <td>Q = kalor, m = massa, c = kalor jenis, ΔT = perubahan suhu</td>
                        </tr>
                        <tr>
                            <td>Perpindahan Kalor </td>
                            <td>P = kA(T₁ - T₂) / d</td>
                            <td>k = konduktivitas termal, A = luas, d = ketebalan</td>
                        </tr>
                        <tr>
                            <td>Energi dalam Perubahan Wujud</td>
                            <td>Q = mL</td>
                            <td>m = massa, L = kalor laten</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Konsep suhu dan kalor digunakan dalam pengaturan suhu ruangan (AC atau pemanas), desain alat memasak,
                   pengolahan makanan, serta teknik pendinginan seperti kulkas dan freezer.
                </p>
            </section>
        </div>
    );
};

export default Modul5;