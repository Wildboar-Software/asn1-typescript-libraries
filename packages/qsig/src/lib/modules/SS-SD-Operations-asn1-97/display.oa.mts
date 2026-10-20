/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DisplayArg, _decode_DisplayArg, _encode_DisplayArg } from "../SS-SD-Operations-asn1-97/DisplayArg.ta.mjs";
// export { DisplayArg, _decode_DisplayArg, _encode_DisplayArg } from "../SS-SD-Operations-asn1-97/DisplayArg.ta.mjs";
import { unspecified } from "../SS-SD-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-SD-Operations-asn1-97/unspecified.oa.mjs";
import { noDisplayAvailable } from "../SS-SD-Operations-asn1-97/noDisplayAvailable.oa.mjs";
// export { noDisplayAvailable } from "../SS-SD-Operations-asn1-97/noDisplayAvailable.oa.mjs";
import { displayTemporarilyNotAvailable } from "../SS-SD-Operations-asn1-97/displayTemporarilyNotAvailable.oa.mjs";
// export { displayTemporarilyNotAvailable } from "../SS-SD-Operations-asn1-97/displayTemporarilyNotAvailable.oa.mjs";
import { notPresentable } from "../SS-SD-Operations-asn1-97/notPresentable.oa.mjs";
// export { notPresentable } from "../SS-SD-Operations-asn1-97/notPresentable.oa.mjs";


/**
 * @summary display
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * display OPERATION ::= {
 *     ARGUMENT DisplayArg
 *     RETURN RESULT FALSE
 *     ERRORS {
 *         unspecified
 *         | noDisplayAvailable
 *         | displayTemporarilyNotAvailable
 *         | notPresentable
 *     }
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 103
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DisplayArg>}
 * @implements {OPERATION<DisplayArg>}
 */
export
const display: OPERATION<DisplayArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DisplayArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DisplayArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ unspecified, noDisplayAvailable, displayTemporarilyNotAvailable, notPresentable, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 103 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
