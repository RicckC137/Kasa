import Section from "../../components/Section/section";
import List from "../../components/List/list";
import { engagements } from "../../datas/engagements";

function About() {
  return (
    <div className="List-Ajustment">
      <Section />
      <div className="List">
        {engagements.map(({ title, content }) => (
          <List title={title} content={content} key={title + content} />
        ))}
      </div>
    </div>
  );
}

export default About;
