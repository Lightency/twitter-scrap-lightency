import logo from './logo.svg';
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function App()  {
  return  <TwitterTimelineEmbed
  sourceType="profile"
  screenName="Lightencyio"
  options={{height: 200, width: 400}}
/>
}


export default App;
