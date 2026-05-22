import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied',
      color:'royalblue'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color:'lightseagreen',
      tag: 'Underserved'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661774476832-4a45f319584c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
        color:'orange',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
        color:'pink',
      tag: 'supervisor'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
        color:'black',
      tag: 'Average'
    }

  ]
  return (
    <div>
      <Section1 users={users}/>

      {/* yahn section 1 me data bhej rhe h app se kyuki top se data down aaat ah fir vahn se page1 content me jaega fir rightcontent me fir end me right card or then righcard content file me or data recieve krengeprops ka use krke */}



      <Section2 />



    </div>
  )
}

export default App

