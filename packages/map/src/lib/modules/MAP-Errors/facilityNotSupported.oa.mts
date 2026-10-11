/* eslint-disable */
import { FacilityNotSupParam, _decode_FacilityNotSupParam, _encode_FacilityNotSupParam } from "../MAP-ER-DataTypes/FacilityNotSupParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary facilityNotSupported
 * @description
 * 
 * Returned when the requested facility is not supported by the PLMN. Detailed
 * reasons may be Shape of location estimate not supported, or Needed LCS
 * capability not supported in serving node (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * Local code 21. Optional parameter `FacilityNotSupParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * facilityNotSupported  ERROR ::= {
 *     PARAMETER
 *     FacilityNotSupParam
 *     -- optional
 *     -- FacilityNotSupParam must not be used in version <3
 *     CODE    local:21 }
 * ```
 * 
 * @constant
 * @type {ERROR<FacilityNotSupParam>}
 * @implements {ERROR<FacilityNotSupParam>}
 */
export
const facilityNotSupported: ERROR<FacilityNotSupParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_FacilityNotSupParam,
    },
    encoderFor: {
        "&ParameterType": _encode_FacilityNotSupParam,
    },
    "&errorCode": { local: 21 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
