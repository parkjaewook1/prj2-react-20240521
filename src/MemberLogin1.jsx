import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function MemberLogin1() {
  return (
    <Box>
      <Box>로그인</Box>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>이메일</FormLabel>
            <Input />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>이메일2</FormLabel>
            <Input />
          </FormControl>
        </Box>
        <Box>
          <Button colorScheme={"blue"}>로그인</Button>
        </Box>
      </Box>
    </Box>
  );
}
