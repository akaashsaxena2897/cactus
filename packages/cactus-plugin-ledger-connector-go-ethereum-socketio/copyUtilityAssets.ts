/*
 * Copyright 2020-2021 Hyperledger Cactus Contributors
 * SPDX-License-Identifier: Apache-2.0
 * 
 * copyUtilityAssets.ts
 */
import * as shell from 'shelljs';
shell.cp('../cactus-cmd-socketio-server/src/main/typescript/verifier/ValidatorAuthentication.ts', './src/main/typescript/connector');
