import { useState } from "react";
import { Ticket } from "../features/ticket";
import { createTicket } from "../features/ticket/model/create-ticket";
import { RefreshButton } from "../features/refresh-button";

function TicketContainer() {
  const [ticket, setTicket] = useState(createTicket());

  function handleUpdateTicket() {
    const newTicket = createTicket();
    setTicket(newTicket);
  }

  return (
    <div className="flex flex-col items-center">
      <span className="!bg-cover !bg-clip-text !bg-center bg-gradient-to-r from-[#42d392] to-[#647eff] font-extrabold text-transparent text-4xl">
        CYBER LOTO
      </span>
      <div className="my-6">
        <Ticket ticket={ticket} />
      </div>

      <RefreshButton onClick={handleUpdateTicket} />
    </div>
  );
}

export { TicketContainer };
