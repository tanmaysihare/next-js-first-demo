import MeetupDetails from "@/components/meetups/MeetupDetails";

function MeetupDetail() {
  return(
  <MeetupDetails
    image="https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg"
    h1 = 'A first meetup'
    address ='some address'
    p= 'the meetup description'
  />
  );
}
export async function getStaticPaths(){
  return {
    fallback: false,
    paths:[
      {
        params:{meetupId: 'm1'}
      },
      {
        params:{meetupId: 'm2'}
      },
      {
        params:{meetupId: 'm3'}
      },
    ]
  }
}
export async function getStaticProps(context){
  const meetupId = context.params.meetupId;
  return{
    props:{
      meetupData:{
        image:"https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg",
        id: meetupId,
        h1 : 'A first ...meetup',
        address :'some ...address',
        p: 'the meetup ...description',
      }
    }
  }
}
export default MeetupDetail;
