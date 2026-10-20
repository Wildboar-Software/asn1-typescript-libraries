/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PumDe_regArg, _decode_PumDe_regArg, _encode_PumDe_regArg } from "../PUM-Registration-Operations-asn1-97/PumDe-regArg.ta.mjs";
// export { PumDe_regArg, _decode_PumDe_regArg, _encode_PumDe_regArg } from "../PUM-Registration-Operations-asn1-97/PumDe-regArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../PUM-Registration-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../PUM-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { pumUserNotSubscribedToThisServiceOpt } from "../PUM-Registration-Operations-asn1-97/pumUserNotSubscribedToThisServiceOpt.oa.mjs";
// export { pumUserNotSubscribedToThisServiceOpt } from "../PUM-Registration-Operations-asn1-97/pumUserNotSubscribedToThisServiceOpt.oa.mjs";
import { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
// export { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
import { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";
// export { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";
import { pumUserNotRegistered } from "../PUM-Registration-Operations-asn1-97/pumUserNotRegistered.oa.mjs";
// export { pumUserNotRegistered } from "../PUM-Registration-Operations-asn1-97/pumUserNotRegistered.oa.mjs";


/**
 * @summary pumDe_reg
 * @description
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
