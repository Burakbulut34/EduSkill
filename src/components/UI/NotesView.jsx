import Helmet from "../Helmet/Helmet";


import React, { useState, useEffect } from "react";

const NotesApp = ({withHelmet = false}) => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // notes değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Not ekle veya güncelle
  const saveNote = () => {
    if (title.trim() === "" || desc.trim() === "") return;

    if (editId) {
      // Güncelle
      setNotes(
        notes.map((n) =>
          n.id === editId ? { ...n, title, desc, imageUrl } : n
        )
      );
      setEditId(null);
    } else {
      // Yeni ekleme
      const newNote = {
        id: Date.now(),
        title,
        desc,
        imageUrl: imageUrl || null,
        date: new Date().toLocaleString(),
      };
      setNotes([...notes, newNote]);
    }

    // ✅ Formu temizle ve kapat
    setTitle("");
    setDesc("");
    setImageUrl("");
    setShowForm(false);
  };

  // deleteNote fonksiyonunu güncelle
const deleteNote = (id) => {
  const noteToDelete = notes.find(n => n.id === id);
  if (!noteToDelete) return;

  const confirmDelete = window.confirm(
    `📌 "${noteToDelete.title}" notunu silmek istediğinize emin misiniz?`
  );

  if (confirmDelete) {
    setNotes(notes.filter((n) => n.id !== id));
  }
};


  const editNote = (note) => {
    setTitle(note.title);
    setDesc(note.desc);
    setImageUrl(note.imageUrl || "");
    setEditId(note.id);
    setShowForm(true); // düzenleme için form açılır
  };

  return (
    <div style={styles.container}>
       {withHelmet && (<Helmet title="Notlar"/>)}
      <h1 style={styles.title}>📒 Notlarım</h1>

      {/* Not Ekle butonu */}
      {!showForm && (
       <center>
         <button onClick={() => setShowForm(true)} style={styles.addButton}>
          ➕ Not Ekle
        </button>
       </center>
      )}

      {/* Form */}
      {showForm && (
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Başlık"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder="Açıklama"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={styles.textarea}
          />
          <input
            type="text"
            placeholder="Resim URL (isteğe bağlı)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={styles.input}
          />
          <div style={styles.formButtons}>
            <button onClick={saveNote} style={styles.saveButton}>
              {editId ? "Güncelle" : "Oluştur"}
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setTitle("");
                setDesc("");
                setImageUrl("");
                setEditId(null);
              }}
              style={styles.cancelButton}
            >
              İptal
            </button>
          </div>
        </div>
      )}

      {/* Not listesi */}
      <ul style={styles.list}>
        {notes.map((note) => (
          <li key={note.id} style={styles.noteCard}>
            <div>
              <h3>{note.title}</h3>
              {note.imageUrl && (
                <img
                  src={note.imageUrl}
                  alt="Not görseli"
                  style={styles.image}
                  onError={(e) => (e.target.style.display = "none")}
                />
              )}
              <p>{note.desc}</p>
              <small>{note.date}</small>
            </div>
            <div>
              <button onClick={() => editNote(note)} style={styles.editButton}>
                ✏️
              </button>
              <button
                onClick={() => deleteNote(note.id)}
                style={styles.deleteButton}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Stil
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    background: "#f4f6f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  addButton: {
    padding: "10px 16px",
    left:"50px",
    border: "none",
    borderRadius: "6px",
    background: "rgb(34, 33, 33)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    padding: "15px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    minHeight: "80px",
  },
  formButtons: {
    display: "flex",
    gap: "10px",
  },
  saveButton: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#4caf50",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelButton: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#f44336",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  noteCard: {
    background: "#fff",
    padding: "15px",
    marginBottom: "12px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  image: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "6px",
    margin: "10px 0",
  },
  editButton: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    marginRight: "8px",
  },
  deleteButton: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "red",
  },
};

export default NotesApp;
