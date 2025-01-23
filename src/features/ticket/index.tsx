import s from "./index.module.css";
interface TicketProps {
  ticket: number[];
}

function Ticket({ ticket }: TicketProps) {
  return (
    <div className="grid gap-0 grid-cols-[repeat(9,1fr)] max-w-min">
      {ticket.map((number) => (
        <div
          className="size-10 border border-cyan-300 text-2xl flex items-center justify-center shadow-[0_0_5px] shadow-cyan-300"
          key={`${number}${Math.random()}`}
        >
          <span className={s.animateReveal}>{number || null}</span>
        </div>
      ))}
    </div>
  );
}

export { Ticket };
