/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DivertArg, _decode_DivertArg, _encode_DivertArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/DivertArg.ta.mjs";
// export { DivertArg, _decode_DivertArg, _encode_DivertArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/DivertArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary pumiDivert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumiDivert OPERATION ::= {
 *     -- Sent from the PUMI-detect PINX to the Rerouteing PINX.
 *     ARGUMENT DivertArg
 *     RESULT DummyRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 94
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DivertArg, DummyRes>}
 * @implements {OPERATION<DivertArg, DummyRes>}
 */
export
const pumiDivert: OPERATION<DivertArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DivertArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DivertArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 94 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
