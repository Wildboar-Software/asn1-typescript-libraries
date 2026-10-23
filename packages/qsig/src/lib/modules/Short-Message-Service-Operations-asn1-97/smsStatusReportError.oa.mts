/* eslint-disable */
import { _decode_smsStatusReportError_ParameterType, _encode_smsStatusReportError_ParameterType, smsStatusReportError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsStatusReportError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary smsStatusReportError
 * @description
 *
 * Rejection of `smsStatusReport` (ECMA-325 §6.5.1.2.3, Annex E.9). ROSE local
 * CODE 1028. The Sending User PINX or Sending User Message Centre returns it
 * to the Service Centre with an appropriate `failureCause`.
 *
 * §6.5 does not name which Table E.4 value to use. `scAddressSaved` is
 * specified by pointing at §E.6.4, but §6.5 never stores a Service Centre
 * address while handling a status report.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsStatusReportError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         failureCause FailureCause,
 *         protocolIdentifier [0] IMPLICIT ProtocolIdentifier OPTIONAL,
 *         userData [1] IMPLICIT UserData OPTIONAL,
 *         scAddressSaved [2] IMPLICIT BOOLEAN DEFAULT FALSE
 *     }
 *     CODE local: 1028
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<smsStatusReportError_ParameterType>}
 * @implements {ERROR<smsStatusReportError_ParameterType>}
 */
export
const smsStatusReportError: ERROR<smsStatusReportError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_smsStatusReportError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_smsStatusReportError_ParameterType,
    },
    "&errorCode": { local: 1028 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
