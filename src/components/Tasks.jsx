import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons';
import { Flex, Text, Spinner } from '@radix-ui/themes';

function Tasks() {
  return (
    <Flex width="100%" direction="column" className="mb-[10px]">
      <Flex width="100%" className="items-center mb-[5px]">
        <CheckIcon></CheckIcon>
        <Text size="2" weight="bold">Create new folder called "Archive"</Text>
      </Flex>
      <Flex width="100%" className="items-center mb-[5px]">
        <Spinner size="1" />
        <Text size="2" weight="bold" className="pl-[3px]">Move files from Documents into Archive</Text>
      </Flex>
      <Flex width="100%" className="items-center mb-[5px]">
        <DotFilledIcon></DotFilledIcon>
        <Text size="2" weight="bold" className="pl-[3px]">Lock Archive Folder</Text>
      </Flex>
    </Flex>
  );
}

export default Tasks;
