/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    GetAuditoryApparatusInformationArgument,
    _decode_GetAuditoryApparatusInformationArgument,
    _encode_GetAuditoryApparatusInformationArgument
} from "../CSTA-get-auditory-apparatus-information/GetAuditoryApparatusInformationArgument.ta.mjs";

import {
    GetAuditoryApparatusInformationResult,
    _decode_GetAuditoryApparatusInformationResult,
    _encode_GetAuditoryApparatusInformationResult
} from "../CSTA-get-auditory-apparatus-information/GetAuditoryApparatusInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getAuditoryApparatusInformation
 * @description
 *
 * Get Auditory Apparatus Information (ECMA-269 §21.1.2 / ECMA-285 §19.1.2).
 * Direction: CF→SF. ROSE local CODE 261. Errors: `universalFailure`. Atomic
 * acknowledgement. Optional apparatus ID; omit for all.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getAuditoryApparatusInformation OPERATION ::= {    ARGUMENT         GetAuditoryApparatusInformationArgument
 *     RESULT             GetAuditoryApparatusInformationResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 261 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetAuditoryApparatusInformationArgument, GetAuditoryApparatusInformationResult>}
 * @implements {OPERATION<GetAuditoryApparatusInformationArgument, GetAuditoryApparatusInformationResult>}
 */
export
const getAuditoryApparatusInformation: OPERATION<GetAuditoryApparatusInformationArgument, GetAuditoryApparatusInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetAuditoryApparatusInformationArgument,
        "&ResultType": _decode_GetAuditoryApparatusInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetAuditoryApparatusInformationArgument,
        "&ResultType": _encode_GetAuditoryApparatusInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 261 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
