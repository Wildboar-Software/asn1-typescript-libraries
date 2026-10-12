/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellIdType  ::=  BIT STRING (SIZE (16))
 * ```
 */
export
type CellIdType = BIT_STRING;

let _cached_decoder_for_CellIdType: $.ASN1Decoder<CellIdType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellIdType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellIdType (el: _Element): CellIdType {
    if (!_cached_decoder_for_CellIdType) { _cached_decoder_for_CellIdType = $._decodeBitString; }
    return _cached_decoder_for_CellIdType(el);
}

let _cached_encoder_for_CellIdType: $.ASN1Encoder<CellIdType> | null = null;

/**
 * @summary Encodes a(n) CellIdType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellIdType, encoded as an ASN.1 Element.
 */
export
function _encode_CellIdType (value: CellIdType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellIdType) { _cached_encoder_for_CellIdType = $._encodeBitString; }
    return _cached_encoder_for_CellIdType(value, elGetter);
}


/* eslint-enable */
