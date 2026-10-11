/* eslint-disable */
import { NoGroupCallNbParam, _decode_NoGroupCallNbParam, _encode_NoGroupCallNbParam } from "../MAP-ER-DataTypes/NoGroupCallNbParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary noGroupCallNumberAvailable
 * @description
 * 
 * Group Call user error. Not listed under clause 7.6.1.4; returned when no
 * group call number is available on MAP_PREPARE_GROUP_CALL (3GPP TS 29.002
 * V19.1.0 clauses 10.4.3 and 17.6.6).
 *
 * Local code 50. Optional parameter `NoGroupCallNbParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noGroupCallNumberAvailable  ERROR ::= {
 *     PARAMETER
 *     NoGroupCallNbParam
 *     -- optional
 *     CODE    local:50 }
 * ```
 * 
 * @constant
 * @type {ERROR<NoGroupCallNbParam>}
 * @implements {ERROR<NoGroupCallNbParam>}
 */
export
const noGroupCallNumberAvailable: ERROR<NoGroupCallNbParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_NoGroupCallNbParam,
    },
    encoderFor: {
        "&ParameterType": _encode_NoGroupCallNbParam,
    },
    "&errorCode": { local: 50 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
