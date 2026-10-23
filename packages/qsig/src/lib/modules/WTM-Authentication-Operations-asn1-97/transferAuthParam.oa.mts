/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_transferAuthParam_ArgumentType, _encode_transferAuthParam_ArgumentType, transferAuthParam_ArgumentType } from "../WTM-Authentication-Operations-asn1-97/transferAuthParam-ArgumentType.ta.mjs";

/**
 * @summary transferAuthParam
 * @description
 *
 * Unconfirmed operation for the interaction of SS-WTAT with wireless terminal
 * information exchange (ANF-WTINFO, ECMA-302). Local code 77. Direction is Home
 * PINX to Visitor PINX (ECMA-306 §6.3.1). On receipt of `getRRCInf`, the Home
 * PINX may include this invoke in the same message as the `getRRCInf` return
 * result. The `wtatParamInfo` choice shall be `authKey` or `challLen`
 * (§6.8.22.1). The Visitor PINX may store the information and use it later when
 * authenticating the WTM user. There is no return result.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transferAuthParam OPERATION ::= {
 *     -- from Home PINX to Visitor PINX --
 *     ARGUMENT SEQUENCE {
 *         wtatParamInfo WtatParamInfo,
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
