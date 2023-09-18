import { notFound } from "next/navigation";
import TicketData from "../../_data/db.json";

export async function generateStaticParams() {
  const tickets = TicketData.tickets;
  return tickets.map((ticket) => ({ id: ticket.id }));
}

const getTickets = async (id) => {
  const res = TicketData.tickets.filter((ticket) => ticket.id === id);

  if (res === []) {
    notFound();
  }

  return res[0];
};
export default async function TicketDetaials({ params }) {
  const ticket = await getTickets(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
