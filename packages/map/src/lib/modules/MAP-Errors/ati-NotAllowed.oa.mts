/* eslint-disable */
import { ATI_NotAllowedParam, _decode_ATI_NotAllowedParam, _encode_ATI_NotAllowedParam } from "../MAP-ER-DataTypes/ATI-NotAllowedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary ati_NotAllowed
 * @description
 * 
 * Any Time Interrogation user error. Not listed under clause 7.6.1.4; returned
 * as user error Any Time Interrogation Not Allowed on
 * MAP-ANY-TIME-INTERROGATION (3GPP TS 29.002 V19.1.0 clauses 8.11.1.3 and
 * 17.6.6).
 *
 * Local code 49. Optional parameter `ATI-NotAllowedParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ati-NotAllowed  ERROR ::= {
 *     PARAMETER
 *     ATI-NotAllowedParam
 *     -- optional
 *     CODE    local:49 }
 * ```
 * 
 * @constant
 * @type {ERROR<ATI_NotAllowedParam>}
 * @implements {ERROR<ATI_NotAllowedParam>}
 */
export
const ati_NotAllowed: ERROR<ATI_NotAllowedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ATI_NotAllowedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_ATI_NotAllowedParam,
    },
    "&errorCode": { local: 49 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
