/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ScAlertArg, _decode_ScAlertArg, _encode_ScAlertArg } from "../Short-Message-Service-Operations-asn1-97/ScAlertArg.ta.mjs";
// export { ScAlertArg, _decode_ScAlertArg, _encode_ScAlertArg } from "../Short-Message-Service-Operations-asn1-97/ScAlertArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Short-Message-Service-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Short-Message-Service-Operations-asn1-97/DummyRes.ta.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary scAlert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scAlert OPERATION ::= {
 *     -- sent from the Receiving User PINX or the Receiving User Message Centre to the Service Centre
 *     ARGUMENT ScAlertArg
 *     RESULT DummyRes
 *     ERRORS {unspecified}
 *     CODE local: 111
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ScAlertArg, DummyRes>}
 * @implements {OPERATION<ScAlertArg, DummyRes>}
 */
export
const scAlert: OPERATION<ScAlertArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ScAlertArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ScAlertArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 111 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
