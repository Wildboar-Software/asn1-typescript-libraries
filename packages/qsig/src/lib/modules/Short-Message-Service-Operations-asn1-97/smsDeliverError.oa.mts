/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_smsDeliverError_ParameterType, _encode_smsDeliverError_ParameterType, smsDeliverError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsDeliverError-ParameterType.ta.mjs";
// export { smsDeliverError_ParameterType, _decode_smsDeliverError_ParameterType, _encode_smsDeliverError_ParameterType } from "../Short-Message-Service-Operations-asn1-97/smsDeliverError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary smsDeliverError
 * @description
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
