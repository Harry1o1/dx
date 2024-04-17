import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ContactGroupIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M12.4735 8.01419C12.9863 8.01419 13.409 8.40023 13.4668 8.89757L13.4735 9.01419V13.3816C13.4735 15.3059 11.9135 16.8658 9.98922 16.8658C8.12905 16.8658 6.60934 15.4081 6.51009 13.5727L6.50494 13.3816V9.01419C6.50494 8.50135 6.89098 8.07868 7.38832 8.02092L7.50494 8.01419H12.4735ZM12.4735 9.01419H7.50494V13.3816C7.50494 14.7536 8.61719 15.8658 9.98922 15.8658C11.3064 15.8658 12.3841 14.8408 12.4682 13.5449L12.4735 13.3816V9.01419ZM5.77285 8.01359C5.63086 8.25885 5.53947 8.53706 5.51295 8.83394L5.50494 9.01419H3.01562V12.7533C3.01562 13.7785 3.84671 14.6096 4.8719 14.6096C5.14311 14.6096 5.40074 14.5514 5.63299 14.4469C5.71225 14.7755 5.82882 15.0906 5.97728 15.387C5.63765 15.5306 5.264 15.6096 4.8719 15.6096C3.35076 15.6096 2.10735 14.4205 2.02047 12.9211L2.01562 12.7533V9.01419C2.01562 8.50135 2.40167 8.07868 2.899 8.02092L3.01562 8.01419L5.77285 8.01359ZM14.2056 8.01359L16.99 8.01419C17.5028 8.01419 17.9255 8.40023 17.9832 8.89757L17.99 9.01419V12.7541C17.99 14.3311 16.7115 15.6096 15.1345 15.6096C14.7336 15.6096 14.3519 15.527 14.0057 15.3778C14.1539 15.0801 14.2697 14.7647 14.3491 14.435C14.5875 14.5472 14.8537 14.6096 15.1345 14.6096C16.1104 14.6096 16.9104 13.8561 16.9844 12.8991L16.99 12.7541V9.01419H14.4735L14.468 8.86493C14.4453 8.55642 14.3525 8.26737 14.2056 8.01359ZM9.98735 2.98914C11.2175 2.98914 12.2147 3.98636 12.2147 5.2165C12.2147 6.44664 11.2175 7.44386 9.98735 7.44386C8.75721 7.44386 7.75999 6.44664 7.75999 5.2165C7.75999 3.98636 8.75721 2.98914 9.98735 2.98914ZM14.9745 3.61727C16.0312 3.61727 16.8878 4.47388 16.8878 5.53056C16.8878 6.58725 16.0312 7.44386 14.9745 7.44386C13.9178 7.44386 13.0612 6.58725 13.0612 5.53056C13.0612 4.47388 13.9178 3.61727 14.9745 3.61727ZM5.01595 3.61727C6.07264 3.61727 6.92925 4.47388 6.92925 5.53056C6.92925 6.58725 6.07264 7.44386 5.01595 7.44386C3.95927 7.44386 3.10266 6.58725 3.10266 5.53056C3.10266 4.47388 3.95927 3.61727 5.01595 3.61727ZM9.98735 3.98914C9.3095 3.98914 8.75999 4.53864 8.75999 5.2165C8.75999 5.89435 9.3095 6.44386 9.98735 6.44386C10.6652 6.44386 11.2147 5.89435 11.2147 5.2165C11.2147 4.53864 10.6652 3.98914 9.98735 3.98914ZM14.9745 4.61727C14.4701 4.61727 14.0612 5.02616 14.0612 5.53056C14.0612 6.03496 14.4701 6.44386 14.9745 6.44386C15.4789 6.44386 15.8878 6.03496 15.8878 5.53056C15.8878 5.02616 15.4789 4.61727 14.9745 4.61727ZM5.01595 4.61727C4.51155 4.61727 4.10266 5.02616 4.10266 5.53056C4.10266 6.03496 4.51155 6.44386 5.01595 6.44386C5.52035 6.44386 5.92925 6.03496 5.92925 5.53056C5.92925 5.02616 5.52035 4.61727 5.01595 4.61727Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M12.4735 8.01419C12.9863 8.01419 13.409 8.40023 13.4668 8.89757L13.4735 9.01419V13.3816C13.4735 15.3059 11.9135 16.8658 9.98922 16.8658C8.12905 16.8658 6.60934 15.4081 6.51009 13.5727L6.50494 13.3816V9.01419C6.50494 8.50135 6.89098 8.07868 7.38832 8.02092L7.50494 8.01419H12.4735ZM5.77285 8.01359C5.63086 8.25885 5.53947 8.53706 5.51295 8.83394L5.50494 9.01419V13.3816L5.50982 13.5926C5.5396 14.2354 5.7047 14.8428 5.97728 15.387C5.63765 15.5306 5.264 15.6096 4.8719 15.6096C3.35076 15.6096 2.10735 14.4205 2.02047 12.9211L2.01562 12.7533V9.01419C2.01562 8.50135 2.40167 8.07868 2.899 8.02092L3.01562 8.01419L5.77285 8.01359ZM14.2056 8.01359L16.99 8.01419C17.5028 8.01419 17.9255 8.40023 17.9832 8.89757L17.99 9.01419V12.7541C17.99 14.3311 16.7115 15.6096 15.1345 15.6096C14.7336 15.6096 14.3519 15.527 14.0057 15.3778C14.2679 14.8512 14.4294 14.2666 14.4657 13.6485L14.4735 13.3816V9.01419L14.468 8.86493C14.4453 8.55642 14.3525 8.26737 14.2056 8.01359ZM9.98735 2.98914C11.2175 2.98914 12.2147 3.98636 12.2147 5.2165C12.2147 6.44664 11.2175 7.44386 9.98735 7.44386C8.75721 7.44386 7.75999 6.44664 7.75999 5.2165C7.75999 3.98636 8.75721 2.98914 9.98735 2.98914ZM14.9745 3.61727C16.0312 3.61727 16.8878 4.47388 16.8878 5.53056C16.8878 6.58725 16.0312 7.44386 14.9745 7.44386C13.9178 7.44386 13.0612 6.58725 13.0612 5.53056C13.0612 4.47388 13.9178 3.61727 14.9745 3.61727ZM5.01595 3.61727C6.07264 3.61727 6.92925 4.47388 6.92925 5.53056C6.92925 6.58725 6.07264 7.44386 5.01595 7.44386C3.95927 7.44386 3.10266 6.58725 3.10266 5.53056C3.10266 4.47388 3.95927 3.61727 5.01595 3.61727Z"
      />
    </svg>
  ),
  displayName: 'ContactGroupIcon',
});
