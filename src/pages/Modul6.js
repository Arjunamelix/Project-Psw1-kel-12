import React from "react";

const Modul6 = () => {
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
                <h1>TEORI KINETIK GAS</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Teori kinetik gas menjelaskan sifat gas berdasarkan gerakan pertikel-partikelnya.
                    Gas dianggap terdiri dari partikel kecil yang bergerak secara acak dan terus-menerus.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Energi Kinetik:</strong> Energi partikel gas yang bergerak, berbanding lurus dengan suhu mutlaknya.
                    </li>
                    <li>
                        <strong>Tekanan Gas:</strong> Diakibatkan oleh tumbukan partikel gas dengan dinding wadah.
                    </li>
                    <li>
                        <strong>Hukum Gas Ideal:</strong> Menjelaskan hubungan antara tekanan, volume, suhu, dan jumlah mol gas.
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
                            <td>Hukum Gas Ideal</td>
                            <td>PV = nRT</td>
                            <td>P = tekanan, V = volume, n = jumlah mol, R = konstanta gas, T = suhu mutlak</td>
                        </tr>
                        <tr>
                            <td>Energi Kinetik Rata-rata</td>
                            <td>E_k = ½mv² = ³/₂ kT </td>
                            <td>m = massa partikel, v = kecepatan partikel, k = konstanta Boltzmann, T = suhu mutlak</td>
                        </tr>
                        <tr>
                            <td>Kecepatan Efektifi</td>
                            <td>v_rms = √(3RT/M)</td>
                            <td>R = konstanta gas, T = suhu mutlak, M = massa molar gas</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Teori kinetik gas digunakan untuk memahami perilaku gas dalam mesin pembakaran internak, pendingin udara, balon udara, dan studi termodinamika.
                </p>
            </section>
        </div>
    );
};

export default Modul6;