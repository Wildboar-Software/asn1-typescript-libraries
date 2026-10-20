/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ChargeRequestArg, _decode_ChargeRequestArg, _encode_ChargeRequestArg } from "../SS-AOC-Operations-asn1-97/ChargeRequestArg.ta.mjs";
// export { ChargeRequestArg, _decode_ChargeRequestArg, _encode_ChargeRequestArg } from "../SS-AOC-Operations-asn1-97/ChargeRequestArg.ta.mjs";
import { ChargeRequestRes, _decode_ChargeRequestRes, _encode_ChargeRequestRes } from "../SS-AOC-Operations-asn1-97/ChargeRequestRes.ta.mjs";
// export { ChargeRequestRes, _decode_ChargeRequestRes, _encode_ChargeRequestRes } from "../SS-AOC-Operations-asn1-97/ChargeRequestRes.ta.mjs";
import { freeOfCharge } from "../SS-AOC-Operations-asn1-97/freeOfCharge.oa.mjs";
// export { freeOfCharge } from "../SS-AOC-Operations-asn1-97/freeOfCharge.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../SS-AOC-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-AOC-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary chargeRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chargeRequest OPERATION ::= {
 *     ARGUMENT ChargeRequestArg
 *     RESULT ChargeRequestRes
 *     ERRORS {
 *         freeOfCharge
 *         | supplementaryServiceInteractionNotAllowed
 *         | notAvailable
 *         | unspecified
 *     }
 *     CODE local: 59
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ChargeRequestArg, ChargeRequestRes>}
 * @implements {OPERATION<ChargeRequestArg, ChargeRequestRes>}
 */
export
const chargeRequest: OPERATION<ChargeRequestArg, ChargeRequestRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ChargeRequestArg,
        "&ResultType": _decode_ChargeRequestRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ChargeRequestArg,
        "&ResultType": _encode_ChargeRequestRes,
    },
    "&Errors": [ freeOfCharge, supplementaryServiceInteractionNotAllowed, notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 59 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
