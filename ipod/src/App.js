import "./App.css";
import { FaFastForward, FaFastBackward } from "react-icons/fa";
import { PiPlayPauseFill } from "react-icons/pi";
import {IoMdArrowForward} from "react-icons/io";
import { useState,useEffect } from "react";
import settings from './images/settings.png';
import games from './images/games.jpg';
import coverpage from './images/coverpage.jpg';
import orange from './images/Orange_Movie.jpg';
import movie96 from './images/96Movie.jpg';
import aravindhaSametha from './images/aravinda-sametha-veera-raghava.jpg';
import bhadra from './images/Bhadra.jpg';
import tholiprema from './images/tholiprema.jpg';
import ReactAudioPlayer from 'react-audio-player';
import Allasanivari from './songs/allasanivari.mp3';

const AudioPlayer = ({ src }) => {
  return (
    <div>
      <ReactAudioPlayer
        src={src}
        autoPlay={false}
        controls
        style={{backgroundColor:'red'}}
      />
    </div>
  );
};

const MenuItem = ({ label,selectedOption }) => {

  const lowerLabel = label.toLowerCase();
  return (
    <div style={{fontSize:'20px',fontWeight:'500px',padding:'20px',display:'flex',justifyContent:'space-between',backgroundColor:lowerLabel === selectedOption ? 'skyblue' : 'white',color:lowerLabel === selectedOption ? 'white' : 'black'}}>
    <div>
      {label}
    </div>
    <div><IoMdArrowForward style={{color:'white'}}/></div>
    </div>
  );
};

// const SubMenu = ({ options }) => {
//   return (
//     <div className="sub-menu">
//       {options.map((option, index) => (
//         <div className="sub-menu-option" key={index}>
//           {option}
//         </div>
//       ))}
//     </div>
//   );
// };

const Settings = () => {
  return <div style={{width: "100%",height: "100%",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
         <img src={settings} alt={"Settings"} style={{backgroundColor:'white',color:'black',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',width: "50%",height: "50%"}}></img>
         <h2>Settings</h2>
         </div>
};

const Games = () => {
  return <div style={{width: "100%",height: "100%",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
         <img src={games} alt={"games"} style={{backgroundColor:'white',color:'black',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',width: "50%",height: "50%"}}></img>
         <h2>Games</h2>
         </div>
}

const CoverPage = () => {
  return <div style={{width: "100%",height: "100%",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
         <img src={coverpage} alt={"coverPage"} style={{backgroundColor:'white',color:'black',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',width: "60%",height: "60%",borderRadius:'30px'}}></img>
         </div>
};


//list of songs component
const AllSongs = () => {
   const AllSongsList = [{id:'1',songName:'Nenu Nuvvantu',movieName:'Orange',movieImage:orange},{id:'2',songName:'Tirumala vasa',movieName:'bhadra',movieImage:bhadra},{id:'3',songName:'reddy ikka chudu',movieName:'AravindhaSameethaVeeraRagava',movieImage:aravindhaSametha},{id:'4',songName:'na ventapadi nuventha ontari',movieName:'96',movieImage:movie96}];
   return <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',overflow:'scroll'}}>
          {AllSongsList.map((song,index)=>
          <div style={{display:'flex',flexDirection:'row',border:'2px solid skyblue',borderRadius:song.id === '1'? '10px 10px 0px 0px' : song.id === '4' ? '0px 0px 10px 10px' :'',margin:'3px'}} key={index}>
            <div><img src={song.movieImage} style={{width:'100px',height:'120px',borderRadius:song.id === '1'? '10px 10px 0px 0px' : song.id === '4' ? '0px 0px 10px 10px' :''}}></img></div>
            <div style={{flex:1}}>
              <p>SongName:{song.songName}</p>
              <p>MovieName:{song.movieName}</p>
            </div>
          </div>)}
         </div>
}; 

//list of artists component
const Artists = () => {
   const artists = ["sid sriram","Anurag Kulkarni","shreya ghoshal","A.R.Rahman","Harris Jayraj","Anirudh Ravichander"];
   return <div style={{display:'flex',flexDirection:'column',width:'100',height:'100%',overflow:'scroll',justifyContent:"center",alignItems:"center"}}>
          {artists.map((artist,index)=><div style={{padding:'10px',border:'1px solid skyblue',width:"100%",textAlign:"center"}} key={index}>{artist}</div>)}
          </div>
};

//song album component
const Album = () => {
   return <div style={{display:"flex",flexDirection:"column",height:'100%'}}>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'80%'}}>
            <div style={{padding:'10px'}}><img src={tholiprema} style={{width:"100%",height:"80%"}}></img></div>
               <div style={{width:'100%'}}>
                   <p>Movie:Tholi Prema</p>
                   <p>Music Director: Thaman.S</p>
               </div>
          </div>
          {/* <div style={{width:'90%',height:"10px",margin:'0px 15px 0px 15px',display:'flex',flexDirection:'row',border:'1px solid red'}}> */}
            {/* <div style={{backgroundColor:'white',width:'30%',height:'100%'}}>

            </div>
            <div style={{backgroundColor:'grey',width:'100%',height:'100%',flex:1}}>

            </div> */}
          {/* </div> */}
          {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'0px 15px 0px 15px'}}>
            <div>0.00</div>
            <div>3.92</div>
          </div> */}
          <center><AudioPlayer src={Allasanivari}/></center>
          </div>
};

const Music = (props) => {
  // Define menu options
  const musicOptions = [
    { label: "All Songs", screen: "all songs" },
    { label: "Artists", screen: "artists" },
    { label: "Albums", screen: "albums" }
  ];

  return <div style={{width: "100%",height: "100%",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
         <DisplayComponent displayMainMenu={true} menuOptions ={musicOptions} title={'Music'} selectedOption={props.selectedMusicOption} />
         </div>
};

const DisplayComponent = (props) => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          borderRadius: "30px",
        }}
      >
        {props.displayMainMenu && (
          <div style={{ width: "50%", height:'100%',backgroundColor: "white",borderRadius:'30px 0px 0px 30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <center>
              <span style={{ fontWeight: "bold",fontSize:'25px'}}>{props.title}</span>
            </center>
            {props.menuOptions.map((options, key) => (
              <MenuItem label={options.label} selectedOption={props.selectedOption} key={key}/>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default function App() {

  // Define menu options
  const menuOptions = [
    { label: "Settings", screen: "settings" },
    { label: "Games", screen: "games" },
    { label: "Music", screen: "music" },
    {label:"CoverPage",screen:"coverpage"}
  ];

  // State to manage whether to render mainmenu or not
  const [displayMainMenu, setDisplayMainMenu] = useState(false);

  //state to manage dragging on main menu
  const [isDragging, setIsDragging] = useState(false);

  //state to manage angle by which circular menu button is dragged
  const [angle, setAngle] = useState('');

  //state to decide which option is selected based on mouse movement angle
  const [selectedOption,setSelectedOption] = useState('');

  //state to decide opening and closing of menu option items
  const [openFirstLevelSelectedOption,setOpenFirstLevelSelectedOption] = useState(false);

  //state to decide open and closing of music menu option items
  const [openMusicSelectedOption,setOpenMusicSelectedOption] = useState(false);

  //state to decide the selected menu option in music Menu
  const [selectedMusicOption,setSelectedMusicOption] = useState('');

  const handleCenterButtonClick = () => {
    
    console.log(isDragging,angle,selectedOption,displayMainMenu);

    if(openFirstLevelSelectedOption && !isDragging && angle && selectedOption === 'music' && displayMainMenu)
    {
      setOpenMusicSelectedOption(true);
    }

    //just for displaying the main menu
     if(!isDragging && !angle && !selectedOption )
     {
       setDisplayMainMenu(true);
     }

     if(!isDragging && angle && selectedOption && displayMainMenu)
     {
       setOpenFirstLevelSelectedOption(true);
     }

     
      
  };

  const handleMenuClick = () => {
     if(openFirstLevelSelectedOption && displayMainMenu && selectedMusicOption && openMusicSelectedOption)
     {
       setOpenMusicSelectedOption(false);
     }
     else if(openFirstLevelSelectedOption && displayMainMenu)
     {
       setSelectedMusicOption('');
       setOpenFirstLevelSelectedOption(false);
     }
     else if(displayMainMenu)
     {
      setDisplayMainMenu(false);
      setAngle('');
      setSelectedOption('');
     }
  };

  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  useEffect(() => {
    console.log("<--- debug inside useEffect--->",angle);
    if (!openFirstLevelSelectedOption && angle && ((0<=angle && angle<=22.5) || (90<=angle && angle<=112.5) || (180<=angle && angle<=202.5) || (270<=angle && angle<=292.5)))
    {
      console.log("inside setting");
      setSelectedOption('settings');
    }
    if(!openFirstLevelSelectedOption && angle && ((22.5<angle && angle<=45) || (112.5<angle && angle<=135) || (202.5<angle && angle<=225) || (292.5<angle && angle<=315)))
    {
      console.log("inside games");
      setSelectedOption('games');
    }
    if(!openFirstLevelSelectedOption && angle && ((45<angle && angle<=67.5) || (135<angle && angle<=157.5) || (225<angle && angle<=247.5) || (315<angle && angle<=337.5)))
    {
      console.log("inside music");
      setSelectedOption('music');
    }
    if(!openFirstLevelSelectedOption && angle && ((67.5<angle && angle<=90) || (157.5<angle && angle<=180) || (247.5<angle && angle<=270) || (337.5<angle && angle<=360)))
    {
      console.log("inside coverpage");
      setSelectedOption('coverpage');
    }
    if(openFirstLevelSelectedOption && selectedOption === 'music' && !openMusicSelectedOption)
    {
       if((0<=angle && angle<=30) || (91<=angle && angle<=120) || (181<=angle && angle<=210) || (271<=angle && angle<=300))
       {
        setSelectedMusicOption("all songs");
       }

       if((31<=angle && angle<=60) || (121<=angle && angle<=150) || (211<=angle && angle<=240) || (301<=angle && angle<=330))
       {
        setSelectedMusicOption("artists");
       }

       if((61<=angle && angle<=90) || (151<=angle && angle<=180) || (241<=angle && angle<=270) || (331<=angle && angle<=360))
       {
        setSelectedMusicOption("albums");
       }
    }
    console.log("inside use effect",selectedOption,selectedMusicOption);
  }, [angle]);
  

  const handleMouseDown = (e) => {
    console.log("inside mouse down");
    e.preventDefault();

    //only if mainmenu is displaying we are setting dragging to true
    displayMainMenu && setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    console.log("inside mouse move",isDragging);
    if (isDragging) {
      console.log("inside mouse move inside isDragging");
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const newAngle = Math.atan2(y, x) * (180 / Math.PI) + 90;
      setAngle(newAngle < 0 ? newAngle + 360 : newAngle);
      if(angle)
      {
        console.log("inside handleMouseMove",angle);
      }
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        height: "700px",
        margin: "auto",
        borderRadius: "1.5rem",
        backgroundColor: "#EDE8E8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          margin: "1rem 0.5rem 0.5rem 0.5rem",
          backgroundColor: "white",
          borderRadius: "2rem",
          height: "50%",
          width: "90%",
        }}
      >
        {!openFirstLevelSelectedOption && <DisplayComponent menuOptions={menuOptions} displayMainMenu={displayMainMenu} selectedOption={selectedOption} title={'Main Menu'}/>}
        {openFirstLevelSelectedOption  && selectedOption === 'games' && <Games />}
        {openFirstLevelSelectedOption  && selectedOption === 'settings' && <Settings />}
        {openFirstLevelSelectedOption && selectedOption === 'coverpage' && <CoverPage />}
        {openFirstLevelSelectedOption && !openMusicSelectedOption && selectedOption === 'music' && <Music selectedOption={selectedOption} selectedMusicOption={selectedMusicOption}/>}
        {openFirstLevelSelectedOption && openMusicSelectedOption && selectedMusicOption === 'all songs' && <AllSongs />}
        {openFirstLevelSelectedOption && openMusicSelectedOption && selectedMusicOption === 'albums' && <Album />}
        {openFirstLevelSelectedOption && openMusicSelectedOption && selectedMusicOption === 'artists' && <Artists />}
      </div>
      <div
        style={{
          border: "1px solid black",
          position: "relative",
          height: "50%",
          borderRadius: "50%",
          width: "80%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "25%",
            width: "25%",
            borderRadius: "50%",
            position: "absolute",
            top: "0px",
            color: "#C2B5B5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            cursor:'pointer'
          }}

          onClick={()=>handleMenuClick()}
        >
          MENU
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "25%",
            width: "25%",
            borderRadius: "50%",
            position: "absolute",
            left: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:'pointer'
          }}
        >
          <FaFastBackward
            style={{ color: "#C2B5B5", width: "30px", height: "30px" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: "37%",
            height: "35%",
            backgroundColor: "#C2B5B5",
            borderRadius: "50%",
            zIndex: "2",
            transform: `rotate(${angle}deg)`,
            borderTop:'2px solid red',
            borderRight:'2px solid green',
            borderLeft:'2px solid yellow',
            borderBottom:'2px solid orange',
            cursor:'pointer'
          }}
          onClick={() => handleCenterButtonClick()}
        ></div>
        <div
          style={{
            backgroundColor: "white",
            height: "25%",
            width: "25%",
            borderRadius: "50%",
            position: "absolute",
            right: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:'pointer'
          }}
        >
          <FaFastForward
            style={{ color: "#C2B5B5", width: "30px", height: "30px" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "25%",
            width: "25%",
            borderRadius: "50%",
            position: "absolute",
            bottom: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:'pointer'
          }}
        >
          <PiPlayPauseFill
            style={{ color: "#C2B5B5", width: "40px", height: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}
