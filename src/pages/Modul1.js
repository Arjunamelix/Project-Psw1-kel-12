import React from "react";


const Modul1 = () => {
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
                <h1>DINAMIKA ROTASI DAN BENDA TEGAR</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Dinamika rotasi membahas gerak rotasi benda tegar, yaitu benda yang
                    bentuk dan dimensinya tidak berubah meskipun mengalami gaya.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Torque (τ):</strong> Gaya yang menyebabkan benda berputar.
                    </li>
                    <li>
                        <strong>Hukum Newton Rotasi:</strong> Στ = Iα
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
                            <td>Momen Inersia</td>
                            <td>I = Σmᵢrᵢ²</td>
                            <td>rᵢ = jarak partikel ke sumbu rotasi</td>
                        </tr>
                        <tr>
                            <td>Hubungan Torque</td>
                            <td>τ = r × F</td>
                            <td>r = lengan gaya, F = gaya</td>
                        </tr>
                        <tr>
                            <td>Energi Kinetik Rotasi</td>
                            <td>E = (1/2)Iω²</td>
                            <td>ω = kecepatan sudut</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                    Dinamika rotasi banyak diaolikasikan dalam kehidupan sehari-hari,
                    seperti roda mobil, mesin turbin, dan permainan bola.
                </p>
            </section>
        </div>
    );
};

export default Modul1;