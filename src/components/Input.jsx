import { Flex, TextField, Button } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

function Input() {
  return (
    <Flex width="100%" className="mb-[15px]">
      <TextField.Root placeholder="Describe the task..." className="w-full">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Slot side="right">
          <Button id="submit-button" size="1" className="bg-[#3a0192] cursor-pointer">Submit</Button>
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
}

export default Input;
