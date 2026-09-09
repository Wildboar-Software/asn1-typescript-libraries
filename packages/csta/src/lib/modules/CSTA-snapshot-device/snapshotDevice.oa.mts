/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SnapshotDeviceArgument, _decode_SnapshotDeviceArgument, _encode_SnapshotDeviceArgument } from "../CSTA-snapshot-device/SnapshotDeviceArgument.ta.mjs";

import { SnapshotDeviceResult, _decode_SnapshotDeviceResult, _encode_SnapshotDeviceResult } from "../CSTA-snapshot-device/SnapshotDeviceResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary snapshotDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * snapshotDevice OPERATION ::= {     ARGUMENT         SnapshotDeviceArgument
 *     RESULT             SnapshotDeviceResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 74 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SnapshotDeviceArgument, SnapshotDeviceResult>}
 * @implements {OPERATION<SnapshotDeviceArgument, SnapshotDeviceResult>}
 */
export
const snapshotDevice: OPERATION<SnapshotDeviceArgument, SnapshotDeviceResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SnapshotDeviceArgument,
        "&ResultType": _decode_SnapshotDeviceResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SnapshotDeviceArgument,
        "&ResultType": _encode_SnapshotDeviceResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 74 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
