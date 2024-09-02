import { getDateTime, getFormattedDate } from "@/app/lib/formatDate";

type Props = {
  date: string;
};

const PublishTime = ({ date }: Props) => {
  const pubDate = getFormattedDate(date);
  const dateTime = getDateTime(date);
  return (
    <>
      <span className="text-sm">Published on: </span>
      <time dateTime={dateTime} className="text-sm font-light">
        {pubDate}
      </time>
    </>
  );
};

export default PublishTime;
