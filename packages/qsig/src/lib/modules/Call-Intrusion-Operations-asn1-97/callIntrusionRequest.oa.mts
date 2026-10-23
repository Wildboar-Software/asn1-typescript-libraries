/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CIRequestArg, _decode_CIRequestArg, _encode_CIRequestArg } from "../Call-Intrusion-Operations-asn1-97/CIRequestArg.ta.mjs";
import { CIRequestRes, _decode_CIRequestRes, _encode_CIRequestRes } from "../Call-Intrusion-Operations-asn1-97/CIRequestRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { notBusy } from "../Call-Intrusion-Operations-asn1-97/notBusy.oa.mjs";
import { temporarilyUnavailable } from "../Call-Intrusion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { notAuthorized } from "../Call-Intrusion-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../Call-Intrusion-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary callIntrusionRequest
 * @description
 *
 * Invokes Call Intrusion (ECMA-203 §6.6.1.1). The Originating PINX
 * sends the calling user's CICL to the Terminating PINX. Local code
 * 43. Without path retention the invoke is in SETUP. With path
 * retention it is in a FACILITY after `serviceAvailable` showed that
 * SS-CI is invokable. The same invoke, in FACILITY, reinvokes
 * intrusion during wait on busy (§6.6.1.5). Timer T1 is at least
 * 30 s (§6.10.1). NFE destination is the end PINX; the Interpretation
 * APDU is omitted (§6.3.3.1).
 *
 * A result of `unwantedUserIntruded` means a three-party conference
 * and state CI-Orig-Invoked. `unwantedUserIsolated` means the
 * unwanted user was disconnected (§6.6.1.1, §6.6.2.1.1). On the
 * first intrusion the result is in CONNECT. During wait on busy it
 * is in FACILITY (§6.6.2.5.1).
 *
 * `notBusy` is returned when the called user is not busy
 * (§6.6.2.1.2). `temporarilyUnavailable` is used when timer T5
 * expires, when `callIntrusionGetCIPL` is rejected for a reason
 * other than unrecognized operation, or when the established call
 * clears but the called user stays busy (§6.6.2.1.2, §6.6.2.5.2).
 * `notAuthorized` is defined for insufficient CICL (§6.3.1).
 * When intrusion is impossible for any other reason, including a
 * CIPL that is too high, §6.6.2.1.2 requires an error other than
 * `notBusy` and does not name it. `notAvailable`, `unspecified`,
 * and `supplementaryServiceInteractionNotAllowed` are only listed
 * in the ERRORS set (§6.3.1); §6.6 and §6.7 do not name them.
 *
 * §6.6.1.1.2 also treats ALERTING, CONNECT, or DISCONNECT without
 * a `callOfferRequest` result as failure of this operation. That
 * operation is not part of SS-CI (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIntrusionRequest OPERATION ::= {
 *     ARGUMENT CIRequestArg
 *     RESULT CIRequestRes
 *     ERRORS {
 *         notAvailable
 *         | notBusy
 *         | temporarilyUnavailable
 *         | notAuthorized
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 43
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CIRequestArg, CIRequestRes>}
 * @implements {OPERATION<CIRequestArg, CIRequestRes>}
 */
export
const callIntrusionRequest: OPERATION<CIRequestArg, CIRequestRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CIRequestArg,
        "&ResultType": _decode_CIRequestRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CIRequestArg,
        "&ResultType": _encode_CIRequestRes,
    },
    "&Errors": [ notAvailable, notBusy, temporarilyUnavailable, notAuthorized, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 43 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
