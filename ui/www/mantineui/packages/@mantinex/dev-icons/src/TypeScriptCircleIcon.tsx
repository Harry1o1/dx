import React from 'react';
import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function TypeScriptCircleIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      preserveAspectRatio="xMidYMid"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...others}
    >
      <path
        fill="#3178C6"
        d="M128 0c70.692 0 128 57.308 128 128 0 70.692-57.308 128-128 128C57.308 256 0 198.692 0 128 0 57.308 57.308 0 128 0z"
      />
      <path
        fill="#FFF"
        d="M140.463 160.712v25.03c4.017 2.086 8.767 3.651 14.25 4.694 5.484 1.043 11.264 1.564 17.34 1.564 5.921 0 11.547-.574 16.876-1.721 5.329-1.147 10.002-3.037 14.018-5.671 4.016-2.633 7.196-6.075 9.539-10.325 2.343-4.25 3.514-9.503 3.514-15.761 0-4.537-.669-8.513-2.008-11.929a27.928 27.928 0 00-5.793-9.112c-2.523-2.66-5.548-5.045-9.075-7.157-3.527-2.112-7.505-4.107-11.933-5.984-3.244-1.356-6.153-2.673-8.728-3.95-2.574-1.278-4.762-2.581-6.565-3.911-1.802-1.33-3.192-2.738-4.17-4.224-.979-1.486-1.468-3.168-1.468-5.045 0-1.721.438-3.272 1.313-4.654.876-1.382 2.111-2.569 3.707-3.56 1.597-.99 3.553-1.76 5.87-2.307 2.317-.547 4.892-.821 7.724-.821 2.06 0 4.235.156 6.526.47 2.292.312 4.596.794 6.913 1.446a47.66 47.66 0 016.758 2.464 37.143 37.143 0 016.063 3.442V80.302c-3.759-1.46-7.865-2.542-12.319-3.246-4.454-.704-9.564-1.056-15.331-1.056-5.87 0-11.431.639-16.683 1.916-5.252 1.278-9.873 3.273-13.864 5.984-3.991 2.712-7.144 6.166-9.461 10.364S140 103.481 140 109.322c0 7.457 2.124 13.818 6.372 19.085 4.248 5.267 10.697 9.726 19.348 13.376a260.147 260.147 0 019.5 4.146c2.934 1.355 5.47 2.763 7.607 4.223 2.137 1.461 3.823 3.051 5.059 4.772 1.236 1.721 1.854 3.676 1.854 5.866a9.06 9.06 0 01-1.159 4.498c-.772 1.382-1.943 2.581-3.514 3.598-1.57 1.017-3.527 1.812-5.87 2.386-2.343.573-5.085.86-8.225.86-5.355 0-10.659-.952-15.911-2.855-5.252-1.903-10.118-4.758-14.598-8.565zm-42.752-62.17H130V78H40v20.541h32.132V190H97.71V98.541z"
      />
    </Box>
  );
}
