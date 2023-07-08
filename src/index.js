import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import App from "./App";
import SongRequestPage from "./SongRequestPage";
import ViewSongRequestPage from "./ViewSongRequestPage";
import SuggestionRequestPage from "./SuggestionRequestPage";
import ViewSuggestionRequest from "./ViewSuggestionRequest";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/song-request" element={<SongRequestPage />} />
      <Route path="/view-song-request" element={<ViewSongRequestPage />} />
      <Route path="/suggestion-request" element={<SuggestionRequestPage />} />
      <Route path="/view-suggestion-request" element={<ViewSuggestionRequest />} />
    </Routes>
  </BrowserRouter>
);
