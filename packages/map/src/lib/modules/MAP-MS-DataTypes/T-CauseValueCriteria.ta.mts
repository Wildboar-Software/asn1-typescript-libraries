/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CauseValue, _encode_CauseValue, CauseValue } from "../MAP-MS-DataTypes/CauseValue.ta.mjs";


import { maxNumOfCAMEL_T_CauseValueCriteria } from "./maxNumOfCAMEL-T-CauseValueCriteria.va.mjs";

/**
 * @summary T_CauseValueCriteria
 * @description
 *
 * Cause values that arm a terminating CAMEL TDP. Cause-value use refers to
 * ITU-T Recommendation Q.850.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-CauseValueCriteria    ::=  SEQUENCE SIZE(1..maxNumOfCAMEL-T-CauseValueCriteria) OF
 *     CauseValue
 * ```
 */
export
type T_CauseValueCriteria = CauseValue[]; // SequenceOfType

let _cached_decoder_for_T_CauseValueCriteria: $.ASN1Decoder<T_CauseValueCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_CauseValueCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_CauseValueCriteria (el: _Element): T_CauseValueCriteria {
    if (!_cached_decoder_for_T_CauseValueCriteria) { _cached_decoder_for_T_CauseValueCriteria = $._decodeSequenceOf<CauseValue>(() => _decode_CauseValue); }
    const value = _cached_decoder_for_T_CauseValueCriteria(el);
    if (value.length < 1 || value.length > maxNumOfCAMEL_T_CauseValueCriteria) {
        throw new ASN1SizeError("T_CauseValueCriteria violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_T_CauseValueCriteria: $.ASN1Encoder<T_CauseValueCriteria> | null = null;

/**
 * @summary Encodes a(n) T_CauseValueCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_CauseValueCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_T_CauseValueCriteria (value: T_CauseValueCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_CauseValueCriteria) { _cached_encoder_for_T_CauseValueCriteria = $._encodeSequenceOf<CauseValue>(() => _encode_CauseValue, $.BER); }
    return _cached_encoder_for_T_CauseValueCriteria(value, elGetter);
}


/* eslint-enable */
