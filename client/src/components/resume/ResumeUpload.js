import React, { useState, useRef } from 'react';
import './ResumeComponents.css';
import { FiUploadCloud } from 'react-icons/fi';

const ResumeUpload = ({ onFileSelect }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const inputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files[0];
    onFileSelect(file);
  };

  const handleFileClick = () => {
    inputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <div 
      className={`resume-upload-box ${isDraggingOver ? 'dragging-over' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleFileClick}
    >
      <input 
        type="file" 
        ref={inputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileInputChange}
        accept=".pdf"
      />
      <FiUploadCloud className="upload-icon" />
      <h3>Drag & Drop your Resume here</h3>
      <p>or</p>
      <button className="btn btn-primary">Click to Upload</button>
      <p className="upload-note">Only PDF files are accepted</p>
    </div>
  );
};

export default ResumeUpload;