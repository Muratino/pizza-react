import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={281}
    height={500}
    viewBox="0 0 281 500"
    backgroundColor="#e1dfdf"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="0" y="277" rx="7" ry="7" width="280" height="15" /> 
    <rect x="315" y="378" rx="0" ry="0" width="265" height="118" /> 
    <rect x="0" y="307" rx="7" ry="7" width="280" height="88" /> 
    <rect x="0" y="409" rx="7" ry="7" width="123" height="30" /> 
    <rect x="156" y="409" rx="7" ry="7" width="123" height="30" />
  </ContentLoader>
)

export default Skeleton