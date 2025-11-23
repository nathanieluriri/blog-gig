"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

interface IBlockNoteRendererProp {
  content: any;
}

const BlockNoteRenderer: React.FC<IBlockNoteRendererProp> = ({ content }) => {
  const editor = useCreateBlockNote({
    initialContent: content,
  });

  return <BlockNoteView editor={editor} editable={false} />;
};

export default BlockNoteRenderer;
