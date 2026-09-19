/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CRLNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CRLNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export
type CRLNumber = INTEGER;

let _cached_decoder_for_CRLNumber: $.ASN1Decoder<CRLNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CRLNumber (el: _Element): CRLNumber {
    if (!_cached_decoder_for_CRLNumber) { _cached_decoder_for_CRLNumber = $._decodeInteger; }
    return _cached_decoder_for_CRLNumber(el);
}

let _cached_encoder_for_CRLNumber: $.ASN1Encoder<CRLNumber> | null = null;

/**
 * @summary Encodes a(n) CRLNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLNumber, encoded as an ASN.1 Element.
 */
export
function _encode_CRLNumber (value: CRLNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CRLNumber) { _cached_encoder_for_CRLNumber = $._encodeInteger; }
    return _cached_encoder_for_CRLNumber(value, elGetter);
}


/* eslint-enable */
