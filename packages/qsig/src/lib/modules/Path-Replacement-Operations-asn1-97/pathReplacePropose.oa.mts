/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PRProposeArg, _decode_PRProposeArg, _encode_PRProposeArg } from "../Path-Replacement-Operations-asn1-97/PRProposeArg.ta.mjs";
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
 * @summary pathReplacePropose
 * @description
 *
 * Requesting PINX to Cooperating PINX, on an Active call, asking for a
 * new connection back to the Requesting PINX. No return result: success
 * is a later `pathReplaceSetup`, and failure is a return error. ROSE
 * local 4. NFE is included and `destinationEntity` is `endPINX`.
 * Interpretation APDU is omitted or `rejectAnyUnrecognisedInvokePdu`.
 * Enters PR-Req-Initiated. Timer T1 there is at least 30 s; its expiry
 * abandons replacement and leaves the call on the old connection.
 * If `rerouteingNumber` shows that both ends are this PINX (a trombone),
 * the new connection stays inside the PINX and only clearing of the old
 * connection appears at Q.
 * A propose received while this PINX is already in PR-Req-Initiated is
 * answered with `collision`. During SS-CT, a Transferring, Primary, or
 * Secondary PINX answers with `temporarilyUnavailable`. Aborting
 * replacement in order to accept SS-CT uses
 * `supplementaryServiceInteractionNotAllowed`. `notAvailable` is
 * listed; §6.5 does not say when it is chosen.
 * ECMA-176 §6.3.1, §6.3.2.1, §6.5.1.3, §6.5.1.4, §6.5.2, §6.5.3,
 * §6.9.5, §6.10.1. §6.9.5.1.1 names the state PR-Req-Initiating;
 * §6.4.1.2 names it PR-Req-Initiated.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathReplacePropose OPERATION ::= {
 *     ARGUMENT PRProposeArg
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
 *     CODE local: 4
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PRProposeArg>}
 * @implements {OPERATION<PRProposeArg>}
 */
export
const pathReplacePropose: OPERATION<PRProposeArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PRProposeArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_PRProposeArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ notAvailable, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, criteriaPermanentlyUnachievable, criteriaTemporarilyUnachievable, invalidRerouteingNumber, unrecognizedCallIdentity, establishmentFailure, collision, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 4 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
