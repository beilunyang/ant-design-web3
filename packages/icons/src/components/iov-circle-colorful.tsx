// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/iov-circle-colorful.svg';

/**![IovCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1pb3YtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTY5IDE2OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTY5IDE2OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHBhdGggZD0iTTg0LjUsMTY2LjVjNDUuMywwLDgyLTM2LjcsODItODJjMC00NS4zLTM2LjctODItODItODJjLTQ1LjMsMC04MiwzNi43LTgyLDgyQzIuNSwxMjkuOCwzOS4yLDE2Ni41LDg0LjUsMTY2LjUKCXoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNODQuNSwxNjljLTE2LjcsMC0zMy01LTQ2LjktMTQuMmMtMTMuOS05LjMtMjQuNy0yMi41LTMxLjEtMzcuOUMwLDEwMS40LTEuNiw4NC40LDEuNiw2OHMxMS4zLTMxLjQsMjMuMS00My4zCglDMzYuNiwxMi45LDUxLjYsNC45LDY4LDEuNnMzMy40LTEuNiw0OC44LDQuOGMxNS40LDYuNCwyOC42LDE3LjIsMzcuOSwzMS4xQzE2NCw1MS41LDE2OSw2Ny44LDE2OSw4NC41YzAsMjIuNC04LjksNDMuOS0yNC44LDU5LjcKCVMxMDYuOSwxNjksODQuNSwxNjlMODQuNSwxNjl6IE04NC41LDVDNjguOCw1LDUzLjQsOS43LDQwLjMsMTguNGMtMTMuMSw4LjctMjMuMywyMS4yLTI5LjMsMzUuN0M1LDY4LjYsMy41LDg0LjYsNi41LDEwMAoJYzMuMSwxNS40LDEwLjYsMjkuNiwyMS44LDQwLjdjMTEuMSwxMS4xLDI1LjMsMTguNyw0MC43LDIxLjhjMTUuNCwzLjEsMzEuNCwxLjUsNDUuOS00LjVjMTQuNS02LDI2LjktMTYuMiwzNS43LTI5LjMKCWM4LjctMTMuMSwxMy40LTI4LjQsMTMuNC00NC4yYzAtMjEuMS04LjQtNDEuMy0yMy4zLTU2LjJDMTI1LjgsMTMuNCwxMDUuNiw1LDg0LjUsNUw4NC41LDV6IiBzdHlsZT0iZmlsbDogI0QwRDJEMzsiLz4KPHBhdGggZD0iTTczLDYxLjFsMTEuNi0xOC40bDExLjksMTcuOWMyLjktMi41LDQuOS01LjgsNS44LTkuNWMwLjktMy43LDAuNy03LjYtMC43LTExLjFjLTEuNC0zLjUtMy44LTYuNi03LTguNwoJYy0zLjItMi4xLTYuOS0zLjItMTAuNy0zLjFjLTMuOCwwLjEtNy41LDEuMy0xMC41LDMuNmMtMy4xLDIuMy01LjMsNS40LTYuNSw5Yy0xLjIsMy42LTEuMyw3LjUtMC4yLDExLjFDNjcuOCw1NS41LDcwLDU4LjcsNzMsNjEuMQoJTDczLDYxLjF6IiBzdHlsZT0iZmlsbDogIzVDNjdCMDsiLz4KPHBhdGggZD0iTTY5LjUsMTA5LjFsLTIxLjgtMC4zbDktMTkuNWMtMy42LTEuMS03LjUtMS4xLTExLjEsMGMtMy42LDEuMi02LjgsMy40LTkuMSw2LjRjLTIuMywzLTMuNiw2LjctMy43LDEwLjUKCWMtMC4xLDMuOCwwLjksNy41LDMsMTAuN2MyLjEsMy4yLDUuMSw1LjYsOC42LDcuMWMzLjUsMS40LDcuNCwxLjcsMTEuMSwwLjljMy43LTAuOSw3LTIuOCw5LjYtNS43QzY3LjUsMTE2LjQsNjksMTEyLjksNjkuNSwxMDkuMQoJTDY5LjUsMTA5LjF6IiBzdHlsZT0iZmlsbDogIzVDNjdCMDsiLz4KPHBhdGggZD0iTTk5LDEwOS40bDIxLjgtMC42bC05LjMtMTkuM2MzLjYtMS4yLDcuNS0xLjMsMTEuMS0wLjJjMy42LDEuMSw2LjgsMy4zLDkuMiw2LjNzMy43LDYuNiwzLjksMTAuNAoJYzAuMiwzLjgtMC44LDcuNS0yLjgsMTAuOGMtMiwzLjItNSw1LjctOC41LDcuMmMtMy41LDEuNS03LjQsMS44LTExLjEsMWMtMy43LTAuOC03LjEtMi43LTkuNy01LjVDMTAxLjIsMTE2LjcsOTkuNSwxMTMuMiw5OSwxMDkuNAoJeiIgc3R5bGU9ImZpbGw6ICM1QzY3QjA7Ii8+Cjwvc3ZnPgo=) */
export const IovCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-iov-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

IovCircleColorful.displayName = 'IovCircleColorful';
