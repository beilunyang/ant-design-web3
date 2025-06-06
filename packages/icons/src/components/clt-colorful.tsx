// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/clt-colorful.svg';

/**![CltColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1jbHQtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMDAwIDIwMTMuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwMCAyMDEzLjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzQ4MkZBOyIgZD0iTTk5OS42LDMxMC43Yy0zODEuNSwwLTY5MiwzMTIuNS02OTIsNjk2LjdzMzEwLjUsNjk2LjcsNjkyLDY5Ni43czY5Mi0zMTIuNSw2OTItNjk2LjcKCQlTMTM4MS4yLDMxMC43LDk5OS42LDMxMC43IE05OTkuNiwxNjA2LjRjLTMyOC4xLDAtNTk1LTI2OC43LTU5NS01OTlzMjY2LjktNTk5LjEsNTk1LTU5OS4xczU5NSwyNjguOCw1OTUsNTk5LjEKCQlTMTMyNy43LDE2MDYuNCw5OTkuNiwxNjA2LjQiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzNDgyRkE7IiBkPSJNMTMxNi4zLDk2NC4xYy03LjQtNTUuMS0yOC45LTEwNy4zLTYyLjUtMTUxLjVjMC45LTAuNywxLjctMS40LDIuNS0yLjFsNzkuOC04MC4zCgkJYzE2LjktMTcsMTYuOS00NC41LDAtNjEuNWMtMTYuNy0xNi45LTQzLjktMTctNjAuOC0wLjNjLTAuMSwwLjEtMC4yLDAuMi0wLjMsMC4zbC03OS43LDgwLjNjLTAuOCwwLjgtMS40LDEuNy0yLjIsMi41CgkJYy00My44LTMzLjgtOTUuNy01NS41LTE1MC41LTYyLjljMC0xLDAuMy0yLDAuMy0zLjFWNTcxLjljMC0yMy45LTE5LjQtNDMuMi00My4yLTQzLjJjLTIzLjksMC00My4yLDE5LjQtNDMuMiw0My4ydjExMy41CgkJYzAsMS4xLDAuMywyLjEsMC40LDMuMWMtNTQuOCw3LjUtMTA2LjcsMjkuMi0xNTAuNiw2Mi45Yy0wLjctMC44LTEuMy0xLjctMi4xLTIuNWwtNzkuNy04MC4zYy0xNi43LTE2LjktNDQtMTctNjAuOS0wLjMKCQljLTAuMSwwLjEtMC4yLDAuMi0wLjMsMC4zYy0xNi45LDE3LTE2LjksNDQuNSwwLDYxLjVsNzkuOCw4MC4zYzAuOSwwLjgsMS43LDEuNCwyLjUsMi4xYy0zMy42LDQ0LjItNTUuMiw5Ni41LTYyLjUsMTUxLjUKCQljLTEtMC4xLTIuMS0wLjMtMy4xLTAuM0g1NjcuMWMtMjQsMC00My41LDE5LjUtNDMuNSw0My41YzAsMjQsMTkuNSw0My41LDQzLjUsNDMuNWgxMTIuOGMxLDAsMi0wLjIsMy4xLTAuMwoJCWM3LjMsNTUuMSwyOC45LDEwNy4zLDYyLjUsMTUxLjZjLTAuOCwwLjctMS43LDEuMy0yLjUsMi4xbC03OS44LDgwLjJjLTE2LjksMTcuMS0xNi45LDQ0LjUsMCw2MS42YzE2LjcsMTYuOSw0My45LDE3LDYwLjgsMC4zCgkJYzAuMS0wLjEsMC4yLTAuMiwwLjMtMC4zbDc5LjgtODAuM2MwLjgtMC44LDEuNC0xLjcsMi4xLTIuNWM0My44LDMzLjgsOTUuOCw1NS41LDE1MC42LDYyLjljLTAuMSwxLTAuNCwyLjEtMC40LDMuMXYxMTMuNgoJCWMtMC40LDIzLjksMTguNyw0My41LDQyLjYsNDMuOXM0My41LTE4LjcsNDMuOS00Mi42YzAtMC40LDAtMC45LDAtMS4zdi0xMTMuNmMwLTEtMC4zLTItMC4zLTMuMWM1NC44LTcuNSwxMDYuNy0yOS4yLDE1MC41LTYyLjkKCQljMC44LDAuOCwxLjQsMS44LDIuMiwyLjVsNzkuNyw4MC4zYzE2LjcsMTYuOSw0My45LDE3LDYwLjgsMC4zYzAuMS0wLjEsMC4yLTAuMiwwLjMtMC4zYzE2LjktMTcuMSwxNi45LTQ0LjUsMC02MS42bC03OS43LTgwLjIKCQljLTAuOC0wLjgtMS42LTEuNS0yLjUtMi4xYzMzLjYtNDQuMyw1NS4xLTk2LjUsNjIuNS0xNTEuNmMxLDAuMSwyLjEsMC4zLDMuMiwwLjNoMTEyLjdjMjQsMCw0My41LTE5LjUsNDMuNS00My41CgkJYzAtMjQtMTkuNS00My41LTQzLjUtNDMuNWgtMTEyLjdDMTMxOC40LDk2My44LDEzMTcuMyw5NjQsMTMxNi4zLDk2NC4xeiBNOTk5LjYsMTIzMS43Yy0xMjIuOSwwLTIyMi44LTEwMC43LTIyMi44LTIyNC40CgkJczEwMC0yMjQuNCwyMjIuOC0yMjQuNHMyMjMsMTAwLjcsMjIzLDIyNC40UzExMjIuNSwxMjMxLjcsOTk5LjYsMTIzMS43eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzM0ODJGQTsiIGQ9Ik0xNzU5LjYsMEgyNDAuM0MxMDcuOCwwLDAsMTA4LjYsMCwyNDEuOXYxNTI5LjJjMCwxMzMuNCwxMDcuOCwyNDIsMjQwLjMsMjQyaDE1MTkuNAoJCWMxMzIuNSwwLDI0MC40LTEwOC41LDI0MC40LTI0MlYyNDEuOUMyMDAwLDEwOC42LDE4OTIuMSwwLDE3NTkuNiwweiBNMTg5MC4zLDE3NzEuMWMwLDcyLjYtNTguNywxMzEuNi0xMzAuNywxMzEuNkgyNDAuMwoJCWMtNzIuMSwwLTEzMC42LTU5LTEzMC42LTEzMS42VjI0MS45YzAtNzIuNSw1OC41LTEzMS41LDEzMC42LTEzMS41aDE1MTkuNGM3MiwwLDEzMC43LDU5LDEzMC43LDEzMS41VjE3NzEuMXoiLz4KPC9nPgo8L3N2Zz4K) */
export const CltColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-clt-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

CltColorful.displayName = 'CltColorful';
