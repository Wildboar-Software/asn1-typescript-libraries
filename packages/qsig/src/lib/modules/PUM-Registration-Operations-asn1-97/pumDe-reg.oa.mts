/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PumDe_regArg, _decode_PumDe_regArg, _encode_PumDe_regArg } from "../PUM-Registration-Operations-asn1-97/PumDe-regArg.ta.mjs";
import { type DummyRes, _decode_DummyRes, _encode_DummyRes } from "../PUM-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { pumUserNotSubscribedToThisServiceOpt } from "../PUM-Registration-Operations-asn1-97/pumUserNotSubscribedToThisServiceOpt.oa.mjs";
import { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
import { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";
import { pumUserNotRegistered } from "../PUM-Registration-Operations-asn1-97/pumUserNotRegistered.oa.mjs";

/**
 * @summary pumDe_reg
 * @description
 *
 * De-register a PUM user (ECMA-282 §6.6). The Visitor PINX or a Remote PINX
 * sends it to the Home PINX. It also ends a session when the Visitor PINX
 * duration timer expires or the outgoing call limit is reached (§6.5.1.1,
 * conditional de-registration). ROSE local CODE 91. The result is `DummyRes`.
 * Timer T3, at least 15 s, runs in VisitDe-reg or RemoteDe-reg (§6.12.3). If
 * `serviceOption` is absent the Home PINX assumes InCall (§6.6.2.1). OutCall
 * with `hostingAddr` omitted clears every OutCall session of this user; AllCall
 * with `hostingAddr` omitted clears the AllCall session and every OutCall
 * session. A present `hostingAddr` limits the request to that hosting address.
 * The Home PINX updates the HDB and may send `pumDelReg` to the affected
 * Visitor PINX. A request to clear every PUM user at one hosting address is one
 * invoke per user (§6.6.1.1). Errors: `invalidServedUserNr` when the user is
 * not in the HDB (§6.6.2.2); `notAuthorized` when de-registration is not
 * allowed; `unspecified`; `supplementaryServiceInteractionNotAllowed`;
 * `pumUserNotSubscribedToThisServiceOpt`; `pumUserFailedAuthentication`;
 * `hostingAddrInvalid`; `pumUserNotRegistered`. Clause 6 names only the first
 * two as Home PINX returns and is silent on when to return the others.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumDe-reg OPERATION ::= {
 *     -- De-registration (sent from the Visitor PINX or Remote PINX to the Home PINX)
 *     ARGUMENT PumDe-regArg
 *     RESULT DummyRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *         | pumUserNotSubscribedToThisServiceOpt
 *         | pumUserFailedAuthentication
 *         | hostingAddrInvalid
 *         | pumUserNotRegistered
 *     }
 *     CODE local: 91
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PumDe_regArg, DummyRes>}
 * @implements {OPERATION<PumDe_regArg, DummyRes>}
 */
export
const pumDe_reg: OPERATION<PumDe_regArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PumDe_regArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PumDe_regArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, unspecified, supplementaryServiceInteractionNotAllowed, pumUserNotSubscribedToThisServiceOpt, pumUserFailedAuthentication, hostingAddrInvalid, pumUserNotRegistered, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 91 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
