import { DotFilledIcon } from '@radix-ui/react-icons';
import { Flex, Text, Spinner } from '@radix-ui/themes';

function Tasks() {
  return (
    <Flex width="100%" direction="column">
      <Flex width="100%" className="items-center">
        <DotFilledIcon></DotFilledIcon>
        <Text>Task Number 1</Text>
      </Flex>
      <Flex width="100%" className="items-center">
        <Spinner />
        <Text>Task Number 1</Text>
      </Flex>
    </Flex>
  );
}

export default Tasks;
