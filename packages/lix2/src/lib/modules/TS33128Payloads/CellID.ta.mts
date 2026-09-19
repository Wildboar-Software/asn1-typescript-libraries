/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type CellID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CellID: $.ASN1Decoder<CellID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellID (el: _Element): CellID {
    if (!_cached_decoder_for_CellID) { _cached_decoder_for_CellID = $._decodeOctetString; }
    return _cached_decoder_for_CellID(el);
}

let _cached_encoder_for_CellID: $.ASN1Encoder<CellID> | null = null;

/**
 * @summary Encodes a(n) CellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellID, encoded as an ASN.1 Element.
 */
export
function _encode_CellID (value: CellID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellID) { _cached_encoder_for_CellID = $._encodeOctetString; }
    return _cached_encoder_for_CellID(value, elGetter);
}


/* eslint-enable */
