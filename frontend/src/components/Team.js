const members = [
  {
    name: "Stephen Drake",
    role: "Approximate arithmetic",
    bio: "Works on approximate arithmetic designs to cut logic usage and improve efficiency, while keeping the ML error low.",
  },
  {
    name: "Michaiah Williams",
    role: "FPGA HDL implementation",
    bio: "Implements the exact and approximate multipliers and accelerator logic on the Nexys A7 in modular HDL.",
  },
  {
    name: "Ahmad Daadaa",
    role: "Front-end & back-end development",
    bio: "Worked with the team on front-end and back-end development for the project interface and host path. Also used an Artix-7 board with ESP32 during early communication and feature-classification testing.",
  },
  {
    name: "Colin Harpe",
    role: "ML model & HLS support",
    bio: "Looks after model evaluation / selection for FPGA inference and supports HLS investigation and implementation work.",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function Team() {
  return (
    <section id="team" className="section">
      <div className="section-head">
        <h2>Team</h2>
        <p className="section-lead">
          ECE 499 Group 3 · Supervisor: Dr. Mihai Sima
        </p>
      </div>

      <div className="team-photo-wrap">
        <img
          className="team-photo"
          src={process.env.PUBLIC_URL + "/team.jpg"}
          alt="ECE 499 Group 3 team photo"
        />
        <p className="team-photo-caption">
          Group 3 — Stephen Drake, Michaiah Williams, Ahmad Daadaa, Colin Harpe
        </p>
      </div>

      <div className="card-grid team-grid">
        {members.map((person) => (
          <article key={person.name} className="card team-card">
            <div className="avatar">{getInitials(person.name)}</div>
            <h3>{person.name}</h3>
            <p className="role">{person.role}</p>
            <p>{person.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
