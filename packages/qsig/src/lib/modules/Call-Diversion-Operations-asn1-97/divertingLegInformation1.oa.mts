/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_divertingLegInformation1_ArgumentType, _encode_divertingLegInformation1_ArgumentType, divertingLegInformation1_ArgumentType } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation1-ArgumentType.ta.mjs";

/**
 * @summary divertingLegInformation1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation1 OPERATION ::= {
 *     -- Sent from the Rerouteing PINX to the Originating PINX
 *     ARGUMENT SEQUENCE {
 *         diversionReason DiversionReason,
 *         subscriptionOption SubscriptionOption,
 *         nominatedNr PartyNumber,
 *         extension CHOICE {
 *             single [9] IMPLICIT Extension {{DiversionExtensionSet}},
 *             multiple [10] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *         } OPTIONAL
 *     }
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 20
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<divertingLegInformation1_ArgumentType>}
 * @implements {OPERATION<divertingLegInformation1_ArgumentType>}
 */
export
const divertingLegInformation1: OPERATION<divertingLegInformation1_ArgumentType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_divertingLegInformation1_ArgumentType,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_divertingLegInformation1_ArgumentType,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 20 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
