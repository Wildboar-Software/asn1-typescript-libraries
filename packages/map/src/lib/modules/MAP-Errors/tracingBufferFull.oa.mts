/* eslint-disable */
import { TracingBufferFullParam, _decode_TracingBufferFullParam, _encode_TracingBufferFullParam } from "../MAP-ER-DataTypes/TracingBufferFullParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary tracingBufferFull
 * @description
 * 
 * Returned when tracing cannot be performed because the tracing capacity is
 * exceeded (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 40. Optional parameter `TracingBufferFullParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tracingBufferFull  ERROR ::= {
 *     PARAMETER
 *     TracingBufferFullParam
 *     -- optional
 *     CODE    local: 40 }
 * ```
 * 
 * @constant
 * @type {ERROR<TracingBufferFullParam>}
 * @implements {ERROR<TracingBufferFullParam>}
 */
export
const tracingBufferFull: ERROR<TracingBufferFullParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_TracingBufferFullParam,
    },
    encoderFor: {
        "&ParameterType": _encode_TracingBufferFullParam,
    },
    "&errorCode": { local: 40 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
