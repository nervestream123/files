import { Flex, Badge, Text, Checkbox } from '@radix-ui/themes';

function Directory() {
  return (
    <Flex width="100%" align="center" className="mb-[15px] items-center">
      <Badge size="1" variant="surface" className="cursor-pointer mr-[15px]">Select Directory</Badge>
      <Text as="label" size="1">
        <Flex gap="2">
          <Checkbox size="1" defaultChecked />
          Snapshot
        </Flex>
      </Text>

    </Flex>
  );
}

export default Directory;
