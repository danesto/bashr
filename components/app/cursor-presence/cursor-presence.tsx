"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useMemo, useState } from "react";

type CursorPresenceProps = {
  bashId: number;
};

type CursorPosition = {
  x: number;
  y: number;
};

function CursorPresence({ bashId }: CursorPresenceProps) {
  const sb = useMemo(() => createClient(), []);
  //   const channel = useMemo(() => sb.channel(`bash-${bashId}`), [bashId, sb]);

  //   useEffect(() => {
  //     // Handle a mouse event.
  //     const receivedCursorPosition = ({ event, payload }) => {
  //       console.log(`
  //           User: ${payload.userId}
  //           x Position: ${payload.x}
  //           y Position: ${payload.y}
  //       `);
  //     };

  //     channel
  //       .on("broadcast", { event: "cursor" }, (event) => {
  //         receivedCursorPosition(event);
  //       })
  //       .subscribe();
  //   }, [bashId, channel]);

  //   const sendMousePosition = (channel, userId, x, y) => {
  //     return channel.send({
  //       type: "broadcast",
  //       event: "cursor",
  //       payload: { userId, x, y },
  //     });
  //   };

  //   useEffect(() => {
  //     const handleMouseMove = (event: MouseEvent) => {
  //       sendMousePosition(channel, 1, event.clientX, event.clientY);
  //     };

  //     document.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       document.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, [channel]);

  return (
    <div className="dark:text-white">
      <h1>{bashId}</h1>
    </div>
  );
}

export { CursorPresence };
