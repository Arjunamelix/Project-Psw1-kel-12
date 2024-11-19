import React from "react";

const Modul4 = () => {
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
                <h1>FLUIDA DINAMIS</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Fluida dinamis mempelajari fluida yang sedang bergerak. Topik ini penting dalam analisis aliran fluida seperti dalam pipa, sungai, dan sistem hidrolik.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Persamaan Kontinuitas:</strong> Menyatakan bahwa laju aliran massa fluida tetap konstan pada setiap titik dalam sistem tertutup.
                    </li>
                    <li>
                        <strong>Hukum Bernoulli:</strong> Energi total per satuan volume fluida yang bergerak tetap konstan sepanjang garis aliran.
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
                            <td>Persamaan Kontinuitas</td>
                            <td>A₁v₁ = A₂v₂</td>
                            <td>A = luas penampang, V = kecepatan fluida</td>
                        </tr>
                        <tr>
                            <td>Hukum Bernoulli</td>
                            <td>P + ½ρv² + ρgh = konstan</td>
                            <td>P = tekanan, ρ = massa jenis fluida, v = kecepatan fluida, h = ketinggian</td>
                        </tr>
                        <tr>
                            <td>Debit</td>
                            <td>Q = Av</td>
                            <td>A = luas penampang, v = kecepatan fluida</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Fluida dinamis diaplikasikan dalam sistem pipa, desain pesawat, irigasi, dan alat seperti pompa dan turbin.
                </p>
            </section>
        </div>
    );
};

export default Modul4;