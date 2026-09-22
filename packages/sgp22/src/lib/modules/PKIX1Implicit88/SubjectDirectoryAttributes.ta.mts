/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../PKIX1Explicit88/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../PKIX1Explicit88/Attribute.ta.mjs";


/**
 * @summary SubjectDirectoryAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectDirectoryAttributes  ::=  SEQUENCE SIZE (1..MAX) OF Attribute
 * ```
 */
export
type SubjectDirectoryAttributes = Attribute[]; // SequenceOfType

let _cached_decoder_for_SubjectDirectoryAttributes: $.ASN1Decoder<SubjectDirectoryAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectDirectoryAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectDirectoryAttributes (el: _Element): SubjectDirectoryAttributes {
    if (!_cached_decoder_for_SubjectDirectoryAttributes) { _cached_decoder_for_SubjectDirectoryAttributes = $._decodeSequenceOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_SubjectDirectoryAttributes(el);
}

let _cached_encoder_for_SubjectDirectoryAttributes: $.ASN1Encoder<SubjectDirectoryAttributes> | null = null;

/**
 * @summary Encodes a(n) SubjectDirectoryAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectDirectoryAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectDirectoryAttributes (value: SubjectDirectoryAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectDirectoryAttributes) { _cached_encoder_for_SubjectDirectoryAttributes = $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_SubjectDirectoryAttributes(value, elGetter);
}


/* eslint-enable */
