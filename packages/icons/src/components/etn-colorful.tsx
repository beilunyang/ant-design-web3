// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/etn-colorful.svg';

/**![EtnColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWV0bi1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAwLjAzIDI0OTEuNzEiPjx0aXRsZT5lbGVjdHJvbmV1bTwvdGl0bGU+PGcgaWQ9ImFudC13ZWIzLWljb24tZXRuLWNvbG9yZnVsLUdyb3VwIj48ZyBpZD0iYW50LXdlYjMtaWNvbi1ldG4tY29sb3JmdWwtVmVjdG9yIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1ldG4tY29sb3JmdWwtcGF0aDBfZmlsbCIgZD0iTTE3MjAuMTUsOTkxLjUybDIwNCwxNTQuNCwxMjksOTcuNDgtMTQ0LjEsNzMuMjZMMTYxOS42NCwxNDY0LjRsOTkuMyw2OC40MiwxMzguNjUsOTYuMjctMTUwLjE2LDc3LjVMNzg3LjEyLDIxODEuMjhhMTAzNi4xNiwxMDM2LjE2LDAsMCwwLDQ5OS41MiwxMjguMzZjNTcyLjE3LDAsMTAzNi00NjMuNzksMTAzNi0xMDM2YTEwMjkuOTEsMTAyOS45MSwwLDAsMC0yNDAuMzctNjYzLjZMMTcyMC4xNSw5OTEuNTJoMFoiIHN0eWxlPSJmaWxsOiMwOTFiMjYiLz48L2c+PGcgaWQ9ImFudC13ZWIzLWljb24tZXRuLWNvbG9yZnVsLVZlY3Rvci0yIj48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1ldG4tY29sb3JmdWwtcGF0aDFfZmlsbCIgZD0iTTgxMC44MiwxNTgxbC0yMDQtMTU1LTEyOS05Ny40OCwxNDQuMS03My4yNkw5MTEuMzMsMTEwNy41bC05OS4zLTY5TDY3My4zOCw5NDIuMjFsMTUwLjE2LTc3LjVMMTc5Mi45LDM2NC41OWExMDI1LjU3LDEwMjUuNTcsMCwwLDAtNTQ4LTE1Ni44MmMtNTcyLjE3LDAtMTAzNiw0NjMuNzktMTAzNiwxMDM2LDAsMjY1LjgsMTAwLjUxLDUwOC42LDI2NS4yLDY5Mi4wNkw4MTAuODIsMTU4MWgwWiIgc3R5bGU9ImZpbGw6IzA5MWIyNiIvPjwvZz48ZyBpZD0iYW50LXdlYjMtaWNvbi1ldG4tY29sb3JmdWwtVmVjdG9yLTMiPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLWV0bi1jb2xvcmZ1bC1wYXRoMl9maWxsIiBkPSJNMzk1LjM3LDE5ODcuNzdjLTE4Mi44NS0yMDAuNDEtMjk0LjI2LTQ2Ni44Mi0yOTQuMjYtNzU4LjY2LDAtNjIxLjgyLDUwNi4xOC0xMTI4LDExMjgtMTEyOCwyMjkuNDcsMCw0NTIuODksNjkuNjMsNjQxLjIsMjAxbDEwMC41MS01Mi4wN0MxNzY1LDkzLjI0LDE1MDcuNjMsMCwxMjI5LjExLDAsNTUxLjU5LDAsMCw1NTEuNTksMCwxMjI5LjExLDAsMTU1MCwxMjMuNTIsMTg0MS44NSwzMjUuMTQsMjA2MWw3MC4yMy03My4yNmgwWiIgc3R5bGU9ImZpbGw6IzA5MWIyNiIvPjwvZz48ZyBpZD0iYW50LXdlYjMtaWNvbi1ldG4tY29sb3JmdWwtVmVjdG9yLTQiPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLWV0bi1jb2xvcmZ1bC1wYXRoM19maWxsIiBkPSJNMjEyOS40OCw1MzIuNGMxNjcuNzIsMTk2Ljc4LDI2OS40NCw0NTIuMjksMjY5LjQ0LDczMC4yLDAsNjIxLjgyLTUwNi4xOCwxMTI4LTExMjgsMTEyOC0yMTAuNywwLTQxNy4xNy01OC43My01OTUuMTgtMTcwLjE0TDU3Mi4yLDIyNzMuNzRjMjA1LjI2LDE0Mi4yOSw0NDkuMjYsMjE4LDY5OC43MiwyMTgsNjc3LjUyLDAsMTIyOS4xMS01NTEuNTksMTIyOS4xMS0xMjI5LjExLDAtMzA3LTExMy4yMi01ODguNTItMzAwLjMxLTgwNC4wN2wtNzAuMjMsNzMuODdoMFoiIHN0eWxlPSJmaWxsOiMwOTFiMjYiLz48L2c+PC9nPjxnIGlkPSJhbnQtd2ViMy1pY29uLWV0bi1jb2xvcmZ1bC1WZWN0b3ItNSI+PHBhdGggaWQ9ImFudC13ZWIzLWljb24tZXRuLWNvbG9yZnVsLXBhdGg0X2ZpbGwiIGQ9Ik02NzQuOTMsMTM1MC41OWwyOTQuMjYsMjIyLjgxTDMwNC4zOCwyMjczLjk0bDEzMjEuNzUtNjgxLjc2LTIzOC41Ni0xNjUuMjksNDQwLjE4LTIyNS4yNEwxNTMzLjQ5LDk3OC44MywyMTk4LjMsMjc4LjkxLDg3Ni41Niw5NjAuNjcsMTExNS4xMSwxMTI2LDY3NC45MywxMzUwLjU5aDBaIiBzdHlsZT0iZmlsbDojMjNiZWUyIi8+PC9nPjwvc3ZnPg==) */
export const EtnColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-etn-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EtnColorful.displayName = 'EtnColorful';
