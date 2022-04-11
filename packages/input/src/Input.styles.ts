import { focusStyles } from '@manifest-ui/theme-utils';
import { styled } from '@manifest-ui/styled';

const themeKey = 'input';

export const StyledInputContainer = styled('div', {
  slot: 'container',
  themeKey,
})(({ theme }) => focusStyles({ borderWidth: 'small', theme }), {
  borderColor: 'neutral.200',
  borderRadius: 'medium',
  borderStyle: 'solid',
  borderWidth: 'small',
  bottom: 0,
  boxSizing: 'border-box',
  left: 0,
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  top: 0,
  transitionDuration: 'base',
  transitionProperty: 'common',
  zIndex: 10,

  '&[data-disabled]': {
    backgroundColor: 'neutral.100',
    color: 'emphasis.disabled',

    '&::placeholder': {
      color: 'emphasis.disabled',
    },
  },

  '&[data-hover]': {
    borderColor: 'neutral.400',
  },

  '&[data-invalid]': {
    borderColor: 'status.danger.500',
    color: 'status.danger.500',
  },
});

export const StyledInput = styled('input', {
  slot: 'input',
  themeKey,
})(
  {
    appearance: 'none',
    background: 'none',
    border: 'none',
    color: 'emphasis.primary',
    fontFamily: 'body',
    fontSize: 'small',
    fontWeight: 'medium',
    lineHeight: 'medium',
    letterSpacing: 'normal',
    m: 0,
    minW: 0,
    outline: 0,
    px: 3,
    resize: 'none',
    textAlign: 'left',
    transitionDuration: 'base',
    transitionProperty: 'common',
    width: '100%',
    zIndex: 20,

    '&:disabled': {
      pointerEvents: 'none',

      '&::placeholder': {
        color: 'emphasis.disabled',
      },
    },

    '&::placeholder': {
      color: 'emphasis.tertiary',
      opacity: 1,
      userSelect: 'none',
    },

    '&[data-has-end-icon]': {
      pe: 0,
    },

    '&[data-has-start-icon]': {
      ps: 0,
    },
  },
  ({ size }) => ({
    ...(size === 'medium' && { minH: 40 }),
    ...(size === 'small' && { minH: 32 }),
  }),
);

export const StyledInputIcon = styled('div', {
  slot: 'icon',
  themeKey,
})({
  alignItems: 'center',
  color: 'emphasis.tertiary',
  display: 'flex',
  justifyContent: 'center',
  pe: 2,
  ps: 2,
  pointerEvents: 'none',
});

export const StyledInputWrapper = styled('div', {
  slot: 'wrapper',
  themeKey,
})({
  alignItems: 'center',
  border: 0,
  color: 'emphasis.secondary',
  cursor: 'text',
  display: 'flex',
  m: 0,
  p: 0,
  position: 'relative',

  '&[data-disabled]': {
    cursor: 'not-allowed',
  },
});
