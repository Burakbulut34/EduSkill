import React, { useEffect, useState } from "react";
import "../styles/note.css";
import Helmet from "../components/Helmet/Helmet";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  // LocalStorage'dan yükle
  useEffect(() => {
    try {
      const storedNotes = localStorage.getItem("notes");
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error("LocalStorage okuma hatası:", error);
    }
  }, []);

  // LocalStorage'a kaydet
  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.error("LocalStorage yazma hatası:", error);
    }
  }, [notes]);

  // Dosya seçildiğinde Base64'e çevir
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result }); // Base64 kaydediliyor
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const formattedTime = now.toLocaleString("tr-TR", {
      dateStyle: "short",
      timeStyle: "short",
    });

    if (editIndex !== null) {
      const updated = [...notes];
      updated[editIndex] = {
        ...formData,
        time: notes[editIndex].time, // zamanı koru
      };
      setNotes(updated);
      setEditIndex(null);
    } else {
      const newNote = { ...formData, time: formattedTime };
      setNotes([...notes, newNote]);
    }

    setFormData({ title: "", description: "", image: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(notes[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    if (window.confirm(`"${notes[index].title}" notunu silmek istediğine emin misin?`)) {
      setNotes(notes.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="notlar-container">
      <Helmet title="Notlar" />
      <h2>📝 Notlarım</h2>

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Formu Kapat" : "Not Ekle"}
      </button>

      {showForm && (
        <form className="note-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="İşin Adı"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Açıklama"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>

          {/* URL ile resim ekleme */}
          <input
            type="url"
            placeholder="Resim URL (isteğe bağlı)"
            value={formData.image.startsWith("data:") ? "" : formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />

          {/* Dosya ile resim ekleme */}

          <button type="submit" className="save-btn">
            {editIndex !== null ? "Güncelle" : "Kaydet"}
          </button>
        </form>
      )}

      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note-card">
            {note.image && (
              <div className="note-image">
                <img src={note.image} alt={note.title} />
              </div>
            )}
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <small className="note-date">{note.time}</small>
            <div className="note-actions">
              <button className="edit-btn" onClick={() => handleEdit(index)}>
                Düzenle
              </button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
