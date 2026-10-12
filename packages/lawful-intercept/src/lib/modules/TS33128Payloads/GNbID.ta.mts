/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GNbID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNbID  ::=  BIT STRING(SIZE(22..32))
 * ```
 */
export
type GNbID = BIT_STRING;

let _cached_decoder_for_GNbID: $.ASN1Decoder<GNbID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GNbID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GNbID (el: _Element): GNbID {
    if (!_cached_decoder_for_GNbID) { _cached_decoder_for_GNbID = $._decodeBitString; }
    return _cached_decoder_for_GNbID(el);
}

let _cached_encoder_for_GNbID: $.ASN1Encoder<GNbID> | null = null;

/**
 * @summary Encodes a(n) GNbID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GNbID, encoded as an ASN.1 Element.
 */
export
function _encode_GNbID (value: GNbID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GNbID) { _cached_encoder_for_GNbID = $._encodeBitString; }
    return _cached_encoder_for_GNbID(value, elGetter);
}


/* eslint-enable */
