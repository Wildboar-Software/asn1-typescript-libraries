/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SnapshotCallArgument, _decode_SnapshotCallArgument, _encode_SnapshotCallArgument } from "../CSTA-snapshot-call/SnapshotCallArgument.ta.mjs";

import { SnapshotCallResult, _decode_SnapshotCallResult, _encode_SnapshotCallResult } from "../CSTA-snapshot-call/SnapshotCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary snapshotCall
 * @description
 *
 * Snapshot Call (ECMA-269 §16.1.1 / ECMA-285 §14.1.1). Direction: CF→SF. ROSE
 * local CODE 75. Errors: `universalFailure`. If Dynamic Feature Availability is
 * supported, each connection
 * includes `servicesPermitted`. Endpoint details may arrive later
 * as Snapshot CallData correlated by `serviceCrossRefID`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * snapshotCall OPERATION ::= {     ARGUMENT         SnapshotCallArgument
 *     RESULT             SnapshotCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 75 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SnapshotCallArgument, SnapshotCallResult>}
 * @implements {OPERATION<SnapshotCallArgument, SnapshotCallResult>}
 */
export
const snapshotCall: OPERATION<SnapshotCallArgument, SnapshotCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SnapshotCallArgument,
        "&ResultType": _decode_SnapshotCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SnapshotCallArgument,
        "&ResultType": _encode_SnapshotCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 75 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
