/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    SwitchingFunctionDevicesArgument,
    _decode_SwitchingFunctionDevicesArgument,
    _encode_SwitchingFunctionDevicesArgument
} from "../CSTA-switching-function-devices/SwitchingFunctionDevicesArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary switchingFunctionDevices
 * @description
 *
 * Switching Function Devices (ECMA-269 §13.1.6 / ECMA-285 §11.1.6). Direction:
 * SF→CF. ROSE local CODE 205. Errors: `universalFailure`. Delivers (possibly
 * segmented) DeviceIDs that can be controlled
 * and/or observed. Correlated by `serviceCrossRefID` to Get
 * Switching Function Devices. No positive ack; negative ack uses
 * `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * switchingFunctionDevices OPERATION ::= {    ARGUMENT        SwitchingFunctionDevicesArgument
 *     ERRORS            {universalFailure }
 *     CODE             local:205 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SwitchingFunctionDevicesArgument>}
 * @implements {OPERATION<SwitchingFunctionDevicesArgument>}
 */
export
const switchingFunctionDevices: OPERATION<SwitchingFunctionDevicesArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SwitchingFunctionDevicesArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SwitchingFunctionDevicesArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 205 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
