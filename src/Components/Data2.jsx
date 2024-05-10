import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
const Data2 = () => {
  return (
    <div>

<CircularProgressbarWithChildren value={66}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong>66%</strong> mate
  </div>
</CircularProgressbarWithChildren>;;
    </div>
  )
}

export default Data2