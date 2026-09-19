/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Mechanism_name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Mechanism-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type Mechanism_name = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_Mechanism_name: $.ASN1Decoder<Mechanism_name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Mechanism_name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Mechanism_name (el: _Element): Mechanism_name {
    if (!_cached_decoder_for_Mechanism_name) { _cached_decoder_for_Mechanism_name = $._decodeObjectIdentifier; }
    return _cached_decoder_for_Mechanism_name(el);
}

let _cached_encoder_for_Mechanism_name: $.ASN1Encoder<Mechanism_name> | null = null;

/**
 * @summary Encodes a(n) Mechanism_name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mechanism_name, encoded as an ASN.1 Element.
 */
export
function _encode_Mechanism_name (value: Mechanism_name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Mechanism_name) { _cached_encoder_for_Mechanism_name = $._encodeObjectIdentifier; }
    return _cached_encoder_for_Mechanism_name(value, elGetter);
}


/* eslint-enable */
