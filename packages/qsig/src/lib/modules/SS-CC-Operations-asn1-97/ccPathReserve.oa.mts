/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";
import { remoteUserBusyAgain } from "../SS-CC-Operations-asn1-97/remoteUserBusyAgain.oa.mjs";
import { failureToMatch } from "../SS-CC-Operations-asn1-97/failureToMatch.oa.mjs";
import { failedDueToInterworking } from "../SS-CC-Operations-asn1-97/failedDueToInterworking.oa.mjs";
import { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary ccPathReserve
 * @description
 *
 * Reserves a bearer path before User A is recalled (ECMA-186
 * §6.5.1.1, §6.5.2.1.6). The Originating PINX sends the invoke in
 * the SETUP of the CC call, together with the original call's
 * basic-call information elements, and starts timer T4 (30-40 s,
 * §6.10.1). Local code 30. The Interpretation APDU is
 * `clearCallIfAnyInvokePduNotRecognised` (§6.3.2.1). §6.5 does not
 * say which `CcExtension` alternative is sent; the call identity is
 * in the SETUP, not in this argument.
 *
 * If path reservation is supported and User B is still free, the
 * Terminating PINX returns the result in PROGRESS with progress
 * description no. 8 and does not extend the call to User B yet
 * (§6.5.3.1.6). §6.5 does not define what that result contains.
 *
 * `remoteUserBusyAgain` means User B is busy again (§6.5.3.2.3).
 * `failureToMatch` means the SETUP matches no request (§6.5.3.2.2).
 * `failedDueToInterworking` is sent by an Outgoing Gateway PINX
 * toward a public ISDN (§6.6.2). A PINX that does not support path
 * reservation rejects the invoke as unrecognised (§6.5.3.2.2).
 * Receipt of `unspecified` makes the Originating PINX delete the
 * request (§6.5.2.2.5). §6.5.3 does not say when that error is sent.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccPathReserve OPERATION ::= {
 *     ARGUMENT CcExtension
 *     RESULT CcExtension
 *     ERRORS {
 *         remoteUserBusyAgain
 *         | failureToMatch
 *         | failedDueToInterworking
 *         | unspecified
 *     }
 *     CODE local: 30
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcExtension, CcExtension>}
 * @implements {OPERATION<CcExtension, CcExtension>}
 */
export
const ccPathReserve: OPERATION<CcExtension, CcExtension> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcExtension,
        "&ResultType": _decode_CcExtension,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcExtension,
        "&ResultType": _encode_CcExtension,
    },
    "&Errors": [ remoteUserBusyAgain, failureToMatch, failedDueToInterworking, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 30 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
