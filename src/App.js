/* ------ Components ------ */
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

const App = () => {
  /* --------- Files -------- */
  const files = {
    "App.js": {
      code: ``,
    },
    "/components/Footer.js": {
      code: ``,
    },
  };

  return (
    <SandpackProvider
      files={files}
      theme="dark"
      template="react"
    >
      <SandpackLayout>
        <SandpackFileExplorer autoHiddenFiles />
        <SandpackCodeEditor />
        <SandpackPreview
          showOpenInCodeSandbox={false}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default App;
