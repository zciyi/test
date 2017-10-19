"use strict";

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.less';//使用require导入css文件

render(<div><Greeter /><div className="root">norepeat css</div></div>, document.getElementById('root'));
