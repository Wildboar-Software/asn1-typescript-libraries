/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type DummyArg, _decode_DummyArg, _encode_DummyArg } from "../SS-AOC-Operations-asn1-97/DummyArg.ta.mjs";

/**
 * @summary getFinalCharge
 * @description
 *
 * Asks for the final charge when the calling user releases first, local code
 * 60, no return result. If interim or final charge provision is in operation,
 * the Originating PINX suspends clearing, sends this invoke in FACILITY, starts
 * timer T2 (at least 15 s), and waits in Aoc-Orig-Wait-Charge (ECMA-212
 * §6.6.1.1.3, §6.10). The charge arrives later as `aocFinal` in DISCONNECT. The
 * argument carries no charge data (ECMA-211 §9.2.1.10). If neither interim nor
 * final provision is in operation, the Gateway clears the call in both
 * directions (ECMA-212 §6.6.2.2). Interpretation APDU is
 * `clearCallIfAnyInvokePduNotRecognised` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getFinalCharge OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 60
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg>}
 * @implements {OPERATION<DummyArg>}
 */
export
const getFinalCharge: OPERATION<DummyArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 60 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
