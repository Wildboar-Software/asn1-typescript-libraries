/* eslint-disable */
import { IllegalEquipmentParam, _decode_IllegalEquipmentParam, _encode_IllegalEquipmentParam } from "../MAP-ER-DataTypes/IllegalEquipmentParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary illegalEquipment
 * @description
 * 
 * Returned when the IMEI check procedure has shown that the IMEI is
 * prohibited-listed or not permitted-listed (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * Local code 12. Optional parameter `IllegalEquipmentParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * illegalEquipment  ERROR ::= {
 *     PARAMETER
 *     IllegalEquipmentParam
 *     -- optional
 *     -- IllegalEquipmentParam must not be used in version <3
 *     CODE    local:12 }
 * ```
 * 
 * @constant
 * @type {ERROR<IllegalEquipmentParam>}
 * @implements {ERROR<IllegalEquipmentParam>}
 */
export
const illegalEquipment: ERROR<IllegalEquipmentParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_IllegalEquipmentParam,
    },
    encoderFor: {
        "&ParameterType": _encode_IllegalEquipmentParam,
    },
    "&errorCode": { local: 12 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
