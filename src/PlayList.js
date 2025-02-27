import React, { useCallback } from "react";

import "./PlayList.css";

import TrackList from "./TrackList";

const PlayList = ({ onNameChange, playlistTracks, onRemove, onSave }) => {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} 
      defaultValue="Enter Playlist Name" />
      <TrackList tracks={playlistTracks} 
      isRemoval={true} onRemove={onRemove} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO PLAYLIST
      </button>
    </div>
  );
};

export default PlayList;
