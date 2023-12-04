import { globalStyle, style } from '@vanilla-extract/css'

import {
  borderRadiusVars,
  fontSizeVars,
  fontWeightVars,
  primitiveColorVars,
  spaceVars,
  viewportVars,
} from '../styles/vars.css.js'

export const root = style({
  background: primitiveColorVars.background,
  borderRadius: borderRadiusVars[6],
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  height: 'min-content',
  left: '50%',
  margin: '64px auto',
  maxHeight: 'min(100vh - 128px, 900px)',
  padding: spaceVars[12],
  position: 'fixed',
  top: 0,
  transform: 'translate(-50%)',
  width: 'min(100vw - 60px, 900px)',

  '@media': {
    [viewportVars['max-720px']]: {
      borderRadius: 0,
      height: '100vh',
      margin: 0,
      maxHeight: 'none',
      width: '100vw',
    },
  },
})

export const searchBox = style(
  {
    alignItems: 'center',
    border: `1px solid ${primitiveColorVars.border}`,
    borderRadius: borderRadiusVars[4],
    display: 'flex',
    gap: spaceVars[8],
    paddingLeft: spaceVars[8],
    paddingRight: spaceVars[8],
    width: '100%',
    selectors: {
      '&:focus-within': {
        borderColor: primitiveColorVars.borderAccent,
      },
    },
  },
  'searchBox',
)

export const searchInput = style(
  {
    background: 'transparent',
    display: 'flex',
    fontSize: fontSizeVars[16],
    height: spaceVars[36],
    width: '100%',
    selectors: {
      '&:focus': {
        outline: 'none',
      },
      '&::placeholder': {
        color: primitiveColorVars.text4,
      },
    },
  },
  'searchInput',
)

export const searchInputIcon = style(
  {
    color: primitiveColorVars.text3,
  },
  'searchInputIcon',
)

export const results = style(
  {
    display: 'flex',
    flexDirection: 'column',
    gap: spaceVars[8],
    overflowX: 'hidden',
    overflowY: 'auto',
    overscrollBehavior: 'contain',
    width: '100%',
  },
  'results',
)

export const titles = style(
  {
    display: 'flex',
    gap: spaceVars[4],
  },
  'titles',
)

export const title = style(
  {
    alignItems: 'center',
    display: 'flex',
    fontWeight: fontWeightVars.medium,
    gap: spaceVars[4],
  },
  'title',
)

export const titleIcon = style(
  {
    color: primitiveColorVars.text4,
  },
  'titleIcon',
)

export const result = style(
  {
    border: `1px solid ${primitiveColorVars.border}`,
    borderRadius: borderRadiusVars[4],
    width: '100%',
    selectors: {
      '&:focus-within': {
        borderColor: primitiveColorVars.borderAccent,
      },
    },
  },
  'result',
)

globalStyle(`${result} > a`, {
  display: 'flex',
  flexDirection: 'column',
  gap: spaceVars[8],
  minHeight: spaceVars[36],
  outline: 'none',
  justifyContent: 'center',
  padding: spaceVars[8],
  width: '100%',
})

export const resultSelected = style(
  {
    borderColor: primitiveColorVars.borderAccent,
  },
  'resultSelected',
)

export const excerpt = style(
  {
    maxHeight: '8.75rem',
    overflow: 'hidden',
    opacity: 0.5,
  },
  'excerpt',
)

globalStyle(`${resultSelected} ${excerpt}`, {
  opacity: 1,
})
