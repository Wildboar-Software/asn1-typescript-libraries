/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ID  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ID = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_ID: $.ASN1Decoder<ID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ID (el: _Element): ID {
    if (!_cached_decoder_for_ID) { _cached_decoder_for_ID = $._decodeObjectIdentifier; }
    return _cached_decoder_for_ID(el);
}

let _cached_encoder_for_ID: $.ASN1Encoder<ID> | null = null;

/**
 * @summary Encodes a(n) ID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ID, encoded as an ASN.1 Element.
 */
export
function _encode_ID (value: ID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ID) { _cached_encoder_for_ID = $._encodeObjectIdentifier; }
    return _cached_encoder_for_ID(value, elGetter);
}


/* eslint-enable */
