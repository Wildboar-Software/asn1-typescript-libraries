/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PRSetupArg, _decode_PRSetupArg, _encode_PRSetupArg } from "../Path-Replacement-Operations-asn1-97/PRSetupArg.ta.mjs";
import { type DummyResult, _decode_DummyResult, _encode_DummyResult } from "../Path-Replacement-Operations-asn1-97/DummyResult.ta.mjs";
import { criteriaPermanentlyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaPermanentlyUnachievable.oa.mjs";
import { criteriaTemporarilyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaTemporarilyUnachievable.oa.mjs";
import { invalidRerouteingNumber } from "../Path-Replacement-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Path-Replacement-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { temporarilyUnavailable } from "../Path-Replacement-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../Path-Replacement-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary pathReplaceSetup
 * @description
 *
 * Cooperating PINX, or a Transit PINX that is branching off a retained
 * path, to the Requesting PINX. Carried in the SETUP of the new
 * connection. The result is returned in CONNECT when that connection is
 * accepted; the old B-channel is then released. ROSE local 5.
 * Interpretation APDU: `clearCallIfAnyInvokePduNotRecognised`. NFE
 * `destinationEntity` is `endPINX`.
 * If `callIdentity` plus Called party number match no entity in
 * PR-Req-Initiated, the Requesting PINX clears the new connection with
 * cause 1, or with cause 29 and either `invalidRerouteingNumber` or
 * `unrecognizedCallIdentity`. If the connection is associated but
 * unsuitable, it clears with cause 29 and an appropriate error and
 * stays in PR-Req-Initiated.
 * If SS-CT has been invoked since `pathReplacePropose` was sent, the
 * Requesting PINX returns `temporarilyUnavailable` so switch-over does
 * not strand the transfer signalling. ECMA-176 §6.3.2.1, §6.5.1.3,
 * §6.5.1.4, §6.5.2.1, §6.6.3.2, §6.9.5.1.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathReplaceSetup OPERATION ::= {
 *     ARGUMENT PRSetupArg
 *     RESULT DummyResult
 *     ERRORS {
 *         criteriaPermanentlyUnachievable
 *         | criteriaTemporarilyUnachievable
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | temporarilyUnavailable
 *         | unspecified
 *     }
 *     CODE local: 5
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PRSetupArg, DummyResult>}
 * @implements {OPERATION<PRSetupArg, DummyResult>}
 */
export
const pathReplaceSetup: OPERATION<PRSetupArg, DummyResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PRSetupArg,
        "&ResultType": _decode_DummyResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_PRSetupArg,
        "&ResultType": _encode_DummyResult,
    },
    "&Errors": [ criteriaPermanentlyUnachievable, criteriaTemporarilyUnachievable, invalidRerouteingNumber, unrecognizedCallIdentity, temporarilyUnavailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 5 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
