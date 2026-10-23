/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ServiceAvailableArg, _decode_ServiceAvailableArg, _encode_ServiceAvailableArg } from "../Do-Not-Disturb-Operations-asn1-97/ServiceAvailableArg.ta.mjs";

/**
 * @summary serviceAvailable
 * @description
 *
 * Report which requested supplementary services can be invoked, and
 * that the network connection is retained (ECMA-194 Annex A §A.5.2).
 * Sent in FACILITY, or in PROGRESS when progress description 8 is
 * sent with it. No result. For SS-DNDO the bit set to ONE is the
 * same `dndo-*` bit that was set in `pathRetain` (§6.6.1.1). The
 * Terminating PINX then runs timer PRT1 (>= 60 s, §A.8) in
 * PRTT-Retained. ROSE local CODE 42. The Interpretation APDU is
 * `discardAnyUnrecognisedInvokePdu`; NFE `destinationEntity` is
 * `endPINX` (§A.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceAvailable OPERATION ::= {
 *     ARGUMENT ServiceAvailableArg -- this operation may be used by other
 *     -- Supplementary Services using other
 *     -- values of the argument
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
