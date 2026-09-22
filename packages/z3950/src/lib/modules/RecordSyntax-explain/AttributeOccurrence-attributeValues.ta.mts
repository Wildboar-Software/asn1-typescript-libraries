/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeOccurrence_attributeValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeOccurrence-attributeValues ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AttributeOccurrence_attributeValues =
    { any_or_none: NULL } /* CHOICE_ALT_ROOT */
    | { specific: StringOrNumeric[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeOccurrence_attributeValues: $.ASN1Decoder<AttributeOccurrence_attributeValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeOccurrence_attributeValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeOccurrence_attributeValues (el: _Element): AttributeOccurrence_attributeValues {
    if (!_cached_decoder_for_AttributeOccurrence_attributeValues) { _cached_decoder_for_AttributeOccurrence_attributeValues = $._decode_inextensible_choice<AttributeOccurrence_attributeValues>({
    "CONTEXT 3": [ "any_or_none", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "specific", $._decode_implicit<StringOrNumeric[]>(() => $._decodeSequenceOf<StringOrNumeric>(() => _decode_StringOrNumeric)) ]
}); }
    return _cached_decoder_for_AttributeOccurrence_attributeValues(el);
}

let _cached_encoder_for_AttributeOccurrence_attributeValues: $.ASN1Encoder<AttributeOccurrence_attributeValues> | null = null;

/**
 * @summary Encodes a(n) AttributeOccurrence_attributeValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeOccurrence_attributeValues, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeOccurrence_attributeValues (value: AttributeOccurrence_attributeValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeOccurrence_attributeValues) { _cached_encoder_for_AttributeOccurrence_attributeValues = $._encode_choice<AttributeOccurrence_attributeValues>({
    "any_or_none": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<StringOrNumeric>(() => _encode_StringOrNumeric, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeOccurrence_attributeValues(value, elGetter);
}


/* eslint-enable */
