/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ServiceAvailableArg, _decode_ServiceAvailableArg, _encode_ServiceAvailableArg } from "../Call-Offer-Operations-asn1-97/ServiceAvailableArg.ta.mjs";

/**
 * @summary serviceAvailable
 * @description
 *
 * Reports why a network connection was retained (ECMA-192 §A.5.2).
 * The Terminating PINX sends the invoke in FACILITY or PROGRESS
 * when a condition for a requested service is met, and starts timer
 * PRT1 (at least 60 s, §A.8). No result. Local code 42. Bits set to
 * ONE are services that can be invoked now. For SS-CO, `callOffer`
 * means SS-CO is invokable (§6.6.2.1). NFE and Interpretation APDU
 * requirements are the same as for `pathRetain` (§A.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceAvailable OPERATION ::= {
 *     ARGUMENT ServiceAvailableArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 42
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ServiceAvailableArg>}
 * @implements {OPERATION<ServiceAvailableArg>}
 */
export
const serviceAvailable: OPERATION<ServiceAvailableArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ServiceAvailableArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ServiceAvailableArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 42 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
