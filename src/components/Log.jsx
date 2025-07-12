import { Flex, Text } from '@radix-ui/themes';

const logText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis pharetra pretium. Duis non ex tempor, rhoncus augue eget, iaculis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ac porta orci. Sed dapibus sem sed feugiat aliquam. Nulla enim nisi, congue sed feugiat in, iaculis id odio. Aliquam erat volutpat. Morbi consectetur porttitor lacinia. Phasellus pretium pulvinar ex. Suspendisse rhoncus, velit quis tempor tincidunt, eros mi tincidunt turpis, eget luctus magna magna elementum est.

Pellentesque volutpat, tortor in accumsan molestie, ligula nisi eleifend nibh, sed bibendum orci felis vitae lectus. Pellentesque placerat, nunc in porta tempus, libero lorem ultricies risus, at interdum sem magna et libero. Nulla vel eleifend turpis, vitae vestibulum nulla. Curabitur hendrerit elementum arcu, nec tempor ante feugiat eget. Praesent bibendum, ex in mollis mollis, erat nulla consequat ligula, in auctor lacus libero ut libero. In at pharetra justo. Donec faucibus odio at massa tempor rutrum. Nulla in ornare dui. Suspendisse ac imperdiet erat. Aliquam ac velit tortor. Mauris sed gravida ex, quis ultrices augue. Vestibulum nisi velit, tincidunt quis nisi a, ultrices vulputate enim. Cras quis lacus nulla. Aenean condimentum dapibus volutpat. Vestibulum sodales imperdiet ante, et tempus sem lacinia quis.
`;

function Log() {
  return (
    <Flex>
      <Flex id="log" width="100%" className="overflow-y-auto font-mono whitespace-pre-wrap">
        <Text as="div" size="1" align="left" className="w-full h-[150px] p-[10px]">
          {logText}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Log;
