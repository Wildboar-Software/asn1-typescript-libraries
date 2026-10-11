/* eslint-disable */
import { ResumeCallHandlingArg, _decode_ResumeCallHandlingArg, _encode_ResumeCallHandlingArg } from "../MAP-CH-DataTypes/ResumeCallHandlingArg.ta.mjs";
import { ResumeCallHandlingRes, _decode_ResumeCallHandlingRes, _encode_ResumeCallHandlingRes } from "../MAP-CH-DataTypes/ResumeCallHandlingRes.ta.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { forwardingFailed } from "../MAP-Errors/forwardingFailed.oa.mjs";
import { or_NotAllowed } from "../MAP-Errors/or-NotAllowed.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary resumeCallHandling
 * @description
 *
 * MAP_RESUME_CALL_HANDLING: terminating VMSC asks the GMSC to resume handling
 * the call and forward it to the specified destination. Confirmed. Typical
 * path: VMSC→GMSC. Local opcode 6. Timer class `m` (15 s to 30 s). Distinctive
 * error: `forwardingFailed`. (3GPP TS 29.002 V19.1.0 clauses 10.3.1, 17.1.2,
 * 17.3.2.7 and 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resumeCallHandling  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     ResumeCallHandlingArg
 *     RESULT
 *     ResumeCallHandlingRes
 *     -- optional
 *     ERRORS {
 *     forwardingFailed |
 *     or-NotAllowed |
 *     unexpectedDataValue |
 *     dataMissing }
 *     CODE    local:6 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ResumeCallHandlingArg, ResumeCallHandlingRes>}
 * @implements {OPERATION<ResumeCallHandlingArg, ResumeCallHandlingRes>}
 */
export
const resumeCallHandling: OPERATION<ResumeCallHandlingArg, ResumeCallHandlingRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResumeCallHandlingArg,
        "&ResultType": _decode_ResumeCallHandlingRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResumeCallHandlingArg,
        "&ResultType": _encode_ResumeCallHandlingRes,
    },
    "&Errors": [ forwardingFailed, or_NotAllowed, unexpectedDataValue, dataMissing, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 6 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
