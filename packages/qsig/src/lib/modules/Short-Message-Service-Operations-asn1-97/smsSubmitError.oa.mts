/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_smsSubmitError_ParameterType, _encode_smsSubmitError_ParameterType, smsSubmitError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsSubmitError-ParameterType.ta.mjs";
// export { smsSubmitError_ParameterType, _decode_smsSubmitError_ParameterType, _encode_smsSubmitError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsSubmitError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary smsSubmitError
 * @description
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
