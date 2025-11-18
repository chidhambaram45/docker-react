import React from "react";
import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Docker Hot Reload Test</h1>

      <p style={styles.text}>
        If hot reload is working, change this text → save the file → browser should update automatically.
      </p>

      <div style={styles.box}>
        <p>Edit: <code>src/App.js</code> and watch this screen updated LIVE.</p>
      </div>

      <footer style={styles.footer}>
        <strong>Current Time:</strong> {new Date().toLocaleTimeString()}
      </footer>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "20px",
  },
  box: {
    border: "2px dashed #999",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f7f7f7",
  },
  footer: {
    marginTop: "30px",
    fontSize: "14px",
    color: "#666",
  },
};

export default App;
