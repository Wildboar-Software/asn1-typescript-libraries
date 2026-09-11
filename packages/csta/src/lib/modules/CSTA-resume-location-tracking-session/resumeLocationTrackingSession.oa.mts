/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    ResumeLocationTrackingSessionArgument,
    _decode_ResumeLocationTrackingSessionArgument,
    _encode_ResumeLocationTrackingSessionArgument
} from "../CSTA-resume-location-tracking-session/ResumeLocationTrackingSessionArgument.ta.mjs";

import {
    ResumeLocationTrackingSessionResult,
    _decode_ResumeLocationTrackingSessionResult,
    _encode_ResumeLocationTrackingSessionResult
} from "../CSTA-resume-location-tracking-session/ResumeLocationTrackingSessionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary resumeLocationTrackingSession
 * @description
 *
 * Requests the switching function to resume a currently suspended location
 * tracking session. Rejected if not suspended or if resume is still impossible.
 * Success is followed by Location Tracking Session Resumed (ECMA-269 §28.1.5).
 *
 * Computing function → switching function.
 *
 * ROSE local:534. Errors: `universalFailure` (ECMA-285 §26.1.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resumeLocationTrackingSession OPERATION ::= {     ARGUMENT        ResumeLocationTrackingSessionArgument
 *     RESULT            ResumeLocationTrackingSessionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 534}
 * ```
 * 
 * @constant
 * @type {OPERATION<ResumeLocationTrackingSessionArgument, ResumeLocationTrackingSessionResult>}
 * @implements {OPERATION<ResumeLocationTrackingSessionArgument, ResumeLocationTrackingSessionResult>}
 */
export
const resumeLocationTrackingSession: OPERATION<ResumeLocationTrackingSessionArgument, ResumeLocationTrackingSessionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResumeLocationTrackingSessionArgument,
        "&ResultType": _decode_ResumeLocationTrackingSessionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResumeLocationTrackingSessionArgument,
        "&ResultType": _encode_ResumeLocationTrackingSessionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 534 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
