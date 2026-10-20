/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_smsStatusReportError_ParameterType, _encode_smsStatusReportError_ParameterType, smsStatusReportError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsStatusReportError-ParameterType.ta.mjs";
// export { smsStatusReportError_ParameterType, _decode_smsStatusReportError_ParameterType, _encode_smsStatusReportError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsStatusReportError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary smsStatusReportError
 * @description
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
