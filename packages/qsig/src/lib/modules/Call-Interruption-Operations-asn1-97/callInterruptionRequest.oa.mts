/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CPIRequestArg, _decode_CPIRequestArg, _encode_CPIRequestArg } from "../Call-Interruption-Operations-asn1-97/CPIRequestArg.ta.mjs";

/**
 * @summary callInterruptionRequest
 * @description
 *
 * Invoke SS-CPI (ECMA-264 §6.8.1.1). No result. Sent in the SETUP that
 * establishes the call, carrying the calling user's CPICL. How that level is
 * assigned is outside the standard. On a congested inter-PINX link the
 * Originating or Transit PINX becomes the Interrupting PINX and interrupts
 * an established call whose CPIPL is strictly lower (§6.8.3.1). A call with
 * no CPICL is not a priority call (§4.14). After interruption the same
 * argument is placed in the new SETUP (§6.8.3.1). ROSE local CODE 87. NFE
 * destinationEntity is anyTypeOfPINX. The Interpretation APDU is
 * discardAnyUnrecognisedInvokePdu (§6.3.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callInterruptionRequest OPERATION ::= {
 *     ARGUMENT CPIRequestArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 87
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CPIRequestArg>}
 * @implements {OPERATION<CPIRequestArg>}
 */
export
const callInterruptionRequest: OPERATION<CPIRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CPIRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CPIRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 87 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
