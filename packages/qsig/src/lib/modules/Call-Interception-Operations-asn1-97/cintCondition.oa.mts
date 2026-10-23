/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CintCondArg, _decode_CintCondArg, _encode_CintCondArg } from "../Call-Interception-Operations-asn1-97/CintCondArg.ta.mjs";

/**
 * @summary cintCondition
 * @description
 *
 * Tell a preceding PINX of a call-failure condition it may use for
 * interception immediate (ECMA-221 §6.3.1, §6.6.1). No result. Sent
 * in DISCONNECT, or in PROGRESS when an in-band tone or announcement
 * is applied. A Transit PINX that does not itself intercept forwards
 * the same cause (§6.6.2). ROSE local CODE 68. Unlike the other
 * CINT operations, NFE `destinationEntity` is `anyTypeOfPINX`.
 * Interpretation APDU is `discardAnyUnrecognisedInvokePdu`
 * (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cintCondition OPERATION ::= {
 *     -- Sent to a preceding PINX to indicate a condition for possible interception
 *     ARGUMENT CintCondArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 68
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CintCondArg>}
 * @implements {OPERATION<CintCondArg>}
 */
export
const cintCondition: OPERATION<CintCondArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CintCondArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CintCondArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 68 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
