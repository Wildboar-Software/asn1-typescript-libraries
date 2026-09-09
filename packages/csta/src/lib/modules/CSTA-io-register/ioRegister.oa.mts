/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { IORegisterArgument, _decode_IORegisterArgument, _encode_IORegisterArgument } from "../CSTA-io-register/IORegisterArgument.ta.mjs";

import { IORegisterResult, _decode_IORegisterResult, _encode_IORegisterResult } from "../CSTA-io-register/IORegisterResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary ioRegister
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ioRegister OPERATION ::= {    ARGUMENT        IORegisterArgument
 *     RESULT            IORegisterResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 340 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IORegisterArgument, IORegisterResult>}
 * @implements {OPERATION<IORegisterArgument, IORegisterResult>}
 */
export
const ioRegister: OPERATION<IORegisterArgument, IORegisterResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IORegisterArgument,
        "&ResultType": _decode_IORegisterResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IORegisterArgument,
        "&ResultType": _encode_IORegisterResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 340 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
