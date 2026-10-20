/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PumDelRegArg, _decode_PumDelRegArg, _encode_PumDelRegArg } from "../PUM-Registration-Operations-asn1-97/PumDelRegArg.ta.mjs";
// export { PumDelRegArg, _decode_PumDelRegArg, _encode_PumDelRegArg } from "../PUM-Registration-Operations-asn1-97/PumDelRegArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../PUM-Registration-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../PUM-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { temporarilyUnavailable } from "../PUM-Registration-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../PUM-Registration-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";


/**
 * @summary pumDelReg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumDelReg OPERATION ::= {
 *     -- Delete Registration (sent from the Home PINX to the Previous Visitor PINX)
 *     ARGUMENT PumDelRegArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | temporarilyUnavailable
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 90
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PumDelRegArg, DummyRes>}
 * @implements {OPERATION<PumDelRegArg, DummyRes>}
 */
export
const pumDelReg: OPERATION<PumDelRegArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PumDelRegArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PumDelRegArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, temporarilyUnavailable, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 90 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
