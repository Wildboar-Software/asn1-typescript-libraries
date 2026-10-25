/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Path-Replacement-Operations-asn1-97/DummyArg.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { temporarilyUnavailable } from "../Path-Replacement-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { criteriaPermanentlyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaPermanentlyUnachievable.oa.mjs";
import { criteriaTemporarilyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaTemporarilyUnachievable.oa.mjs";
import { invalidRerouteingNumber } from "../Path-Replacement-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Path-Replacement-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { establishmentFailure } from "../Path-Replacement-Operations-asn1-97/establishmentFailure.oa.mjs";
import { collision } from "../Path-Replacement-Operations-asn1-97/collision.oa.mjs";
import { unspecified } from "../Path-Replacement-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary pathReplaceInvite
 * @description
 *
 * Optional. Inviting PINX to a Requesting PINX (either end of an Active
 * call), asking that end to start path replacement and thereby choosing
 * the direction of the new connection. No return result. Success is
 * clearing of the old connection, or a `pathReplaceRetain` return
 * result when the Inviting PINX sits on the retained part. ROSE
 * local 86. NFE is included and `destinationEntity` is `endPINX`.
 * Interpretation APDU is omitted or `rejectAnyUnrecognisedInvokePdu`.
 * The argument has no standardized elements. A return error may be
 * sent if the Requesting PINX cannot act in PR-Req-Idle, and may relay
 * a `pathReplacePropose` error. `notAvailable` is among the listed
 * errors; §6.5 does not say when it is chosen. The invoke is ignored in
 * PR-Req-Initiated and PR-Req-Completing. A Cooperating PINX in
 * PR-Coop-Retain or PR-Coop-Establishment may also return an error.
 * What the Inviting PINX does with an error is implementation
 * dependent. ECMA-176 §6.3.1, §6.3.2.1, §6.5.1.2, §6.5.5, §6.6.5;
 * ECMA-175 §1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-175/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathReplaceInvite OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RETURN RESULT FALSE
 *     ERRORS {
 *         notAvailable
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | criteriaPermanentlyUnachievable
 *         | criteriaTemporarilyUnachievable
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | establishmentFailure
 *         | collision
 *         | unspecified
 *     }
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 86
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg>}
 * @implements {OPERATION<DummyArg>}
 */
export
const pathReplaceInvite: OPERATION<DummyArg> = {
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
    "&Errors": [ notAvailable, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, criteriaPermanentlyUnachievable, criteriaTemporarilyUnachievable, invalidRerouteingNumber, unrecognizedCallIdentity, establishmentFailure, collision, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 86 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
