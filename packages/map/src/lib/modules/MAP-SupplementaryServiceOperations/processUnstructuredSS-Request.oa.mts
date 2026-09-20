/* eslint-disable */
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownAlphabet } from "../MAP-Errors/unknownAlphabet.oa.mjs";
import { USSD_Arg, _decode_USSD_Arg, _encode_USSD_Arg } from "../MAP-SS-DataTypes/USSD-Arg.ta.mjs";
import { USSD_Res, _decode_USSD_Res, _encode_USSD_Res } from "../MAP-SS-DataTypes/USSD-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary processUnstructuredSS_Request
 * @description
 *
 * MAP_PROCESS_UNSTRUCTURED_SS_REQUEST: relay information to allow unstructured
 * SS operation. Used MSC→VLR, VLR→HLR, HLR→gsmSCF and HLR→HLR. Confirmed.
 * Typical MAP path: VLR→HLR (also HLR↔gsmSCF). Local opcode 59. Timer is 10
 * minutes (ASN.1 comment, not a class letter). Distinctive error:
 * `unknownAlphabet`. (3GPP TS 29.002 V19.1.0 clauses 11.9.1, 17.3.2.20 and
 * 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * processUnstructuredSS-Request  OPERATION ::= {    --Timer 10 minutes
 *     ARGUMENT
 *     USSD-Arg
 *     RESULT
 *     USSD-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownAlphabet |
 *     callBarred}
 *     CODE    local:59 }
 * ```
 * 
 * @constant
 * @type {OPERATION<USSD_Arg, USSD_Res>}
 * @implements {OPERATION<USSD_Arg, USSD_Res>}
 */
export
const processUnstructuredSS_Request: OPERATION<USSD_Arg, USSD_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_USSD_Arg,
        "&ResultType": _decode_USSD_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_USSD_Arg,
        "&ResultType": _encode_USSD_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, unknownAlphabet, callBarred, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 59 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
