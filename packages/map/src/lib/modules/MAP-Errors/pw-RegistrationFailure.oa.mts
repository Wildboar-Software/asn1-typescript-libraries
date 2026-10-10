/* eslint-disable */
import { PW_RegistrationFailureCause, _decode_PW_RegistrationFailureCause, _encode_PW_RegistrationFailureCause } from "../MAP-ER-DataTypes/PW-RegistrationFailureCause.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary pw_RegistrationFailure
 * @description
 * 
 * Supplementary-services user error; clause 7.6.1.4 refers the definition to
 * 3GPP TS 24.080 (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 37. Parameter `PW-RegistrationFailureCause` is required (3GPP TS
 * 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pw-RegistrationFailure  ERROR ::= {
 *     PARAMETER
 *     PW-RegistrationFailureCause
 *     CODE    local:37 }
 * ```
 * 
 * @constant
 * @type {ERROR<PW_RegistrationFailureCause>}
 * @implements {ERROR<PW_RegistrationFailureCause>}
 */
export
const pw_RegistrationFailure: ERROR<PW_RegistrationFailureCause> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_PW_RegistrationFailureCause,
    },
    encoderFor: {
        "&ParameterType": _encode_PW_RegistrationFailureCause,
    },
    "&errorCode": { local: 37 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
