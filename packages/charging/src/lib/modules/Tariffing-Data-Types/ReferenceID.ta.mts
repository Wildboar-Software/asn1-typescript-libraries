/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferenceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type ReferenceID = INTEGER;

let _cached_decoder_for_ReferenceID: $.ASN1Decoder<ReferenceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReferenceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReferenceID (el: _Element): ReferenceID {
    if (!_cached_decoder_for_ReferenceID) { _cached_decoder_for_ReferenceID = $._decodeInteger; }
    return _cached_decoder_for_ReferenceID(el);
}

let _cached_encoder_for_ReferenceID: $.ASN1Encoder<ReferenceID> | null = null;

/**
 * @summary Encodes a(n) ReferenceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferenceID, encoded as an ASN.1 Element.
 */
export
function _encode_ReferenceID (value: ReferenceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReferenceID) { _cached_encoder_for_ReferenceID = $._encodeInteger; }
    return _cached_encoder_for_ReferenceID(value, elGetter);
}


/* eslint-enable */
