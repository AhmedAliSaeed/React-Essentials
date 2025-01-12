import CoreConcepts from "./Components/CoreConcepts/CoreConcepts";
import Header from "./Components/Header/Header";
import TabButtons from "./Components/TabButtons/TabButtons";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handelSelect(selectedButtons) {
    setSelectedTopic(selectedButtons);
  }
  return (
    <>
      <Header />
      <main>
        <div className="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreItem) => (
              <CoreConcepts key={coreItem.title} {...coreItem} />
            ))}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            Destructuring Data if they have the same name
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </div>
        <div className="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              onSelected={() => handelSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButtons>
            <TabButtons
              onSelected={() => handelSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TabButtons>
            <TabButtons
              onSelected={() => handelSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TabButtons>
            <TabButtons
              onSelected={() => handelSelect("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TabButtons>
          </menu>

          {selectedTopic ? (
            <div className="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
