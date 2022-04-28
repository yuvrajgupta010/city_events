import { getEventById } from "../../helpers/api-util";
import EventSummary from "../../components/EventDetail/EventSummary";
import EventContent from "../../components/EventDetail/EventContent";
import EventLogistics from "../../components/EventDetail/EventLogistics";
import { getFeaturedEvents } from "../../helpers/api-util";
import Head from "next/head";

const EventDetailPage = (props) => {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <h1>Loading...</h1>;
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
