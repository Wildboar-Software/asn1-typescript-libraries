/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { err_legIDAlreadyAssigned } from "../IN-CS-1-Codes-appendix/err-legIDAlreadyAssigned.va.mjs";
// export { err_legIDAlreadyAssigned } from "../IN-CS-1-Codes-appendix/err-legIDAlreadyAssigned.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary legIDAlreadyAssigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * legIDAlreadyAssigned ERROR ::= {CODE  err-legIDAlreadyAssigned
 * }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const legIDAlreadyAssigned: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": err_legIDAlreadyAssigned /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
