/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Transfer-Operations-asn1-97/DummyArg.ta.mjs";
import { CTIdentifyRes, _decode_CTIdentifyRes, _encode_CTIdentifyRes } from "../Call-Transfer-Operations-asn1-97/CTIdentifyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidCallState } from "../General-Error-List/invalidCallState.oa.mjs";
import { unspecified } from "../Call-Transfer-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary callTransferIdentify
 * @description
 *
 * Transferring PINX to Secondary PINX, on the secondary call, to start
 * transfer by rerouteing. The Secondary PINX returns `callIdentity` and
 * `rerouteingNumber` when it can participate, then waits in
 * CT-Await-Setup for `callTransferSetup` (timer T2, at least 50 s).
 * ROSE local 7. Interpretation APDU is
 * `rejectUnrecognizedInvokePdu` or omitted. NFE `destinationEntity`
 * is `endPINX`.
 * Errors: `notAvailable`, `invalidCallState`, `unspecified`,
 * `supplementaryServiceInteractionNotAllowed`. §6.5.3.4 forbids
 * `unrecognizedCallIdentity` here. That clause lists invalid call
 * state, a temporary condition, and rerouteing not implemented, and
 * does not bind those reasons to a particular error. On reject or
 * return error, the Transferring PINX may fall back to join.
 * Timer T1 (at least 10 s) guards this response. After SS-CFNR
 * rerouteing has started, the Secondary PINX returns
 * `supplementaryServiceInteractionNotAllowed`.
 * ECMA-178 §6.3.1, §6.3.2.1, §6.5.1.3, §6.5.1.4, §6.5.3.3, §6.5.3.4,
 * §6.8.7.3, §6.8.7.4, §6.9.1, §6.9.2; ECMA-177 §8.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferIdentify OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT CTIdentifyRes
 *     ERRORS {
 *         notAvailable
 *         | invalidCallState
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 7
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, CTIdentifyRes>}
 * @implements {OPERATION<DummyArg, CTIdentifyRes>}
 */
export
const callTransferIdentify: OPERATION<DummyArg, CTIdentifyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_CTIdentifyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_CTIdentifyRes,
    },
    "&Errors": [ notAvailable, invalidCallState, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 7 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
