import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

type BlockData = { blockHash: string, height: string, timestamp: { time: string } }

interface BlockProps {
  data: BlockData,
  onSelect: (hash: string) => void
}

interface BlockListProps {
  blockData: Array<BlockData>,
  onBlockHashSelected: (hash: string) => void
}

const Block = ({ data, onSelect }: BlockProps) => {
  const { blockHash, height, timestamp } = data

  return (
    <TouchableOpacity style={styles.block} onPress={() => onSelect(blockHash)}>
      <Text style={styles.blockSectionTitle}>Hash</Text>
      <Text>{blockHash}</Text>
      <View style={styles.blockSectionHorizontal}>
        <View style={styles.blockSectionView}>
          <View style={styles.growHorizontally}>
            <Text style={styles.blockSectionTitle}>Height</Text>
            <Text>{height}</Text>
          </View>
        </View>
        <View style={styles.blockSectionView}>
          <View style={styles.growHorizontally}>
            <Text style={styles.blockSectionTitle}>Time</Text>
            <Text>{timestamp.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const BlockList = ({ blockData, onBlockHashSelected }: BlockListProps) => (
  <>
    {blockData.map((data) => (
      <Block key={data.blockHash} data={data} onSelect={(hash) => onBlockHashSelected(hash)} />
    ))}
  </>
)