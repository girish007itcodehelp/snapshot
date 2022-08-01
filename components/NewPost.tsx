import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import CodeEditor from "./CodeEditor";
import NewPostByTabs from "./NewPostByTabs";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const NewPost: React.FC<Props> = ({ isOpen, onClose }) => {
  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <Modal size="xl" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody height="600px">
          {/* <CodeEditor /> */}
          <NewPostByTabs />
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewPost;
