// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { hotSnapshotCases } from '@lynx-js/test-tools';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

hotSnapshotCases({
  name: 'hot-snapshot',
  casePath: path.join(__dirname, 'hotCases'),
});
