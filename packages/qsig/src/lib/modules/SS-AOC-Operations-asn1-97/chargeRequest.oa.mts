/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ChargeRequestArg, _decode_ChargeRequestArg, _encode_ChargeRequestArg } from "../SS-AOC-Operations-asn1-97/ChargeRequestArg.ta.mjs";
import { ChargeRequestRes, _decode_ChargeRequestRes, _encode_ChargeRequestRes } from "../SS-AOC-Operations-asn1-97/ChargeRequestRes.ta.mjs";
import { freeOfCharge } from "../SS-AOC-Operations-asn1-97/freeOfCharge.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../SS-AOC-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary chargeRequest
 * @description
 *
 * Invokes SS-AOC, local code 59. The Originating PINX sends it in SETUP at call
 * establishment, or in FACILITY during the call, listing acceptable advice-mode
 * combinations (ECMA-212 §6.6.1.1.1, §6.6.1.1.2, §6.6.1.1.4). The result is the
 * one combination placed in operation. During the call, timer T1 (at least 15
 * s) guards the response (§6.10). A Terminating PINX rejects with
 * `freeOfCharge` (§6.6.4.2). The Outgoing Gateway returns `notAvailable` or
 * `freeOfCharge` when the accounting function rejects the request, and
 * `notAvailable` when it can accept none of the combinations offered while AOC
 * is already active (§6.6.2.2). `unspecified` and
 * `supplementaryServiceInteractionNotAllowed` are listed errors; §6.6 does not
 * state when they are returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
