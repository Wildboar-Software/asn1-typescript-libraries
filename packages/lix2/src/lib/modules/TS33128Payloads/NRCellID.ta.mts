/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NRCellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRCellID  ::=  BIT STRING (SIZE(36))
 * ```
 */
export
type NRCellID = BIT_STRING;

let _cached_decoder_for_NRCellID: $.ASN1Decoder<NRCellID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NRCellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NRCellID (el: _Element): NRCellID {
    if (!_cached_decoder_for_NRCellID) { _cached_decoder_for_NRCellID = $._decodeBitString; }
    return _cached_decoder_for_NRCellID(el);
}

let _cached_encoder_for_NRCellID: $.ASN1Encoder<NRCellID> | null = null;

/**
 * @summary Encodes a(n) NRCellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRCellID, encoded as an ASN.1 Element.
 */
export
function _encode_NRCellID (value: NRCellID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NRCellID) { _cached_encoder_for_NRCellID = $._encodeBitString; }
    return _cached_encoder_for_NRCellID(value, elGetter);
}


/* eslint-enable */
