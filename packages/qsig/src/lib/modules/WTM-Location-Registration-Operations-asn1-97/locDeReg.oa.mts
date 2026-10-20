/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { LocDeRegArg, _decode_LocDeRegArg, _encode_LocDeRegArg } from "../WTM-Location-Registration-Operations-asn1-97/LocDeRegArg.ta.mjs";
// export { LocDeRegArg, _decode_LocDeRegArg, _encode_LocDeRegArg } from "../WTM-Location-Registration-Operations-asn1-97/LocDeRegArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../WTM-Location-Registration-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../WTM-Location-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary locDeReg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locDeReg OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX.
 *     ARGUMENT LocDeRegArg
 *     RESULT DummyRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 52
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<LocDeRegArg, DummyRes>}
 * @implements {OPERATION<LocDeRegArg, DummyRes>}
 */
export
const locDeReg: OPERATION<LocDeRegArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocDeRegArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocDeRegArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 52 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
