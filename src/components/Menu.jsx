import { Flex, Badge } from '@radix-ui/themes';

function Menu() {
  return (
    <Flex width="100%" align="center" className="mb-[15px] items-center">
      <Badge size="1" variant="surface" color="indigo" className="cursor-pointer mr-[15px]">Start Task</Badge>
      <Badge size="1" variant="surface" color="crimson" className="cursor-pointer mr-[15px]">Stop Task</Badge>
      <Badge size="1" variant="surface" color="indigo" className="cursor-pointer mr-[15px]">Accept Changes</Badge>
      <Badge size="1" variant="surface" color="crimson" className="cursor-pointer mr-[15px]">Reject Changes</Badge>
      <div className="grow"></div>
      <Badge size="1" variant="surface" color="indigo" className="cursor-pointer">New Task</Badge>
    </Flex>
  );
}

export default Menu;
