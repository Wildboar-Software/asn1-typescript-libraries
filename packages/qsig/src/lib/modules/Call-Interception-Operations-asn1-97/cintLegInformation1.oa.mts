/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CintInformation1Arg, _decode_CintInformation1Arg, _encode_CintInformation1Arg } from "../Call-Interception-Operations-asn1-97/CintInformation1Arg.ta.mjs";

/**
 * @summary cintLegInformation1
 * @description
 *
 * Interception notification from the Intercepting PINX to the
 * Originating PINX (ECMA-221 §6.3.1, §6.6.3). No result. On
 * interception immediate it is sent in FACILITY when the new call is
 * started (§6.6.4.1). On interception delayed it is sent when the
 * intercepted-to leg alerts, waits on busy, or connects (§6.6.5.1).
 * The Originating PINX may tell the calling user that the call was
 * intercepted, but shall not present `interceptedToNumber` until a
 * later `divertingLegInformation3` has `presentationIndicator` TRUE.
 * A further interception's cause is not forwarded; its intercepted-to
 * number may replace the one sent here (§6.6.5.1). ROSE local
 * CODE 66. NFE `destinationEntity` is `endPINX`. Interpretation APDU
 * is `discardAnyUnrecognisedInvokePdu` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cintLegInformation1 OPERATION ::= {
 *     -- Sent from the Intercepting PINX to the Originating PINX --
 *     ARGUMENT CintInformation1Arg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 66
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CintInformation1Arg>}
 * @implements {OPERATION<CintInformation1Arg>}
 */
export
const cintLegInformation1: OPERATION<CintInformation1Arg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CintInformation1Arg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CintInformation1Arg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 66 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
