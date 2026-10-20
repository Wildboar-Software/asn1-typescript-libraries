/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { LocUpdArg, _decode_LocUpdArg, _encode_LocUpdArg } from "../WTM-Location-Registration-Operations-asn1-97/LocUpdArg.ta.mjs";
// export { LocUpdArg, _decode_LocUpdArg, _encode_LocUpdArg } from "../WTM-Location-Registration-Operations-asn1-97/LocUpdArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../WTM-Location-Registration-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../WTM-Location-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../WTM-Location-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../WTM-Location-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary locUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locUpdate OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX.
 *     ARGUMENT LocUpdArg
 *     RESULT DummyRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | unspecified
 *     }
 *     CODE local: 50
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<LocUpdArg, DummyRes>}
 * @implements {OPERATION<LocUpdArg, DummyRes>}
 */
export
const locUpdate: OPERATION<LocUpdArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocUpdArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocUpdArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 50 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
