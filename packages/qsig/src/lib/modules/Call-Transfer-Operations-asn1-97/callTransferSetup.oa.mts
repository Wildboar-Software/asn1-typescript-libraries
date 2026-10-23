/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CTSetupArg, _decode_CTSetupArg, _encode_CTSetupArg } from "../Call-Transfer-Operations-asn1-97/CTSetupArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Call-Transfer-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidCallState } from "../General-Error-List/invalidCallState.oa.mjs";
import { invalidRerouteingNumber } from "../Call-Transfer-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Call-Transfer-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { unspecified } from "../Call-Transfer-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary callTransferSetup
 * @description
 *
 * Primary PINX to Secondary PINX, in the SETUP of the new connection
 * during transfer by rerouteing. `callIdentity` is the value from
 * `callTransferInitiate`. The result is sent in CONNECT when the
 * secondary call is Active, in ALERTING when it is not, and in
 * PROGRESS at an outgoing gateway whose secondary call is Incoming
 * Call Proceeding or Overlap Receiving. ROSE local 10. Interpretation
 * APDU: `clearCallIfAnyInvokePduNotRecognised` (an unrecognised invoke
 * clears the new call). NFE `destinationEntity` is `endPINX`.
 * Errors: `notAvailable`, `invalidCallState`,
 * `invalidRerouteingNumber`, `unrecognizedCallIdentity`,
 * `unspecified`, `supplementaryServiceInteractionNotAllowed`.
 * If `callIdentity` matches no entity in CT-Await-Setup, the Secondary
 * PINX clears the new connection, either with cause 29 and
 * `unrecognizedCallIdentity` or with a Cause such as 1 and no return
 * error. ECMA-178 §6.3.1, §6.3.2.1, §6.5.2.3, §6.5.3.3, §6.5.3.4,
 * §6.7.1.1; ECMA-177 §8.2.1.5.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferSetup OPERATION ::= {
 *     ARGUMENT CTSetupArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | invalidCallState
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 10
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTSetupArg, DummyRes>}
 * @implements {OPERATION<CTSetupArg, DummyRes>}
 */
export
const callTransferSetup: OPERATION<CTSetupArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTSetupArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTSetupArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, invalidCallState, invalidRerouteingNumber, unrecognizedCallIdentity, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 10 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
