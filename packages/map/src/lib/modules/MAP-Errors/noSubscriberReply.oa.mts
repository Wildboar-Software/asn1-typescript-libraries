/* eslint-disable */
import { NoSubscriberReplyParam, _decode_NoSubscriberReplyParam, _encode_NoSubscriberReplyParam } from "../MAP-ER-DataTypes/NoSubscriberReplyParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary noSubscriberReply
 * @description
 * 
 * Call set-up user error: no subscriber reply (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * Local code 46. Optional parameter `NoSubscriberReplyParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noSubscriberReply  ERROR ::= {
 *     PARAMETER
 *     NoSubscriberReplyParam
 *     -- optional
 *     CODE    local:46 }
 * ```
 * 
 * @constant
 * @type {ERROR<NoSubscriberReplyParam>}
 * @implements {ERROR<NoSubscriberReplyParam>}
 */
export
const noSubscriberReply: ERROR<NoSubscriberReplyParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_NoSubscriberReplyParam,
    },
    encoderFor: {
        "&ParameterType": _encode_NoSubscriberReplyParam,
    },
    "&errorCode": { local: 46 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
