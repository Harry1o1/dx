## API Report File for "@fluentui/react-dialog"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import { ARIAButtonResultProps } from '@fluentui/react-aria';
import { ARIAButtonType } from '@fluentui/react-aria';
import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import { ContextSelector } from '@fluentui/react-context-selector';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { JSXElementConstructor } from 'react';
import type { PortalProps } from '@fluentui/react-portal';
import { Provider } from 'react';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';
import type { TriggerProps } from '@fluentui/react-utilities';
import { useModalAttributes } from '@fluentui/react-tabster';

// @public
export const Dialog: React_2.FC<DialogProps>;

// @public
export const DialogActions: ForwardRefComponent<DialogActionsProps>;

// @public (undocumented)
export const dialogActionsClassNames: SlotClassNames<DialogActionsSlots>;

// @public (undocumented)
export type DialogActionsPosition = 'start' | 'end';

// @public
export type DialogActionsProps = ComponentProps<DialogActionsSlots> & {
    position?: DialogActionsPosition;
    fluid?: boolean;
};

// @public (undocumented)
export type DialogActionsSlots = {
    root: Slot<'div'>;
};

// @public
export type DialogActionsState = ComponentState<DialogActionsSlots> & Pick<Required<DialogActionsProps>, 'position' | 'fluid'>;

// @public
export const DialogBody: ForwardRefComponent<DialogBodyProps>;

// @public (undocumented)
export const dialogBodyClassNames: SlotClassNames<DialogBodySlots>;

// @public
export type DialogBodyProps = ComponentProps<DialogBodySlots> & {};

// @public (undocumented)
export type DialogBodySlots = {
    root: Slot<'div'>;
};

// @public
export type DialogBodyState = ComponentState<DialogBodySlots>;

// @public
export const DialogContent: ForwardRefComponent<DialogContentProps>;

// @public (undocumented)
export const dialogContentClassNames: SlotClassNames<DialogContentSlots>;

// @public
export type DialogContentProps = ComponentProps<DialogContentSlots>;

// @public (undocumented)
export type DialogContentSlots = {
    root: Slot<'div'>;
};

// @public
export type DialogContentState = ComponentState<DialogContentSlots>;

// @public (undocumented)
export type DialogContextValue = {
    open: boolean;
    inertTrapFocus: boolean;
    dialogTitleId?: string;
    isNestedDialog: boolean;
    dialogRef: React_2.Ref<DialogSurfaceElement>;
    modalType: DialogModalType;
    requestOpenChange: (data: DialogOpenChangeData) => void;
} & Partial<ReturnType<typeof useModalAttributes>>;

// @public (undocumented)
export type DialogOpenChangeData = {
    type: 'escapeKeyDown';
    open: boolean;
    event: React_2.KeyboardEvent<DialogSurfaceElement>;
} | {
    type: 'backdropClick';
    open: boolean;
    event: React_2.MouseEvent<DialogSurfaceElement>;
} | {
    type: 'triggerClick';
    open: boolean;
    event: React_2.MouseEvent<DialogSurfaceElement>;
};

// @public (undocumented)
export type DialogOpenChangeEvent = DialogOpenChangeData['event'];

// @public
export type DialogOpenChangeEventHandler = (event: DialogOpenChangeEvent, data: DialogOpenChangeData) => void;

// @public (undocumented)
export type DialogProps = ComponentProps<Partial<DialogSlots>> & {
    modalType?: DialogModalType;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: DialogOpenChangeEventHandler;
    children: [JSX.Element, JSX.Element] | JSX.Element;
    inertTrapFocus?: boolean;
};

// @public (undocumented)
export const DialogProvider: React_2.Provider<DialogContextValue | undefined> & React_2.FC<React_2.ProviderProps<DialogContextValue | undefined>>;

// @public (undocumented)
export type DialogSlots = {};

// @public (undocumented)
export type DialogState = ComponentState<DialogSlots> & DialogContextValue & {
    content: React_2.ReactNode;
    trigger: React_2.ReactNode;
};

// @public
export const DialogSurface: ForwardRefComponent<DialogSurfaceProps>;

// @public (undocumented)
export const dialogSurfaceClassNames: SlotClassNames<DialogSurfaceSlots>;

// @public (undocumented)
export type DialogSurfaceContextValue = boolean;

// @public (undocumented)
export type DialogSurfaceContextValues = {
    dialogSurface: DialogSurfaceContextValue;
};

// @public
export type DialogSurfaceElement = HTMLElement;

// @public
export type DialogSurfaceProps = ComponentProps<DialogSurfaceSlots> & Pick<PortalProps, 'mountNode'>;

// @public (undocumented)
export const DialogSurfaceProvider: Provider<boolean | undefined>;

// @public (undocumented)
export type DialogSurfaceSlots = {
    backdrop?: Slot<'div'>;
    root: Slot<'div'>;
};

// @public
export type DialogSurfaceState = ComponentState<DialogSurfaceSlots> & Pick<DialogContextValue, 'isNestedDialog'> & Pick<PortalProps, 'mountNode'> & {
    transitionStatus?: 'entering' | 'entered' | 'idle' | 'exiting' | 'exited' | 'unmounted';
};

// @public
export const DialogTitle: ForwardRefComponent<DialogTitleProps>;

// @public (undocumented)
export const dialogTitleClassNames: SlotClassNames<DialogTitleSlots>;

// @public
export type DialogTitleProps = ComponentProps<DialogTitleSlots>;

// @public (undocumented)
export type DialogTitleSlots = {
    root: Slot<'h2', 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'>;
    action?: Slot<'div'>;
};

// @public
export type DialogTitleState = ComponentState<DialogTitleSlots>;

// @public
export const DialogTrigger: React_2.FC<DialogTriggerProps>;

// @public (undocumented)
export type DialogTriggerAction = 'open' | 'close';

// @public
export type DialogTriggerChildProps<Type extends ARIAButtonType = ARIAButtonType, Props = {}> = ARIAButtonResultProps<Type, Props & {
    'aria-haspopup'?: 'dialog';
}>;

// @public (undocumented)
export type DialogTriggerProps = TriggerProps<DialogTriggerChildProps> & {
    action?: DialogTriggerAction;
    disableButtonEnhancement?: boolean;
};

// @public (undocumented)
export type DialogTriggerState = {
    children: React_2.ReactElement | null;
};

// @public
export const renderDialog_unstable: (state: DialogState, contextValues: DialogContextValues) => JSX.Element;

// @public
export const renderDialogActions_unstable: (state: DialogActionsState) => JSX.Element;

// @public
export const renderDialogBody_unstable: (state: DialogBodyState) => JSX.Element;

// @public
export const renderDialogContent_unstable: (state: DialogContentState) => JSX.Element;

// @public
export const renderDialogSurface_unstable: (state: DialogSurfaceState, contextValues: DialogSurfaceContextValues) => JSX.Element;

// @public
export const renderDialogTitle_unstable: (state: DialogTitleState) => JSX.Element;

// @public
export const renderDialogTrigger_unstable: (state: DialogTriggerState) => ReactElement<any, string | JSXElementConstructor<any>> | null;

// @public
export const useDialog_unstable: (props: DialogProps) => DialogState;

// @public
export const useDialogActions_unstable: (props: DialogActionsProps, ref: React_2.Ref<HTMLElement>) => DialogActionsState;

// @public
export const useDialogActionsStyles_unstable: (state: DialogActionsState) => DialogActionsState;

// @public
export const useDialogBody_unstable: (props: DialogBodyProps, ref: React_2.Ref<HTMLElement>) => DialogBodyState;

// @public
export const useDialogBodyStyles_unstable: (state: DialogBodyState) => DialogBodyState;

// @public
export const useDialogContent_unstable: (props: DialogContentProps, ref: React_2.Ref<HTMLElement>) => DialogContentState;

// @public
export const useDialogContentStyles_unstable: (state: DialogContentState) => DialogContentState;

// @public (undocumented)
export const useDialogContext_unstable: <T>(selector: ContextSelector<DialogContextValue, T>) => T;

// @public
export const useDialogSurface_unstable: (props: DialogSurfaceProps, ref: React_2.Ref<DialogSurfaceElement>) => DialogSurfaceState;

// @public (undocumented)
export const useDialogSurfaceContext_unstable: () => boolean;

// @public (undocumented)
export function useDialogSurfaceContextValues_unstable(state: DialogSurfaceState): DialogSurfaceContextValues;

// @public
export const useDialogSurfaceStyles_unstable: (state: DialogSurfaceState) => DialogSurfaceState;

// @public
export const useDialogTitle_unstable: (props: DialogTitleProps, ref: React_2.Ref<HTMLDivElement>) => DialogTitleState;

// @public
export const useDialogTitleStyles_unstable: (state: DialogTitleState) => DialogTitleState;

// @public
export const useDialogTrigger_unstable: (props: DialogTriggerProps) => DialogTriggerState;

// (No @packageDocumentation comment for this package)

```