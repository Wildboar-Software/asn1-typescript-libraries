/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_divertingLegInformation3_ArgumentType, _encode_divertingLegInformation3_ArgumentType, divertingLegInformation3_ArgumentType } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation3-ArgumentType.ta.mjs";
// export { divertingLegInformation3_ArgumentType, _decode_divertingLegInformation3_ArgumentType, _encode_divertingLegInformation3_ArgumentType } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation3-ArgumentType.ta.mjs";


/**
 * @summary divertingLegInformation3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation3 OPERATION ::= {
 *     -- Sent from the Diverted-to PINX to the Originating PINX
 *     ARGUMENT SEQUENCE {
 *         presentationAllowedIndicator PresentationAllowedIndicator,
 *         redirectionName [0] Name OPTIONAL,
 *         extension CHOICE {
 *             single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *         } OPTIONAL
 *     }
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 22
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<divertingLegInformation3_ArgumentType>}
 * @implements {OPERATION<divertingLegInformation3_ArgumentType>}
 */
export
const divertingLegInformation3: OPERATION<divertingLegInformation3_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_divertingLegInformation3_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_divertingLegInformation3_ArgumentType,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 22 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
