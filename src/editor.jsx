import React from 'react';
// import { render } from 'react-dom';
// import MonacoEditor from 'react-monaco-editor';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";


function SQLEditor() {
  // BuiltinTheme: "vs" | "vs-dark" | "hc-black" | "hc-light"
  return (
    <Editor
      theme = 'vs'
      height="100vh"
      autoLayout = "true"
      defaultLanguage="sql"
      defaultValue="select * from alert where 1=1 order by created_at desc"
    />
   );
 }

export default SQLEditor;