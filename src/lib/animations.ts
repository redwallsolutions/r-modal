export const overlayVariant = {
  show: {
    opacity: 0.3,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
    transitionEnd: {
      display: 'block',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
    transitionEnd: {
      display: 'none',
    },
  },
  initial: {
    opacity: 0,
  },
}

export const dialogVariant = {
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      opacity: {
        delay: 0.2,
        duration: 0.5,
      },
      scale: {
        duration: 1.5,
        ease: [0.5, 1.12, 0, 1.01],
      },
    },
  },
  hide: {
    scale: 0.8,
    opacity: 0,
    transition: {
      type: 'tween',
      opacity: {
        delay: 0.1,
        duration: 0.25,
      },
      scale: {
        duration: 0.75,
        ease: [0.5, 1.12, 0, 1.01],
      },
    },
  },
  initial: {
    scale: 0.8,
    opacity: 0,
  },
}

export const mDialogVariant = {
  show: ({ y }: any) => ({
    y,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: [0.5, 1.12, 0, 1.01],
      duration: 1,
      opacity: {
        duration: 0.2,
      },
    },
  }),
  hide: ({ totalHeight: height }: any) => ({
    y: height,
    opacity: 0,
    transition: {
      ease: [0.5, 1.12, 0, 1.01],
      duration: 0.5,
    },
  }),
  full: {
    y: 0,
    height: '100%',
    transition: {
      type: 'tween',
      ease: [0.5, 1.12, 0, 1.01],
      duration: 0.75,
    },
  },
  initial: ({ totalHeight: height }: any) => ({
    y: height,
    opacity: 0,
  }),
}

export const motionProps = {
  initial: 'initial',
  animate: 'show',
  exit: 'hide',
}
