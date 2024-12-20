/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@material-ui/core';

/**
 * @public
 * Orchestrator icon
 */
const OrchestratorIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 126 166.8" {...props}>
    <path d="M48.8,106.6c10.2-1.1,17.7-10.2,16.7-20.5C64.4,75.8,55.2,68.4,45,69.4c-10.2,1.1-17.7,10.2-16.7,20.5 S38.5,107.6,48.8,106.6z" />
    <path d="M124.6,60.7L74.5,1l44.2,62.6c0,0,2.2,2.1,4.7,1.3C125.9,64.2,124.6,60.7,124.6,60.7L124.6,60.7z" />
    <path d="M108.6,160.1c-4.1-0.1-20.9-1.2-39-11.3c-1.9-1.1-3.6-2.1-5.2-3.1c18.8-8.8,32.9-31.1,39.8-50.8 c5-14.2,4.9-26,4-33.2l-2-2.7c-0.9,6.4-3.5,18.5-11.6,34.1c-4.8,9.2-15.6,29.3-49,34.2C12.3,132.2,1,92.7,1,92.7 s-0.4,22.1,8.5,37.6c3.5,6.1,11.5,13.9,23.6,17.4l-4.1,6.1c0,0,6.5,7.8,34.7,10.9c38.3,4.2,45.9-4.6,45.9-4.6 S109.2,160.1,108.6,160.1L108.6,160.1z" />
  </SvgIcon>
);

export default OrchestratorIcon;
