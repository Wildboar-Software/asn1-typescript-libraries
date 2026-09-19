/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ASO_qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASO-qualifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ASO_qualifier = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_ASO_qualifier: $.ASN1Decoder<ASO_qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASO_qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASO_qualifier (el: _Element): ASO_qualifier {
    if (!_cached_decoder_for_ASO_qualifier) { _cached_decoder_for_ASO_qualifier = $._decodeObjectIdentifier; }
    return _cached_decoder_for_ASO_qualifier(el);
}

let _cached_encoder_for_ASO_qualifier: $.ASN1Encoder<ASO_qualifier> | null = null;

/**
 * @summary Encodes a(n) ASO_qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASO_qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_ASO_qualifier (value: ASO_qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASO_qualifier) { _cached_encoder_for_ASO_qualifier = $._encodeObjectIdentifier; }
    return _cached_encoder_for_ASO_qualifier(value, elGetter);
}


/* eslint-enable */
