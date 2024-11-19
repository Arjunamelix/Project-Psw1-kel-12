import React from "react";

const Modul10 = () => {
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
                <h1>PEMANASAN GLOBAL</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                   Pemanasan global adalah peningkatan suhu rata-rata atmosfer, lautan, dan bumi akibat peningkatan konsentrasi gas rumah kaca.
                   Fenomena ini berdampak besar pada ekosistem, cuaca, dan kehidupan manusia di seluruh dunia.                
                </p>
            </section>
            <section>
                <h2>Proses Terjadinya</h2>
                <ul>
                    <li>
                        <strong>Pemantulan Sinar Matahari:</strong>Sebagian energi matahari dipantulkan kembali ke luar angkasa oleh atmosfer.
                    </li>
                    <li>
                        <strong>Absorpsi oleh Gas Rumah Kaca:</strong>Gas seperti karbondioksida (CO₂), metana (CH₄), dan uap air menyerap energi panas dan memantulkannya kembali ke permukaan bumi.
                    </li>
                    <li>
                        <strong>Efek Rumah Kaca:</strong>Proses ini menyebabkan suhu bumi meningkat karena panas terperangkap di atmosfer.
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Dampak Pemanasan Global</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Dampak</th>
                            <th>Penjelasan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kenaikan Permukaan Laut</td>
                            <td>Pencairan es di kutub menyebabkan kenaikan volume air laut.</td>
                        </tr>
                        <tr>
                            <td>Perubahan Iklim</td>
                            <td>Cuaca menjadi tidak stabil, menyebabkan bencana seperti badai, banjir, dan kekeringan.</td>
                        </tr>
                        <tr>
                            <td>Kerusakan Ekosistrtem</td>
                            <td>Habitat alami hewan dan tumbuhan terganggu, menyebabkan kepunahan spesies.</td>
                        </tr>
                        <tr>
                            <td>Gangguan pada Kesehatan</td>
                            <td>Peningkatan penyakit akibat suhu tinggi, seperti dehidrasi dan gangguan pernapasan.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Upaya Mengurangi Pemanasan Global</h2>
                <ul>
                    <li>
                        Mengurangi emisi gas rumah kaca dengan beralih ke energi terbarukan seperti tenaga surya dan angin.
                    </li>
                    <li>
                        Mengurangi penggunaan kendaraan bermotor dan beralih ke transportasi ramah lingkungan.
                    </li>
                    <li>
                        Menanam lebih banyak pohon untuk menyerap karbon dioksida.
                    </li>
                    <li>
                        Menerapkan gaya hidup hemat energi seperti menggunakan lampu LED dan mematikan perangkat elektronik saat tidak digunakan.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Modul10;