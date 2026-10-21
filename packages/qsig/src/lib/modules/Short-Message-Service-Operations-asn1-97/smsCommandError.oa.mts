/* eslint-disable */
import { _decode_smsCommandError_ParameterType, _encode_smsCommandError_ParameterType, smsCommandError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsCommandError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary smsCommandError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsCommandError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         failureCause FailureCause,
 *         serviceCentreTimeStamp ServiceCentreTimeStamp,
 *         protocolIdentifier [0] IMPLICIT ProtocolIdentifier OPTIONAL,
 *         userData [1] IMPLICIT UserData OPTIONAL
 *     }
 *     CODE local: 1029
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<smsCommandError_ParameterType>}
 * @implements {ERROR<smsCommandError_ParameterType>}
 */
export
const smsCommandError: ERROR<smsCommandError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_smsCommandError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_smsCommandError_ParameterType,
    },
    "&errorCode": { local: 1029 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
