/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CauseValue, _encode_CauseValue, CauseValue } from "../MAP-MS-DataTypes/CauseValue.ta.mjs";


import { maxNumOfCAMEL_O_CauseValueCriteria } from "./maxNumOfCAMEL-O-CauseValueCriteria.va.mjs";

/**
 * @summary O_CauseValueCriteria
 * @description
 *
 * Q.763 cause values used as O-BCSM CAMEL TDP criteria (SIZE 1..5). (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-CauseValueCriteria    ::=  SEQUENCE SIZE(1..maxNumOfCAMEL-O-CauseValueCriteria) OF
 *     CauseValue
 * ```
 */
export
type O_CauseValueCriteria = CauseValue[]; // SequenceOfType

let _cached_decoder_for_O_CauseValueCriteria: $.ASN1Decoder<O_CauseValueCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) O_CauseValueCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_O_CauseValueCriteria (el: _Element): O_CauseValueCriteria {
    if (!_cached_decoder_for_O_CauseValueCriteria) { _cached_decoder_for_O_CauseValueCriteria = $._decodeSequenceOf<CauseValue>(() => _decode_CauseValue); }
    const value = _cached_decoder_for_O_CauseValueCriteria(el);
    if (value.length < 1 || value.length > maxNumOfCAMEL_O_CauseValueCriteria) {
        throw new ASN1SizeError("O_CauseValueCriteria violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_O_CauseValueCriteria: $.ASN1Encoder<O_CauseValueCriteria> | null = null;

/**
 * @summary Encodes a(n) O_CauseValueCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_CauseValueCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_O_CauseValueCriteria (value: O_CauseValueCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_O_CauseValueCriteria) { _cached_encoder_for_O_CauseValueCriteria = $._encodeSequenceOf<CauseValue>(() => _encode_CauseValue, $.BER); }
    return _cached_encoder_for_O_CauseValueCriteria(value, elGetter);
}


/* eslint-enable */
