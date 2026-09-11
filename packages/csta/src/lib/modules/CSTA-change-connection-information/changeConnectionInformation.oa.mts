/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";





import {
    ChangeConnectionInformationArgument,
    _decode_ChangeConnectionInformationArgument,
    _encode_ChangeConnectionInformationArgument
} from "../CSTA-change-connection-information/ChangeConnectionInformationArgument.ta.mjs";

import {
    ChangeConnectionInformationResult,
    _decode_ChangeConnectionInformationResult,
    _encode_ChangeConnectionInformationResult
} from "../CSTA-change-connection-information/ChangeConnectionInformationResult.ta.mjs";



/**
 * @summary changeConnectionInformation
 * @description
 *
 * Change Connection Information (ECMA-269 §18.1.3 / ECMA-285 §16.1.3).
 * Direction: CF→SF. ROSE local CODE 377. Errors: `universalFailure`. Updates
 * `requestedConnectionInfo` on `connectionToBeChanged`.
 * The ack returns the actual connection information applied.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * changeConnectionInformation OPERATION ::= {     ARGUMENT         ChangeConnectionInformationArgument
 *     RESULT             ChangeConnectionInformationResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 377 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ChangeConnectionInformationArgument, ChangeConnectionInformationResult>}
 * @implements {OPERATION<ChangeConnectionInformationArgument, ChangeConnectionInformationResult>}
 */
export
const changeConnectionInformation: OPERATION<ChangeConnectionInformationArgument, ChangeConnectionInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ChangeConnectionInformationArgument,
        "&ResultType": _decode_ChangeConnectionInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ChangeConnectionInformationArgument,
        "&ResultType": _encode_ChangeConnectionInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 377 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
