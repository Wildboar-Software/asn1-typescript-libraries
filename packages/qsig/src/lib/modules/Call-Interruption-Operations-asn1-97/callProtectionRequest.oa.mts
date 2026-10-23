/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CPIPRequestArg, _decode_CPIPRequestArg, _encode_CPIPRequestArg } from "../Call-Interruption-Operations-asn1-97/CPIPRequestArg.ta.mjs";

/**
 * @summary callProtectionRequest
 * @description
 *
 * Invoke SS-CPIP (ECMA-264 §6.9). No result. In the forward direction the
 * Originating PINX sends it in SETUP with the calling user's CPIPL and saves
 * that level for the call (§6.9.1.1). In the backward direction the
 * Terminating PINX sends it in CONNECT only when the called user's CPIPL is
 * higher than the level already saved; a lower level is ignored (§6.9.3.1,
 * §6.9.3.2). Transit PINXs store the value and pass the invoke on
 * (§6.9.2.1). If SS-CPIP is not invoked forward, the saved level is zero.
 * How a CPIPL is assigned is outside the standard. ROSE local CODE 88. NFE
 * destinationEntity is anyTypeOfPINX. The Interpretation APDU is
 * discardAnyUnrecognisedInvokePdu (§6.3.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callProtectionRequest OPERATION ::= {
 *     ARGUMENT CPIPRequestArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 88
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CPIPRequestArg>}
 * @implements {OPERATION<CPIPRequestArg>}
 */
export
const callProtectionRequest: OPERATION<CPIPRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CPIPRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CPIPRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 88 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
