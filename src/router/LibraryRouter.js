import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {About} from '../pages/About';
import { Catalog } from "../pages/Catalog";
import { Home } from "../pages/Home";
import { Management } from "../pages/Management";
import {NotFound} from "../pages/NotFound";
import { Store } from "../pages/Store";

export const LibraryRouter = () => {
    return (
      //<BrowserRouter>
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/management" element={<Management/>}/>
        <Route path="/store/:bookid" element={<Store/>}/>
        <Route path="/notfound" element={<NotFound/>} />
       
      </Routes>
    //</BrowserRouter>
  );
};