/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AocFinalArg, _decode_AocFinalArg, _encode_AocFinalArg } from "../SS-AOC-Operations-asn1-97/AocFinalArg.ta.mjs";

/**
 * @summary aocFinal
 * @description
 *
 * Final recorded charges, local code 61, no return result. The Outgoing Gateway
 * PINX sends it in a DISCONNECT when the accounting function supplies the final
 * charge, including after `getFinalCharge` (ECMA-212 §6.6.2.1). After transfer
 * or diversion, when the charged user has left the call, it is sent in the
 * SETUP of a call-independent signalling connection; `finalBillingId` is
 * `callTransfer` or the diversion cause (§6.6.2.3.1, §6.6.2.4.1).
 * Interpretation APDU is `discardAnyUnrecognisedInvokePdu` (§6.3.2.1). Supports
 * AOC-E and the total at the end of AOC-D (ECMA-212 §6.1, ECMA-211 §7.2.2.2,
 * §8.2.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocFinal OPERATION ::= {
 *     ARGUMENT AocFinalArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 61
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocFinalArg>}
 * @implements {OPERATION<AocFinalArg>}
 */
export
const aocFinal: OPERATION<AocFinalArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocFinalArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocFinalArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 61 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
