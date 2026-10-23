/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";
import { remoteUserBusyAgain } from "../SS-CC-Operations-asn1-97/remoteUserBusyAgain.oa.mjs";
import { failureToMatch } from "../SS-CC-Operations-asn1-97/failureToMatch.oa.mjs";
import { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary ccRingout
 * @description
 *
 * User A has accepted SS-CC recall (ECMA-186 §6.5.2.1.5,
 * §6.5.2.1.6). No result. Local code 31. Without path reservation
 * the invoke is in the SETUP of the CC call. With path reservation
 * it is in a FACILITY on the reserved path. The Terminating PINX
 * extends the call to User B if User B is still free (§6.5.3.1.5,
 * §6.5.3.1.6). §6.5 does not say which `CcExtension` alternative is
 * sent.
 *
 * `remoteUserBusyAgain`, with cause 17, means User B is busy again
 * (§6.5.3.2.4). The request is kept only when service retention is
 * in use. `failureToMatch` means the call matches no request in
 * CC-Await-Call-Completion (§6.5.3.2.2). Receipt of `unspecified`
 * makes the Originating PINX delete the request (§6.5.2.2.6).
 * §6.5.3 does not say when `unspecified` is sent.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccRingout OPERATION ::= {
 *     ARGUMENT CcExtension
 *     RETURN RESULT FALSE
 *     ERRORS {
 *         remoteUserBusyAgain
 *         | failureToMatch
 *         | unspecified
 *     }
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 31
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcExtension>}
 * @implements {OPERATION<CcExtension>}
 */
export
const ccRingout: OPERATION<CcExtension> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcExtension,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcExtension,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ remoteUserBusyAgain, failureToMatch, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 31 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
