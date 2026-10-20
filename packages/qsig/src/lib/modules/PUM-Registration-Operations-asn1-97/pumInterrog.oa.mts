/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PumInterrogArg, _decode_PumInterrogArg, _encode_PumInterrogArg } from "../PUM-Registration-Operations-asn1-97/PumInterrogArg.ta.mjs";
// export { PumInterrogArg, _decode_PumInterrogArg, _encode_PumInterrogArg } from "../PUM-Registration-Operations-asn1-97/PumInterrogArg.ta.mjs";
import { PumInterrogRes, _decode_PumInterrogRes, _encode_PumInterrogRes } from "../PUM-Registration-Operations-asn1-97/PumInterrogRes.ta.mjs";
// export { PumInterrogRes, _decode_PumInterrogRes, _encode_PumInterrogRes } from "../PUM-Registration-Operations-asn1-97/PumInterrogRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../PUM-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
// export { pumUserFailedAuthentication } from "../PUM-Registration-Operations-asn1-97/pumUserFailedAuthentication.oa.mjs";
import { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";
// export { hostingAddrInvalid } from "../PUM-Registration-Operations-asn1-97/hostingAddrInvalid.oa.mjs";
import { pumUserNotRegistered } from "../PUM-Registration-Operations-asn1-97/pumUserNotRegistered.oa.mjs";
// export { pumUserNotRegistered } from "../PUM-Registration-Operations-asn1-97/pumUserNotRegistered.oa.mjs";


/**
 * @summary pumInterrog
 * @description
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
