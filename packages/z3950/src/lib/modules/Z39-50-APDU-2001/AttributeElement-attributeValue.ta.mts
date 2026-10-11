/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeElement_attributeValue_complex, _decode_AttributeElement_attributeValue_complex, _encode_AttributeElement_attributeValue_complex } from "../Z39-50-APDU-2001/AttributeElement-attributeValue-complex.ta.mjs";


/**
 * @summary AttributeElement_attributeValue
 * @description
 * 
 * Value of one attribute (ANSI/NISO Z39.50-2003 §4.1). `numeric` is an integer
 * from the attribute set. Version 2 must use `numeric`. `complex` supplies
 * several values of this type, and optional semantic-action codes. Version 3
 * provides `complex`; Class 1 prescribes it when a type repeats (Appendix Arch,
 * ARCH 3.1.5.1).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeElement-attributeValue ::= CHOICE {
 *     numeric [121] IMPLICIT INTEGER,
 *     -- If version 2 is in force, must select 'numeric' for attributeValue
 *     complex [224] IMPLICIT SEQUENCE {
 *         list [1] IMPLICIT SEQUENCE OF StringOrNumeric,
 *         semanticAction [2] IMPLICIT SEQUENCE OF INTEGER OPTIONAL
 *     }  -- See comment 10.
 * }
 * ```
 */
export
type AttributeElement_attributeValue =
    { numeric: INTEGER } /* CHOICE_ALT_ROOT */
    | { complex: AttributeElement_attributeValue_complex } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeElement_attributeValue: $.ASN1Decoder<AttributeElement_attributeValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeElement_attributeValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeElement_attributeValue (el: _Element): AttributeElement_attributeValue {
    if (!_cached_decoder_for_AttributeElement_attributeValue) { _cached_decoder_for_AttributeElement_attributeValue = $._decode_inextensible_choice<AttributeElement_attributeValue>({
    "CONTEXT 121": [ "numeric", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 224": [ "complex", $._decode_implicit<AttributeElement_attributeValue_complex>(() => _decode_AttributeElement_attributeValue_complex) ]
}); }
    return _cached_decoder_for_AttributeElement_attributeValue(el);
}

let _cached_encoder_for_AttributeElement_attributeValue: $.ASN1Encoder<AttributeElement_attributeValue> | null = null;

/**
 * @summary Encodes a(n) AttributeElement_attributeValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeElement_attributeValue, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeElement_attributeValue (value: AttributeElement_attributeValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeElement_attributeValue) { _cached_encoder_for_AttributeElement_attributeValue = $._encode_choice<AttributeElement_attributeValue>({
    "numeric": $._encode_implicit(_TagClass.context, 121, () => $._encodeInteger, $.BER),
    "complex": $._encode_implicit(_TagClass.context, 224, () => _encode_AttributeElement_attributeValue_complex, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeElement_attributeValue(value, elGetter);
}


/* eslint-enable */
