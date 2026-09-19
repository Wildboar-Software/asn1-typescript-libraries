/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellPortionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellPortionID  ::=  INTEGER (0..4095)
 * ```
 */
export
type CellPortionID = INTEGER;

let _cached_decoder_for_CellPortionID: $.ASN1Decoder<CellPortionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellPortionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellPortionID (el: _Element): CellPortionID {
    if (!_cached_decoder_for_CellPortionID) { _cached_decoder_for_CellPortionID = $._decodeInteger; }
    return _cached_decoder_for_CellPortionID(el);
}

let _cached_encoder_for_CellPortionID: $.ASN1Encoder<CellPortionID> | null = null;

/**
 * @summary Encodes a(n) CellPortionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellPortionID, encoded as an ASN.1 Element.
 */
export
function _encode_CellPortionID (value: CellPortionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellPortionID) { _cached_encoder_for_CellPortionID = $._encodeInteger; }
    return _cached_encoder_for_CellPortionID(value, elGetter);
}


/* eslint-enable */
