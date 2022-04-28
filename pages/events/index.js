import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/Events/EventList";
import EventsSearch from "../../components/Events/EventsSearch";
import { useRouter } from "next/router";
import Head from "next/head";

const AllEventsPage = (props) => {
  const { events } = props;
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evlove..." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
