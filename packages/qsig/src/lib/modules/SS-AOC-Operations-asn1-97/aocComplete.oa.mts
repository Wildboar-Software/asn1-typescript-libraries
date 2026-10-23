/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AocCompleteArg, _decode_AocCompleteArg, _encode_AocCompleteArg } from "../SS-AOC-Operations-asn1-97/AocCompleteArg.ta.mjs";
import { AocCompleteRes, _decode_AocCompleteRes, _encode_AocCompleteRes } from "../SS-AOC-Operations-asn1-97/AocCompleteRes.ta.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary aocComplete
 * @description
 *
 * Call Transfer interaction, local code 64. Before continuing transfer, the
 * Originating PINX sends this invoke in FACILITY, starts timer T1, and waits in
 * Aoc-Orig-Wait-Completion (ECMA-212 §6.9.3.1.1, §6.10). The result is whether
 * user A is charged before the transfer, after it, both, or neither
 * (§6.6.2.3.1). The only listed error is
 * `supplementaryServiceInteractionNotAllowed`; §6.6 and §6.9 do not say when
 * that error is returned. On error, reject, or T1 expiry the Originating PINX
 * continues transfer anyway (§6.9.3.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocComplete OPERATION ::= {
 *     ARGUMENT AocCompleteArg
 *     RESULT AocCompleteRes
 *     ERRORS {supplementaryServiceInteractionNotAllowed}
 *     CODE local: 64
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocCompleteArg, AocCompleteRes>}
 * @implements {OPERATION<AocCompleteArg, AocCompleteRes>}
 */
export
const aocComplete: OPERATION<AocCompleteArg, AocCompleteRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocCompleteArg,
        "&ResultType": _decode_AocCompleteRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocCompleteArg,
        "&ResultType": _encode_AocCompleteRes,
    },
    "&Errors": [ supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 64 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
