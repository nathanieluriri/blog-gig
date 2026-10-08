"use client";

import dynamic from "next/dynamic";

// BlockNote touches `window` while creating the editor, so it can only render in the browser.
const BlockNoteRenderer = dynamic(() => import("./blocknoterenderer"), { ssr: false });

export default BlockNoteRenderer;
