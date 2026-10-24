/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SSCTInitiateArg, _decode_SSCTInitiateArg, _encode_SSCTInitiateArg } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTInitiateArg.ta.mjs";
import { type DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Single-Step-Call-Transfer-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidCallState } from "../General-Error-List/invalidCallState.oa.mjs";
import { invalidRerouteingNumber } from "../Call-Transfer-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { establishmentFailure } from "../Call-Transfer-Operations-asn1-97/establishmentFailure.oa.mjs";
import { unspecified } from "../Single-Step-Call-Transfer-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary ssctInitiate
 * @description
 *
 * Transferring PINX toward the Transferred PINX, on the original call,
 * to ask a Rerouting PINX on that path to connect User B to User C.
 * The original call must be Active. ROSE local 99. Interpretation
 * APDU is `rejectAnyUnrecognisedInvokePdu` or omitted. NFE
 * `destinationEntity` is `endPINX`.
 * The result is returned in DISCONNECT on the original call once the
 * new connection is through-connected. The Rerouting PINX also sends
 * `callTransferComplete` (and, after an alerting transfer,
 * `callTransferActive`) to the Transferred PINX as in ECMA-178.
 * Timer T1 at the Transferring PINX is at least 50 s. On reject,
 * return error, or T1 expiry the original call continues.
 * Errors: `notAvailable` when the Rerouting PINX cannot perform the
 * request; `establishmentFailure` on timer T2 expiry, on timer T3
 * expiry when the digits are not enough to proceed, or when the new
 * connection clears; `supplementaryServiceInteractionNotAllowed` when
 * a SS-CT Transferring PINX has already sent `callTransferComplete`.
 * `invalidCallState`, `invalidRerouteingNumber`, and `unspecified`
 * are listed; ECMA-300 §6.5 does not define when those three are
 * chosen. ECMA-300 §6.3.1, §6.3.2.1, §6.5.1, §6.5.2, §6.8.9.2, §6.9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssctInitiate OPERATION ::= {
 *     -- sent from the Transferring PINX to the Rerouting PINX
 *     ARGUMENT SSCTInitiateArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | invalidCallState
 *         | invalidRerouteingNumber
 *         | establishmentFailure
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 99
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SSCTInitiateArg, DummyRes>}
 * @implements {OPERATION<SSCTInitiateArg, DummyRes>}
 */
export
const ssctInitiate: OPERATION<SSCTInitiateArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SSCTInitiateArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SSCTInitiateArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, invalidCallState, invalidRerouteingNumber, establishmentFailure, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 99 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
