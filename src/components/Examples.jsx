import { EXAMPLES } from "../data";
import { useState } from 'react';
import TabButton from './TabButton';
import Tabs from './Tabs'; // Changed import from Section to Tabs
import Section from './Section';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelect = (topic) => setSelectedTopic(topic) ;

  const tabButtons = [
    <TabButton 
      key="components" 
      onClick={() => handleSelect('components')} 
      isSelected={selectedTopic === 'components'}
    >
      Components
    </TabButton>,
    <TabButton 
      key="jsx" 
      onClick={() => handleSelect('jsx')} 
      isSelected={selectedTopic === 'jsx'}
    >
      JSX
    </TabButton>,
    <TabButton 
      key="props" 
      onClick={() => handleSelect('props')} 
      isSelected={selectedTopic === 'props'}
    >
      Props
    </TabButton>,
    <TabButton 
      key="state" 
      onClick={() => handleSelect('state')} 
      isSelected={selectedTopic === 'state'}
    >
      State
    </TabButton>
  ];

  let tabContent;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  } else {
    tabContent = <p>Choose a topic to view examples.</p>;
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={tabButtons} buttonContainer='menu'>
        {tabContent}
      </Tabs>
    </Section>
  );
}