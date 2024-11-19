import React from "react";

const Modul9 = () => {
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
                <h1>GELOMBANG BUNYI & CAHAYA</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Gelombang bunyi dan cahaya merupakan dua jenis gelombang yang sangat penting dalam kehidupan sehari-hari.
                    Gelombang bunyi merambat melalui medium seperti udara, air, atau padatan, sedangkan gelombang cahaya dapat merambat bahkan di ruang hampa.                
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
                        <strong>Kecepatan Gelombang (v):</strong> Jarak yang ditempuh gelomban per satuan waktu.
                    </li>
                    <li>
                        <strong>Amplitudo (A):</strong> Besarnya simpangan dari tiitk keseimbangan.
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Perbedaan Gelombang Bunyi dan Cahaya</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Karakteristik</th>
                            <th>Gelombang Bunyi</th>
                            <th>Gelombang Cahaya</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jenis Gelombang</td>
                            <td>Gelombang Mekanik</td>
                            <td>Gelombang Elektromagnetik</td>
                        </tr>
                        <tr>
                            <td>Medium</td>
                            <td>Memerlukan medium untuk merambat</td>
                            <td>Dapat merambat diruang hampa</td>
                        </tr>
                        <tr>
                            <td>Kecepatan</td>
                            <td>~343 m/s (di udara pada suhu 20°C)</td>
                            <td>~3 × 10⁸ m/s (di ruang hampa)</td>
                        </tr>
                        <tr>
                            <td>Panjang Gelombang</td>
                            <td>Beberapa mm hingga beberapa meter</td>
                            <td>10⁻¹⁴ m hingga beberapa km</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                <strong>Gelombang Bunyi:</strong> Digunakan dalam sonar, USG medis, dan sistem komunikasi.  
                <strong>Gelombang Cahaya:</strong> Penting untuk teknologi optik, komunikasi serat optik, dan energi surya.
                </p>
            </section>
        </div>
    );
};

export default Modul9;