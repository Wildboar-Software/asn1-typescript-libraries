/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PRRetainArg, _decode_PRRetainArg, _encode_PRRetainArg } from "../Path-Replacement-Operations-asn1-97/PRRetainArg.ta.mjs";
import { DummyResult, _decode_DummyResult, _encode_DummyResult } from "../Path-Replacement-Operations-asn1-97/DummyResult.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { temporarilyUnavailable } from "../Path-Replacement-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { criteriaPermanentlyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaPermanentlyUnachievable.oa.mjs";
import { criteriaTemporarilyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaTemporarilyUnachievable.oa.mjs";
import { invalidRerouteingNumber } from "../Path-Replacement-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Path-Replacement-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { establishmentFailure } from "../Path-Replacement-Operations-asn1-97/establishmentFailure.oa.mjs";
import { unspecified } from "../Path-Replacement-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary pathReplaceRetain
 * @description
 *
 * Optional. Cooperating PINX or Transit PINX to the next PINX on the
 * old connection, asking that PINX to keep the connection that far and
 * continue replacement beyond it. The NFE is omitted so the next PINX
 * processes the invoke; a PINX that does not support retention rejects
 * it. ROSE local 6. Interpretation APDU is omitted or
 * `rejectAnyUnrecognisedInvokePdu`.
 * `callIdentity` and `rerouteingNumber` are copied from
 * `pathReplacePropose`, or from the retain that this PINX received.
 * On a return result the Cooperating PINX enters PR-Coop-Idle. A
 * Transit PINX forwards that result to the preceding PINX and enters
 * PR-Transit-Idle. Timer T4 (at least 30 s) guards the response.
 * On error or reject the PINX either sets up the new connection itself
 * or returns an error to the preceding PINX. From the Cooperating PINX
 * that error is a `pathReplacePropose` error. `notAvailable` is
 * listed; §6.6 does not say when it is chosen.
 * ECMA-176 §6.3.2.1, §6.6.1, §6.6.2, §6.6.3, §6.10.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathReplaceRetain OPERATION ::= {
 *     ARGUMENT PRRetainArg
 *     RESULT DummyResult
 *     ERRORS {
 *         notAvailable
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | criteriaPermanentlyUnachievable
 *         | criteriaTemporarilyUnachievable
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | establishmentFailure
 *         | unspecified
 *     }
 *     CODE local: 6
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PRRetainArg, DummyResult>}
 * @implements {OPERATION<PRRetainArg, DummyResult>}
 */
export
const pathReplaceRetain: OPERATION<PRRetainArg, DummyResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PRRetainArg,
        "&ResultType": _decode_DummyResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_PRRetainArg,
        "&ResultType": _encode_DummyResult,
    },
    "&Errors": [ notAvailable, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, criteriaPermanentlyUnachievable, criteriaTemporarilyUnachievable, invalidRerouteingNumber, unrecognizedCallIdentity, establishmentFailure, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 6 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
