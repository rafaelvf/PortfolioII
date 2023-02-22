import styles from "../styles/MusicPlayer.module.scss";
import ReactAudioPlayer from "react-audio-player";

export default function MusicPlayer() {
  return (
    <div className={styles.container}>
      <audio src="/Solsort.mp3" controls muted={true} autoPlay={true} />
      <ReactAudioPlayer
        src="/Solsort.mp3"
        loop={true}
        autoPlay={true}
        controls
      />
    </div>
  );
}
