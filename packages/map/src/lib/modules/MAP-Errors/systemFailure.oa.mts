/* eslint-disable */
import { SystemFailureParam, _decode_SystemFailureParam, _encode_SystemFailureParam } from "../MAP-ER-DataTypes/SystemFailureParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary systemFailure
 * @description
 * 
 * Returned when a task cannot be performed because of a problem in the entity
 * reporting the error or in another entity. The type of entity or network
 * resource may be indicated by the network resource or additional network
 * resource parameter. If and only if the problem is in the entity reporting the
 * error, a cause of failure (`FailureCauseParam`) shall be included (3GPP TS
 * 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 34. Optional parameter `SystemFailureParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemFailure  ERROR ::= {
 *     PARAMETER
 *     SystemFailureParam
 *     -- optional
 *     CODE    local:34 }
 * ```
 * 
 * @constant
 * @type {ERROR<SystemFailureParam>}
 * @implements {ERROR<SystemFailureParam>}
 */
export
const systemFailure: ERROR<SystemFailureParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SystemFailureParam,
    },
    encoderFor: {
        "&ParameterType": _encode_SystemFailureParam,
    },
    "&errorCode": { local: 34 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
