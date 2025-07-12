import { useEffect, useRef } from 'react';
import { Flex } from '@radix-ui/themes'
import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const resize = () => {
      const height = containerRef.current?.scrollHeight ?? 0;
      window.electronAPI?.setHeight(height + 30);
    };

    // Initial resize
    resize();

    // Observe DOM changes
    const observer = new ResizeObserver(resize);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <Flex direction="column" align="center" ref={containerRef}>
      <Input></Input>
      <Tasks></Tasks>
    </Flex>
  )
}

export default App
