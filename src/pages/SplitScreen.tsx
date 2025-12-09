import LeftScreen from '../components/splitScreen/LeftScreen'
import RightScreen from '../components/splitScreen/RightScreen'
import SplitScreen from '../components/splitScreen/SplitScreen'

const SplitScreenPage = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftScreen title="Left" />
      <RightScreen title="Right" />
    </SplitScreen>
  )
}

export default SplitScreenPage