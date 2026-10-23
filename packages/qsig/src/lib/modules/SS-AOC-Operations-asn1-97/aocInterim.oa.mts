/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AocInterimArg, _decode_AocInterimArg, _encode_AocInterimArg } from "../SS-AOC-Operations-asn1-97/AocInterimArg.ta.mjs";

/**
 * @summary aocInterim
 * @description
 *
 * Interim recorded charges, local code 62, no return result. While interim
 * charge provision is in operation, the Outgoing Gateway PINX sends this invoke
 * periodically in a FACILITY message. How often is an implementation option
 * (ECMA-212 §6.6.2.1). ECMA-211 §7.2.2.2 sends a subtotal when a cost increment
 * occurs, and not more often than every t seconds, where t is also an
 * implementation option. The Originating PINX stays in Aoc-Orig-Active
 * (ECMA-212 §6.6.1.1.3). Interpretation APDU is
 * `discardAnyUnrecognisedInvokePdu` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocInterim OPERATION ::= {
 *     ARGUMENT AocInterimArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 62
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocInterimArg>}
 * @implements {OPERATION<AocInterimArg>}
 */
export
const aocInterim: OPERATION<AocInterimArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocInterimArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocInterimArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 62 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
