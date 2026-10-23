/* eslint-disable */
import { type OPERATION } from "@wildboar/rose";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_transferAuthParam_ArgumentType, _encode_transferAuthParam_ArgumentType, transferAuthParam_ArgumentType } from "../CT-Authentication-Operations/transferAuthParam-ArgumentType.ta.mjs";
// export { transferAuthParam_ArgumentType, _decode_transferAuthParam_ArgumentType, _encode_transferAuthParam_ArgumentType } from "../CT-Authentication-Operations/transferAuthParam-ArgumentType.ta.mjs";


/**
 * @summary transferAuthParam
 * @description
 *
 * Unconfirmed operation for the interaction of SS-CTAT with cordless terminal
 * location registration (SS-CTLR, ECMA-216). Local code 77. The previous
 * Visitor PINX may send it to the Visitor PINX in the same message as the
 * `pisnEnquiry` result, when authentication parameters or generated challenge
 * and expected-response values for this PISN number are available (ECMA-243
 * §6.8.1). The Visitor PINX may store the information and use it later to
 * authenticate the CTM user. There is no return result.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transferAuthParam OPERATION ::= {
 *     -- from previous Visitor PINX to Visitor PINX --
 *     ARGUMENT SEQUENCE {
 *         info CtatParamInfo,
 *         dummyExtension DummyExtension OPTIONAL
 *     }
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 77
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<transferAuthParam_ArgumentType>}
 * @implements {OPERATION<transferAuthParam_ArgumentType>}
 */
export
const transferAuthParam: OPERATION<transferAuthParam_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_transferAuthParam_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_transferAuthParam_ArgumentType,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 77 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
