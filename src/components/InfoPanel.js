import React from 'react'

// Custom Hooks
import { useHover, useScreenOrientation, useScreenWidth, useScreenHeight } from "../hooks"

// MY  components
// import NewGameButton from '../components/buttons/NewGameButton'

// MUI  components
import { Box } from '@material-ui/core'
import { height, width } from '@material-ui/system'
import { Button } from "@material-ui/core";

// Icons
import ReplayIcon from "@material-ui/icons/Replay";

// Style & Layout Constants

export function InfoPanel(props) {
    const orientation = useScreenOrientation()
    const height = useScreenHeight()
    const width = useScreenWidth()
    let { moveList, gameStatus, handleNewGameClick, playMode, questionType } = props
    const [hoverRef, isHovered] = useHover();
    
    return (
        <Box id='info-panel' sx={{  }} >
            The Info Panel:  <br/>
            
            <p>Game Status: {gameStatus}</p>
            <p>Orientation: {orientation}</p>
            <p>Height: {height}</p>
            <p>Width: {width}</p>
            <p>Play Mode: {playMode}</p>
            <p>Question Type: {questionType}</p>
            {/* <NewGameButton 
                handleClick={handleNewGameClick}
            /> */}
        </Box>
    )
}



export default function NewGameButton(props) {
    let { handleClick } = props
    return (
        <Button
            variant="outlined"
            startIcon={<ReplayIcon />}
            onClick={() => handleClick()}
        >
            New&nbsp;Game
        </Button>
    )
}