/* eslint-disable */
import { _decode_smsDeliverError_ParameterType, _encode_smsDeliverError_ParameterType, smsDeliverError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsDeliverError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary smsDeliverError
 * @description
 *
 * Rejection of `smsDeliver` (ECMA-325 §6.5.3.2.1, §6.5.4.2, §6.5.5.2, Annex
 * E.6). ROSE local CODE 1026. The Receiving User PINX or Message Centre
 * returns it toward the Service Centre.
 *
 * Delivery failure with Short Message Waiting Data uses
 * `memoryCapacityExceeded` or, at a PINX, `simSmsStorageFull`, and
 * `scAddressSaved` TRUE. Without that data, `scAddressSaved` is FALSE and the
 * same causes are used. The Service Centre keeps the Short Message and waits
 * for `scAlert` only for those causes (or an extra Cause information element).
 * Any other `failureCause` makes it delete the Short Message. All Table E.4
 * values are allowed; other integers are reserved (§E.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsDeliverError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         failureCause FailureCause,
 *         protocolIdentifier [0] IMPLICIT ProtocolIdentifier OPTIONAL,
 *         userData [1] IMPLICIT UserData OPTIONAL,
 *         scAddressSaved [2] IMPLICIT BOOLEAN DEFAULT FALSE
 *     }
 *     CODE local: 1026
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<smsDeliverError_ParameterType>}
 * @implements {ERROR<smsDeliverError_ParameterType>}
 */
export
const smsDeliverError: ERROR<smsDeliverError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_smsDeliverError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_smsDeliverError_ParameterType,
    },
    "&errorCode": { local: 1026 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
