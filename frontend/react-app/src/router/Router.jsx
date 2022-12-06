import React from 'react'
import { Route, Routes} from "react-router-dom"

import Homepage from '../components/pages/Homepage'
import JudgePersonalitypage from '../components/pages/JudgePersonalitypage'

export default function Router() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Homepage />} />
      <Route path={'judge_personarity'} element={<JudgePersonalitypage/>} />
    </Routes>
  )
}
