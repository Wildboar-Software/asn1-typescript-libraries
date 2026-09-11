/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    GetLocationTrackingSessionsArgument,
    _decode_GetLocationTrackingSessionsArgument,
    _encode_GetLocationTrackingSessionsArgument
} from "../CSTA-get-location-tracking-sessions/GetLocationTrackingSessionsArgument.ta.mjs";

import {
    GetLocationTrackingSessionsResult,
    _decode_GetLocationTrackingSessionsResult,
    _encode_GetLocationTrackingSessionsResult
} from "../CSTA-get-location-tracking-sessions/GetLocationTrackingSessionsResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getLocationTrackingSessions
 * @description
 *
 * Obtains existing location tracking sessions for this application association.
 * Either `locationSessionInfoList` is in this result, or `serviceCrossRefID`
 * correlates later Location Session Info services — not both (ECMA-269
 * §28.1.11).
 *
 * Computing function → switching function.
 *
 * ROSE local:540. Errors: `universalFailure` (ECMA-285 §26.1.11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getLocationTrackingSessions OPERATION ::= {     ARGUMENT        GetLocationTrackingSessionsArgument
 *     RESULT            GetLocationTrackingSessionsResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 540}
 * ```
 * 
 * @constant
 * @type {OPERATION<GetLocationTrackingSessionsArgument, GetLocationTrackingSessionsResult>}
 * @implements {OPERATION<GetLocationTrackingSessionsArgument, GetLocationTrackingSessionsResult>}
 */
export
const getLocationTrackingSessions: OPERATION<GetLocationTrackingSessionsArgument, GetLocationTrackingSessionsResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetLocationTrackingSessionsArgument,
        "&ResultType": _decode_GetLocationTrackingSessionsResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetLocationTrackingSessionsArgument,
        "&ResultType": _encode_GetLocationTrackingSessionsResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 540 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
