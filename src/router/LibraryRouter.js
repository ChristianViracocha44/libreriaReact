import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {About} from '../pages/About';
import { Catalog } from "../pages/Catalog";
import { Home } from "../pages/Home";
import {NotFound} from "../pages/NotFound";
import { Store } from "../pages/Store";

export const LibraryRouter = () => {
    return (

        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/store/:bookid" element={<Store/>}/>
        <Route path="/store/" element={<Store/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>

  );
};