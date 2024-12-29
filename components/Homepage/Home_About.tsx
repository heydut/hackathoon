import Button from "../UI/Button";
import Tag from "../UI/Tag";

const stats = [
  {
    title: "On our waitlist ✨",
    count: "100+ hackers",
  },
  {
    title: "For the winners 🏆",
    count: "10+ prizes",
  },
  {
    title: "Choose your challenge 🖥️",
    count: "1-3 tracks",
  },
];

export default function Home_About() {
  return (
    <div className="bg-zinc-50">
      <div className="margin grid grid-cols-1 md:grid-cols-2 items-end">
        <section className="flex flex-col items-start gap-4">
          <Tag colour="purple" text="Get ready to code" link="/about" />
          <h2 className="text-zinc-900 mb-4 md:mb-8">
            Ready to{" "}
            <span className="header-gradient">
              challenge
              <br className="max-md:hidden" /> yourself
            </span>{" "}
            and grow <br className="max-md:hidden" />
            your skills?
          </h2>
          <Button
            colour="red"
            text="Find out more →"
            link="/about"
            size=""
            target=""
            style=""
          />
        </section>
        <section className="flex flex-col items-start gap-12 w-full max-md:mt-8">
          {" "}
          <p>
            Join the ultimate hackathon experience where fresh developers can
            sharpen their skills, collaborate on innovative projects, and unlock
            endless opportunities for growth.{" "}
            <span className="font-semibold text-zinc-600">
              Compete, learn, and become part of a community shaping the future
              of tech.
            </span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {stats.map((stat) => (
              <div key={stat.title} className="flex flex-col items-start">
                <p className="text-purple-600 text-2xl font-bold tracking-tight">
                  {stat.count}
                </p>
                <p className="">{stat.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
