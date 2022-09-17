import { Editor, EditorState } from "draft-js";
import { useState } from "react";
import "./App.css";

function App() {
  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });

  return (
    <div className="App">
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default App;
