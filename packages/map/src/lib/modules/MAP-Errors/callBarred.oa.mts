/* eslint-disable */
import { CallBarredParam, _decode_CallBarredParam, _encode_CallBarredParam } from "../MAP-ER-DataTypes/CallBarredParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary callBarred
 * @description
 * 
 * Optionally, additional information may be included for indicating either that
 * the call meets a barring condition set by the subscriber or that the call is
 * barred for operator reasons. For barring of Mobile Terminating Short Message,
 * the additional information may indicate "Unauthorised Message Originator"; if
 * the call is rejected due to the ACR supplementary service, the additional
 * information shall indicate "Anonymous Call Rejection" (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * Local code 13. Optional parameter `CallBarredParam` (3GPP TS 29.002 V19.1.0
 * clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callBarred  ERROR ::= {
 *     PARAMETER
 *     CallBarredParam
 *     -- optional
 *     CODE    local:13 }
 * ```
 * 
 * @constant
 * @type {ERROR<CallBarredParam>}
 * @implements {ERROR<CallBarredParam>}
 */
export
const callBarred: ERROR<CallBarredParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_CallBarredParam,
    },
    encoderFor: {
        "&ParameterType": _encode_CallBarredParam,
    },
    "&errorCode": { local: 13 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
