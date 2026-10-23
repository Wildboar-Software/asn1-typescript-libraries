/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PumInterrogArg, _decode_PumInterrogArg, _encode_PumInterrogArg } from "../PUM-Registration-Operations-asn1-97/PumInterrogArg.ta.mjs";
import { PumInterrogRes, _decode_PumInterrogRes, _encode_PumInterrogRes } from "../PUM-Registration-Operations-asn1-97/PumInterrogRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
import { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";
import { pumUserNotRegistered } from "../PUM-Registration-Operations-asn1-97/pumUserNotRegistered.oa.mjs";

/**
 * @summary pumInterrog
 * @description
 *
 * Interrogate registration sessions (ECMA-282 §6.7). The Visitor PINX or a
 * Remote PINX sends it to the Home PINX. When `homeInfoOnly` is FALSE, the Home
 * PINX also sends it to each relevant Visitor PINX to collect session
 * parameters, then returns the combined result (§6.7.2.1). ROSE local CODE 92.
 * Timer T5, at least 15 s, runs in VisitInterrogation, RemoteInterrogation, and
 * HomeInterrogation (§6.12.5). If T5 expires at the Home PINX, it still returns
 * the information it has (§6.7.2.2). The Visitor PINX, answering an invoke from
 * the Home PINX, returns `interrogParams`, or `pumUserNotRegistered` when the
 * user is not in the VDB (§6.7.1.2). Errors toward the Home PINX:
 * `invalidServedUserNr` when the user is not in the HDB; `notAuthorized` when
 * interrogation is not allowed (§6.7.2.2); `unspecified`;
 * `supplementaryServiceInteractionNotAllowed`; `pumUserFailedAuthentication`;
 * `hostingAddrInvalid`; `pumUserNotRegistered`. Clause 6 is silent on when to
 * return the last four except `pumUserNotRegistered` from the Visitor PINX.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumInterrog OPERATION ::= {
 *     -- Interrogation (sent from the Visitor PINX or Remote PINX to the Home PINX and
 *     --                         from the Home PINX to the Visitor PINX)
 *     ARGUMENT PumInterrogArg
 *     RESULT PumInterrogRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *         | pumUserFailedAuthentication
 *         | hostingAddrInvalid
 *         | pumUserNotRegistered
 *     }
 *     CODE local: 92
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PumInterrogArg, PumInterrogRes>}
 * @implements {OPERATION<PumInterrogArg, PumInterrogRes>}
 */
export
const pumInterrog: OPERATION<PumInterrogArg, PumInterrogRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PumInterrogArg,
        "&ResultType": _decode_PumInterrogRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PumInterrogArg,
        "&ResultType": _encode_PumInterrogRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, unspecified, supplementaryServiceInteractionNotAllowed, pumUserFailedAuthentication, hostingAddrInvalid, pumUserNotRegistered, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 92 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
