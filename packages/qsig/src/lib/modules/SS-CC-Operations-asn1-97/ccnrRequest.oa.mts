/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CcRequestArg, _decode_CcRequestArg, _encode_CcRequestArg } from "../SS-CC-Operations-asn1-97/CcRequestArg.ta.mjs";
import { CcRequestRes, _decode_CcRequestRes, _encode_CcRequestRes } from "../SS-CC-Operations-asn1-97/CcRequestRes.ta.mjs";
import { shortTermRejection } from "../SS-CC-Operations-asn1-97/shortTermRejection.oa.mjs";
import { longTermRejection } from "../SS-CC-Operations-asn1-97/longTermRejection.oa.mjs";
import { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary ccnrRequest
 * @description
 *
 * Invokes Completion of Calls on No Reply (ECMA-186 §6.5.2.1.2).
 * Same signalling as `ccbsRequest`, after a call to User B has gone
 * unanswered. Local code 27. The Terminating PINX monitors User B
 * for becoming free after a later period of activity (§6.5.3.1.2).
 * Which activities count is outside the scope of ECMA-186 §6.1 and
 * ECMA-185 §7.1.1. Timer T1 and the errors are those of
 * `ccbsRequest` (§6.5.3.2.1, §6.10.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-185/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccnrRequest OPERATION ::= {
 *     ARGUMENT CcRequestArg
 *     RESULT CcRequestRes
 *     ERRORS {
 *         shortTermRejection
 *         | longTermRejection
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 27
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcRequestArg, CcRequestRes>}
 * @implements {OPERATION<CcRequestArg, CcRequestRes>}
 */
export
const ccnrRequest: OPERATION<CcRequestArg, CcRequestRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcRequestArg,
        "&ResultType": _decode_CcRequestRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcRequestArg,
        "&ResultType": _encode_CcRequestRes,
    },
    "&Errors": [ shortTermRejection, longTermRejection, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 27 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
