/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { EscapeRegisterAbortArgument, _decode_EscapeRegisterAbortArgument, _encode_EscapeRegisterAbortArgument } from "../CSTA-escape-register-abort/EscapeRegisterAbortArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary escapeRegisterAbort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * escapeRegisterAbort OPERATION ::= {     ARGUMENT        EscapeRegisterAbortArgument
 *     ERRORS            {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 366 }
 * ```
 * 
 * @constant
 * @type {OPERATION<EscapeRegisterAbortArgument>}
 * @implements {OPERATION<EscapeRegisterAbortArgument>}
 */
export
const escapeRegisterAbort: OPERATION<EscapeRegisterAbortArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EscapeRegisterAbortArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EscapeRegisterAbortArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 366 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
