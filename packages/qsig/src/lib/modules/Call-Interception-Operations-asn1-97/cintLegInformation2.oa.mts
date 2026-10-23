/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CintInformation2Arg, _decode_CintInformation2Arg, _encode_CintInformation2Arg } from "../Call-Interception-Operations-asn1-97/CintInformation2Arg.ta.mjs";

/**
 * @summary cintLegInformation2
 * @description
 *
 * Interception notification from the Intercepting PINX to the
 * Intercepted-to PINX, in the SETUP of the new call (ECMA-221
 * §6.3.1, §6.6.4.1, §6.6.5.1). No result. That SETUP shall not also
 * carry `divertingLegInformation2`. The Intercepted-to PINX notifies
 * the intercepted-to user with the cause and any called number or
 * name, then waits for presentation-restriction information before
 * sending `divertingLegInformation3` (§6.6.6.1; ECMA-220 §6.2.2.2.1).
 * ROSE local CODE 67. NFE `destinationEntity` is `endPINX`.
 * Interpretation APDU is `discardAnyUnrecognisedInvokePdu`
 * (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cintLegInformation2 OPERATION ::= {
 *     -- Sent from the Intercepting PINX to the Intercepted-to PINX --
 *     ARGUMENT CintInformation2Arg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 67
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CintInformation2Arg>}
 * @implements {OPERATION<CintInformation2Arg>}
 */
export
const cintLegInformation2: OPERATION<CintInformation2Arg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CintInformation2Arg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CintInformation2Arg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 67 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
