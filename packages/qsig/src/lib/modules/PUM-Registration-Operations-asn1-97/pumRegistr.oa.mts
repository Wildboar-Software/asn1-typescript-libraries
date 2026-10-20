/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PumRegistrArg, _decode_PumRegistrArg, _encode_PumRegistrArg } from "../PUM-Registration-Operations-asn1-97/PumRegistrArg.ta.mjs";
// export { PumRegistrArg, _decode_PumRegistrArg, _encode_PumRegistrArg } from "../PUM-Registration-Operations-asn1-97/PumRegistrArg.ta.mjs";
import { PumRegistrRes, _decode_PumRegistrRes, _encode_PumRegistrRes } from "../PUM-Registration-Operations-asn1-97/PumRegistrRes.ta.mjs";
// export { PumRegistrRes, _decode_PumRegistrRes, _encode_PumRegistrRes } from "../PUM-Registration-Operations-asn1-97/PumRegistrRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { temporarilyUnavailable } from "../PUM-Registration-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../PUM-Registration-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { pumUserNotSubscribedToThisServiceOpt } from "../PUM-Registration-Operations-asn1-97/pumUserNotSubscribedToThisServiceOpt.oa.mjs";
// export { pumUserNotSubscribedToThisServiceOpt } from "../PUM-Registration-Operations-asn1-97/pumUserNotSubscribedToThisServiceOpt.oa.mjs";
import { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
// export { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
import { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";
// export { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";


/**
 * @summary pumRegistr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumRegistr OPERATION ::= {
 *     -- Registration (sent from the Visitor PINX to the Home PINX or
 *     --                         from a Remote PINX to the Visitor PINX)
 *     ARGUMENT PumRegistrArg
 *     RESULT PumRegistrRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | unspecified
 *         | notAvailable
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | pumUserNotSubscribedToThisServiceOpt
 *         | pumUserFailedAuthentication
 *         | hostingAddrInvalid
 *     }
 *     CODE local: 89
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PumRegistrArg, PumRegistrRes>}
 * @implements {OPERATION<PumRegistrArg, PumRegistrRes>}
 */
export
const pumRegistr: OPERATION<PumRegistrArg, PumRegistrRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PumRegistrArg,
        "&ResultType": _decode_PumRegistrRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PumRegistrArg,
        "&ResultType": _encode_PumRegistrRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, unspecified, notAvailable, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, pumUserNotSubscribedToThisServiceOpt, pumUserFailedAuthentication, hostingAddrInvalid, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 89 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
