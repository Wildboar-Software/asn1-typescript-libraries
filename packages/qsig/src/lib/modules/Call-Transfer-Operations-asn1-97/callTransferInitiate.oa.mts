/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CTInitiateArg, _decode_CTInitiateArg, _encode_CTInitiateArg } from "../Call-Transfer-Operations-asn1-97/CTInitiateArg.ta.mjs";
import { type DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Call-Transfer-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidCallState } from "../General-Error-List/invalidCallState.oa.mjs";
import { invalidRerouteingNumber } from "../Call-Transfer-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Call-Transfer-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { establishmentFailure } from "../Call-Transfer-Operations-asn1-97/establishmentFailure.oa.mjs";
import { unspecified } from "../Call-Transfer-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary callTransferInitiate
 * @description
 *
 * Transferring PINX to Primary PINX, on the primary call, after
 * `callTransferIdentify` succeeds. Relays that result's `callIdentity`
 * and `rerouteingNumber`. The Primary PINX opens a new connection
 * toward the Secondary PINX and returns the result in DISCONNECT on
 * the old primary call. ROSE local 9. Interpretation APDU is
 * `rejectUnrecognizedInvokePdu` or omitted. NFE `destinationEntity`
 * is `endPINX`.
 * Timer T3 (at least 50 s) runs at the Transferring PINX. Optional
 * timer T4 (at least 40 s) runs at the Primary PINX.
 * Errors: `notAvailable`, `invalidCallState`,
 * `invalidRerouteingNumber`, `unrecognizedCallIdentity`,
 * `establishmentFailure`, `unspecified`,
 * `supplementaryServiceInteractionNotAllowed`.
 * If the Primary PINX cannot participate it returns an error from that
 * list. On T4 expiry or clearing of the new connection it returns
 * `establishmentFailure`, or the `callTransferSetup` error if one
 * arrived. ECMA-178 §6.3.1, §6.3.2.1, §6.5.1.3, §6.5.1.4, §6.5.2.3,
 * §6.5.2.4, §6.9.3, §6.9.4; ECMA-177 §8.2.1.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferInitiate OPERATION ::= {
 *     ARGUMENT CTInitiateArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | invalidCallState
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | establishmentFailure
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 9
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTInitiateArg, DummyRes>}
 * @implements {OPERATION<CTInitiateArg, DummyRes>}
 */
export
const callTransferInitiate: OPERATION<CTInitiateArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTInitiateArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTInitiateArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, invalidCallState, invalidRerouteingNumber, unrecognizedCallIdentity, establishmentFailure, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 9 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
