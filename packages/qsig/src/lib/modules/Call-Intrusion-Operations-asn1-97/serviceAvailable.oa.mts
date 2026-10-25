/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type ServiceAvailableArg, _decode_ServiceAvailableArg, _encode_ServiceAvailableArg } from "../Call-Intrusion-Operations-asn1-97/ServiceAvailableArg.ta.mjs";

/**
 * @summary serviceAvailable
 * @description
 *
 * Reports why a network connection was retained (ECMA-203 §A.5.2).
 * The Terminating PINX sends the invoke in FACILITY or PROGRESS
 * and starts timer PRT1 (at least 60 s, §A.8). No result. Local
 * code 42. Bits set to ONE are services that can be invoked now.
 * SS-CI is invokable when one of `ci-low`, `ci-medium`, or
 * `ci-high` is set (§6.6.1.1). §6.3.1 does not say which bit
 * matches which CICL. NFE and Interpretation APDU requirements
 * match `pathRetain` (§A.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
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
