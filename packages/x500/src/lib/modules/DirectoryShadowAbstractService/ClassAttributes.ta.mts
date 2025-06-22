/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeTypes,
    _decode_AttributeTypes,
    _encode_AttributeTypes,
} from "../DirectoryShadowAbstractService/AttributeTypes.ta.mjs";
/**
 * @summary ClassAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassAttributes  ::=  CHOICE {
 *   allAttributes  NULL,
 *   include        [0]  AttributeTypes,
 *   exclude        [1]  AttributeTypes,
 *   ... }
 * ```
 */
export type ClassAttributes =
    | { allAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { include: AttributeTypes } /* CHOICE_ALT_ROOT */
    | { exclude: AttributeTypes } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ClassAttributes: $.ASN1Decoder<ClassAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClassAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassAttributes} The decoded data structure.
 */
export function _decode_ClassAttributes(el: _Element) {
    if (!_cached_decoder_for_ClassAttributes) {
        _cached_decoder_for_ClassAttributes = $._decode_extensible_choice<ClassAttributes>(
            {
                "UNIVERSAL 5": ["allAttributes", $._decodeNull],
                "CONTEXT 0": [
                    "include",
                    $._decode_implicit<AttributeTypes>(
                        () => _decode_AttributeTypes
                    ),
                ],
                "CONTEXT 1": [
                    "exclude",
                    $._decode_implicit<AttributeTypes>(
                        () => _decode_AttributeTypes
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ClassAttributes(el);
}

let _cached_encoder_for_ClassAttributes: $.ASN1Encoder<ClassAttributes> | null = null;

/**
 * @summary Encodes a(n) ClassAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ClassAttributes(
    value: ClassAttributes,
    elGetter: $.ASN1Encoder<ClassAttributes>
) {
    if (!_cached_encoder_for_ClassAttributes) {
        _cached_encoder_for_ClassAttributes = $._encode_choice<ClassAttributes>(
            {
                allAttributes: $._encodeNull,
                include: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeTypes,
                    $.DER
                ),
                exclude: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeTypes,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ClassAttributes(value, elGetter);
}


/* eslint-enable */
