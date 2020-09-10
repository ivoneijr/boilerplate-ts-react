import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}))``

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
`

export const PageId = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`
