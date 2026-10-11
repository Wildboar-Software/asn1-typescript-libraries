/* eslint-disable */
import { AbsentSubscriberSM_Param, _decode_AbsentSubscriberSM_Param, _encode_AbsentSubscriberSM_Param } from "../MAP-ER-DataTypes/AbsentSubscriberSM-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary absentSubscriberSM
 * @description
 * 
 * Returned when the mobile terminated short message transfer cannot be
 * completed because the network cannot contact the subscriber. Diagnostic
 * information regarding the reason for the subscriber's absence may be included
 * (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 6. Optional parameter `AbsentSubscriberSM-Param` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * absentSubscriberSM  ERROR ::= {
 *     PARAMETER
 *     AbsentSubscriberSM-Param
 *     -- optional
 *     CODE    local:6 }
 * ```
 * 
 * @constant
 * @type {ERROR<AbsentSubscriberSM_Param>}
 * @implements {ERROR<AbsentSubscriberSM_Param>}
 */
export
const absentSubscriberSM: ERROR<AbsentSubscriberSM_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_AbsentSubscriberSM_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_AbsentSubscriberSM_Param,
    },
    "&errorCode": { local: 6 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
