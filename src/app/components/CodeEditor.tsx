"use client";

import Editor from "@monaco-editor/react";
import { useRef } from "react";

export type Language =
  | "html"
  | "css"
  | "javascript";

interface CodeEditorProps {
  // Значение и язык
  value: string;
  language: Language;
  onChange: (value: string) => void;

  // Стилизация через Tailwind
  className?: string;
  editorClassName?: string;

  // Настройки редактора
  height?: string | number;
  theme?: "light" | "vs-dark";
  readOnly?: boolean;

  // Возврат экземпляра редактора (для продвинутых фич)
  onMount?: (editor: any) => void;
}

export default function CodeEditor({
  value,
  language,
  onChange,
  className = "",
  editorClassName = "",
  height = "300px",
  theme = "vs-dark",
  readOnly = false,
  onMount,
}: CodeEditorProps) {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    onMount?.(editor);
  };

  return (
    <div className={`border rounded-lg overflow-hidden ${className}`}>
      <Editor
        height={height}
        language={language}
        value={value}
        onChange={(val) => onChange(val || "")}
        onMount={handleEditorDidMount}
        theme={theme}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          readOnly,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
        }}
        className={editorClassName}
      />
    </div>
  );
}
