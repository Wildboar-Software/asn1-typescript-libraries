/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AocRateArg, _decode_AocRateArg, _encode_AocRateArg } from "../SS-AOC-Operations-asn1-97/AocRateArg.ta.mjs";

/**
 * @summary aocRate
 * @description
 *
 * Charge-rate provision, local code 63, no return result. While charge rate
 * provision is in operation, the Outgoing Gateway PINX sends this invoke with
 * the `chargeRequest` return result, and again in a FACILITY message whenever
 * the rate changes (ECMA-212 §6.6.2.1). The Originating PINX stays in
 * Aoc-Orig-Active (§6.6.1.1.3). NFE destination is `endPINX` and the
 * Interpretation APDU is `discardAnyUnrecognisedInvokePdu` (§6.3.2.1). This is
 * the protocol form of AOC-S (ECMA-212 §6.1, ECMA-211 §6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocRate OPERATION ::= {
 *     ARGUMENT AocRateArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 63
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocRateArg>}
 * @implements {OPERATION<AocRateArg>}
 */
export
const aocRate: OPERATION<AocRateArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocRateArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocRateArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 63 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
