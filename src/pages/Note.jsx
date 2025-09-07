import React,{useEffect , useState} from 'react'
import "../styles/note.css";
import Helmet from '../components/Helmet/Helmet';

const Notlar = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  // LocalStorage'dan verileri yükle (ilk render)
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // notes değiştikçe localStorage’a kaydet
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Düzenleme
      const updated = [...notes];
      updated[editIndex] = formData;
      setNotes(updated);
      setEditIndex(null);
    } else {
      // Yeni ekleme
      setNotes([...notes, formData]);
    }
    setFormData({ title: "", description: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(notes[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const selectedNote = notes[index];
    if (
      window.confirm(
        `"${selectedNote.title}" notunu silmek istediğine emin misin?`
      )
    ) {
      const updated = notes.filter((_, i) => i !== index);
      setNotes(updated);
    }
  };

  return (
    <div className="notlar-container">
        <Helmet title="Notlar"/>
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
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
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
          <button type="submit" className="save-btn">
            {editIndex !== null ? "Güncelle" : "Kaydet"}
          </button>
        </form>
      )}

      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
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

export default Notlar;