/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeElement, _decode_AttributeElement, _encode_AttributeElement } from "../Z39-50-APDU-2001/AttributeElement.ta.mjs";


/**
 * @summary AttributeList
 * @description
 * 
 * Attributes qualifying one search term, Scan term, or sort access point
 * (ANSI/NISO Z39.50-2003 §3.7.1, §3.2.8.1.2). Whether a type may repeat, and
 * what repetition means, is defined by the attribute set. Repetition is not a
 * substitute for a boolean operator (Appendix Arch, ARCH 3.1.5). For a Class 1
 * set, an access-point attribute is mandatory in an operand, and repeated
 * values of one type use the complex attribute value (ARCH 3.2.1, ARCH
 * 3.1.5.1). This edition does not register bib-1 values.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeList  ::=  [44] IMPLICIT SEQUENCE OF AttributeElement
 * ```
 */
export
type AttributeList = AttributeElement[]; // SequenceOfType

let _cached_decoder_for_AttributeList: $.ASN1Decoder<AttributeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeList (el: _Element): AttributeList {
    if (!_cached_decoder_for_AttributeList) { _cached_decoder_for_AttributeList = $._decode_implicit<AttributeList>(() => $._decodeSequenceOf<AttributeElement>(() => _decode_AttributeElement)); }
    return _cached_decoder_for_AttributeList(el);
}

let _cached_encoder_for_AttributeList: $.ASN1Encoder<AttributeList> | null = null;

/**
 * @summary Encodes a(n) AttributeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeList (value: AttributeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeList) { _cached_encoder_for_AttributeList = $._encode_implicit(_TagClass.context, 44, () => $._encode_implicit(_TagClass.context, 44, () => $._encodeSequenceOf<AttributeElement>(() => _encode_AttributeElement, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_AttributeList(value, elGetter);
}


/* eslint-enable */
