/* eslint-disable */
import { _decode_smsSubmitError_ParameterType, _encode_smsSubmitError_ParameterType, smsSubmitError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsSubmitError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary smsSubmitError
 * @description
 *
 * Rejection of `smsSubmit` (ECMA-325 §6.5.1.2.1, §6.5.3.2.1, Annex E.3). ROSE
 * local CODE 1027. The Service Centre returns it to the Sending User PINX or
 * Sending User Message Centre.
 *
 * §6.5.3.2.1 names causes `smRejectedDuplicateSM` and
 * `telematicInterworkingNotSupported`. The parameter's `failureCause` may be
 * any Table E.4 value; other integers are reserved (§E.3.1).
 * `serviceCentreTimeStamp` is mandatory. `protocolIdentifier` and `userData`
 * are optional echoes the Service Centre may extend with further headers.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsSubmitError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         failureCause FailureCause,
 *         serviceCentreTimeStamp ServiceCentreTimeStamp,
 *         protocolIdentifier [0] IMPLICIT ProtocolIdentifier OPTIONAL,
 *         userData [1] IMPLICIT UserData OPTIONAL
 *     }
 *     CODE local: 1027
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<smsSubmitError_ParameterType>}
 * @implements {ERROR<smsSubmitError_ParameterType>}
 */
export
const smsSubmitError: ERROR<smsSubmitError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_smsSubmitError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_smsSubmitError_ParameterType,
    },
    "&errorCode": { local: 1027 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
