/* GENERAL */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #ff758c, #ff7eb3);
  color: #fff;
  overflow-x: hidden;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

/* HERO */
.hero h1 {
  font-size: 3em;
  margin-bottom: 10px;
}

.hero .subtitle {
  font-size: 1.2em;
  margin-bottom: 20px;
  font-style: italic;
}

/* BUTTON */
button {
  background: #25d366;
  border: none;
  padding: 12px 25px;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  transition: background 0.3s;
}

button:hover {
  background: #128c7e;
}

/* GALLERY */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.gallery img {
  max-width: 250px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: contain;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0,0,0,0.5);
}

/* WISHES */
.wishes {
  width: 100%;
  overflow: hidden;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  padding: 15px 0;
  font-size: 1.3em;
  font-style: italic;
  position: relative;
}

#wishText {
  white-space: nowrap;
  display: inline-block;
  position: relative;
  left: 100%; /* Start offscreen right */
}

/* FOOTER */
footer {
  font-size: 0.9em;
  opacity: 0.8;
  margin-bottom: 20px;
}

/* FLOATING HEARTS */
.hearts::before {
  content: "❤️ ❤️ ❤️ ❤️ ❤️";
  position: fixed;
  top: -10%;
  width: 100%;
  text-align: center;
  animation: floatHearts 10s linear infinite;
  opacity: 0.3;
}

@keyframes floatHearts {
  from { top: 100%; }
  to { top: -20%; }
}

/* MOBILE */
@media (max-width: 600px) {
  .gallery img {
    max-width: 90%;
    margin-bottom: 10px;
  }
}
