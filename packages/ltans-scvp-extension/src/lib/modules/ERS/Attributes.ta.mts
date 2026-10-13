/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Attributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Attributes  ::=  SET SIZE (1..MAX) OF Attribute
 *     (WITH COMPONENTS {
 *         ...,
 *         valuesWithContext   ABSENT
 *     })
 * ```
 */
export
type Attributes = Attribute[]; // SetOfType

let _cached_decoder_for_Attributes: $.ASN1Decoder<Attributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Attributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Attributes (el: _Element): Attributes {
    if (!_cached_decoder_for_Attributes) { _cached_decoder_for_Attributes = $._decodeSetOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_Attributes(el);
}

let _cached_encoder_for_Attributes: $.ASN1Encoder<Attributes> | null = null;

/**
 * @summary Encodes a(n) Attributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attributes, encoded as an ASN.1 Element.
 */
export
function _encode_Attributes (value: Attributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Attributes) { _cached_encoder_for_Attributes = $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_Attributes(value, elGetter);
}


/* eslint-enable */
