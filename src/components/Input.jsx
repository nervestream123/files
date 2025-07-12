import { Flex, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

function Input() {
  return (
    <Flex width="100%" className="mb-[15px]">
      <TextField.Root placeholder="Describe the task..." className="w-full">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
}

export default Input;
