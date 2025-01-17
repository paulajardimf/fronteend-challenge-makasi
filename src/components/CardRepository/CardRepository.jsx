import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { AiOutlineStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { CardRepositorySyled } from "./styled";

export default function CardRepository({ repository }) {
  const distanceInWords = formatDistanceToNow(new Date(repository.updated_at), {
    addSuffix: true,
    locale: enUS,
  });
  const updatedText = `Updated ${distanceInWords}`;

  return (
    <>
      <CardRepositorySyled>
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          <h1>{repository.name}</h1>
        </a>
        <p>{repository.description}</p>
        <section className="container-info">
          <h4>
            <AiOutlineStar /> {repository.stargazers_count} stars
          </h4>
          <h4>
            <RxDotFilled size={"20px"} />
          </h4>
          <h4> {updatedText} </h4>
        </section>
        <hr />
      </CardRepositorySyled>
    </>
  );
}
