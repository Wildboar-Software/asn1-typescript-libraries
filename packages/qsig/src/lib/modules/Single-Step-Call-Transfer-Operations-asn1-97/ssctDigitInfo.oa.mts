/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SSCTDigitInfoArg, _decode_SSCTDigitInfoArg, _encode_SSCTDigitInfoArg } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTDigitInfoArg.ta.mjs";

/**
 * @summary ssctDigitInfo
 * @description
 *
 * Unconfirmed. Transferred PINX to Rerouting PINX, carrying further
 * digits of User C's number after `ssctPostDial`. ROSE local 102.
 * Interpretation APDU is `rejectAnyUnrecognisedInvokePdu` or omitted.
 * NFE `destinationEntity` is `endPINX`. Honoured only in
 * SSCT-Await-Info; ignored in every other state. Incomplete digits
 * restart timer T3. A final number, or `sendingComplete`, stops T3
 * and lets the Rerouting PINX extend the call. ECMA-300 §6.3.1,
 * §6.3.2.1, §6.5.2.2, §6.5.3.1, §6.9.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssctDigitInfo OPERATION ::= {
 *     -- sent from the Transferred PINX to the Rerouting PINX
 *     ARGUMENT SSCTDigitInfoArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 102
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SSCTDigitInfoArg>}
 * @implements {OPERATION<SSCTDigitInfoArg>}
 */
export
const ssctDigitInfo: OPERATION<SSCTDigitInfoArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SSCTDigitInfoArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SSCTDigitInfoArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 102 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
