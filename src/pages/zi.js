import React, { useState } from 'react';
import './zi.css';
import { useNavigate } from 'react-router-dom';

const ComponentName = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMateri, setFilteredMateri] = useState([]);

    const materiList = [
        {id:1, title: "Dinamika rotasi dan benda tegar", url:"/modul1"},
        {id:2, title: "Elastisitas bahan", url:"/modul2"},
        {id:3, title: "Fluida Statis", url:"/modul3"},
        {id:4, title: "Fluida Dinamis", url:"/modul4"},
        {id:5, title: "Suhu dan kalor", url:"/modul5"},
        {id:6, title: "Teori kinetik gas", url:"/modul6"},
        {id:7, title: "Karakteristik gelombang mekanik", url:"/modul7"},
        {id:8, title: "Gelombang berjalan & gelombang stasioner", url:"/modul8"},
        {id:9, title: "Gelombang bunyi & cahaya", url:"/modul9"},
        {id:10, title: "Pemanasan global", url:"/modul10"},
    ];

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const results = materiList.filter((materi) =>
            materi.title.toLowerCase().includes(query)
        );
        setFilteredMateri(results);
    };

    const handleNavigate = (url) => {
        navigate(url);
    };

    const handlekeyDown = (e) => {
        if (e.key === 'Enter' && searchQuery.trim() === '') {
            e.prevent.Default();
        }
    };
    
    return (
        <div className="main-container">
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="hero-text">
                            <h1 className="hero-title">Selamat Datang di Web Pembelajaran Fisika.</h1>
                            <p className="hero-description">Belajar fisika jadi lebih mudah dan menyenangkan dengan berbagai materi interaktif.</p>
                            <div className="search-container">
                                <input
                                type='search'
                                placeholder='Cari "Materi"'
                                style={{
                                    padding: "10px",
                                    width: "100%",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    marginBottom: "10px",
                                }}
                                value={searchQuery}
                                onChange={handleSearch}
                                />
                                {filteredMateri.length > 0 ? (
                                    <ul style={{
                                        listStyle: "none",
                                        padding: "0",
                                        border: "1px solid #ccc",
                                        borderRadius: "5px",
                                        backgroundColor: "#black",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                        maxHeight: "200px",
                                        overflowY: "auto",
                                    }}>
                                        {filteredMateri.map((materi) => (
                                             <li 
                                             key={materi.id}
                                             onClick={() => handleNavigate(materi.url)}
                                             style={{
                                                 padding: "10px 15px",
                                                 cursor: "pointer",
                                                 transition: "background-color 0.3s ease",
                                                 fontSize: "16px",
                                             }}
                                             onMouseEnter={(e) => 
                                                 (e.target.style.backgroundColor = "#red")
                                             }
                                             onMouseLeave={(e) => 
                                                 (e.target.style.backgroundColor = "#blue")
                                             }
                                             >
                                                 {materi.title}
                                             </li>
                                        ))}
                                    </ul>
                                ): (
                                    searchQuery && (
                                        <p style={{
                                            color: "#666",
                                            fontStyle: "italic",
                                            fontSize: "14px",
                                        }}>Tidak ditemukan.</p>
                                    )
                                )}
                            </div>
                            <button onClick={() => navigate ('/menubook')} className="cta-button">Mulai Belajar </button>
                        </div>
                    </div>
                </div>
                <div className="hero-image"></div>
            </section>
        </div>
    );
};

export default ComponentName;
