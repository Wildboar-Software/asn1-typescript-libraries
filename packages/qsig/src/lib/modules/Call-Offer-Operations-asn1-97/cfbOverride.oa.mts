/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Offer-Operations-asn1-97/DummyArg.ta.mjs";

/**
 * @summary cfbOverride
 * @description
 *
 * Overrides Call Forwarding Busy so that SS-CO applies at the first
 * busy user (ECMA-192 §6.9.7). The Originating PINX sends the invoke
 * in the SETUP of the new call, together with `callOfferRequest` or
 * with `pathRetain` (`callOffer` set to ONE). No result. Local code
 * 49. The NFE matches the accompanying operation, and the
 * Interpretation APDU is `discardAnyUnrecognisedInvokePdu`
 * (§6.9.7.2). If the called user is busy, the served PINX skips
 * SS-CFB and applies SS-CO (§6.9.7.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cfbOverride OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 49
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg>}
 * @implements {OPERATION<DummyArg>}
 */
export
const cfbOverride: OPERATION<DummyArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 49 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
