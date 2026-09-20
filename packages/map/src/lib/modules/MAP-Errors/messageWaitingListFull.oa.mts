/* eslint-disable */
import { MessageWaitListFullParam, _decode_MessageWaitListFullParam, _encode_MessageWaitListFullParam } from "../MAP-ER-DataTypes/MessageWaitListFullParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary messageWaitingListFull
 * @description
 * 
 * Returned when no further SC address can be added to the message waiting list
 * (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 33. Optional parameter `MessageWaitListFullParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messageWaitingListFull  ERROR ::= {
 *     PARAMETER
 *     MessageWaitListFullParam
 *     -- optional
 *     CODE    local:33 }
 * ```
 * 
 * @constant
 * @type {ERROR<MessageWaitListFullParam>}
 * @implements {ERROR<MessageWaitListFullParam>}
 */
export
const messageWaitingListFull: ERROR<MessageWaitListFullParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_MessageWaitListFullParam,
    },
    encoderFor: {
        "&ParameterType": _encode_MessageWaitListFullParam,
    },
    "&errorCode": { local: 33 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
