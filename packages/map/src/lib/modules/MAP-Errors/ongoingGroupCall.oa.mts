/* eslint-disable */
import { OngoingGroupCallParam, _decode_OngoingGroupCallParam, _encode_OngoingGroupCallParam } from "../MAP-ER-DataTypes/OngoingGroupCallParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary ongoingGroupCall
 * @description
 * 
 * Group Call user error. Not listed under clause 7.6.1.4; returned as user
 * error Ongoing Call on MAP_SEND_GROUP_CALL_INFO (3GPP TS 29.002 V19.1.0
 * clauses 10.7A.3 and 17.6.6).
 *
 * Local code 22. Optional parameter `OngoingGroupCallParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ongoingGroupCall  ERROR ::= {
 *     PARAMETER
 *     OngoingGroupCallParam
 *     -- optional
 *     CODE    local:22 }
 * ```
 * 
 * @constant
 * @type {ERROR<OngoingGroupCallParam>}
 * @implements {ERROR<OngoingGroupCallParam>}
 */
export
const ongoingGroupCall: ERROR<OngoingGroupCallParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_OngoingGroupCallParam,
    },
    encoderFor: {
        "&ParameterType": _encode_OngoingGroupCallParam,
    },
    "&errorCode": { local: 22 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
