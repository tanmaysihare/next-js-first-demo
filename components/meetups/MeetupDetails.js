import classes from '@/components/meetups/MeetupDetails.module.css';

function MeetupDetails(props) {
  return(
  <section className={classes.detail}>
    <img
      src={props.image}
     />
    <h1>{props.h1}</h1>
    <address>{props.address}</address>
    <p>{props.p}</p>
  </section>
  );
}

export default MeetupDetails;
