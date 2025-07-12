import { useEffect, useRef } from 'react';
import { Flex } from '@radix-ui/themes'
import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Log from './components/Log';
import Directory from './components/Directory';
import Menu from './components/Menu';
import Tokens from './components/Tokens';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const resize = () => {
      const height = containerRef.current?.scrollHeight ?? 0;
      window.electronAPI?.setHeight(height + 30 + 2);
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
    <Flex className="mx-[10px]" direction="column" align="center" ref={containerRef}>
      <Input></Input>
      <Directory></Directory>
      <Tasks></Tasks>
      <Menu></Menu>
      <Log></Log>
      <Tokens></Tokens>
    </Flex>
  )
}

export default App
