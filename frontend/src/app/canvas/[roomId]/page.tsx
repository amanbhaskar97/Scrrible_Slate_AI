"use client"; // Ensure this is a client component

import { use, useEffect, useState } from "react";
import Drawing from "../../../components/canvaspage";

type Props = {
  params: Promise<{
    roomId: string;
  }>;
};

export default function CanvasPage({ params }: Props) {
 
  const { roomId } = use(params);
  const [fullUrl, setFullUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(window.location.href);
    }
  }, []);
  console.log(roomId)
  if (!roomId) return <p>Loading...</p>;
 

  return <Drawing roomId={roomId} />;
}