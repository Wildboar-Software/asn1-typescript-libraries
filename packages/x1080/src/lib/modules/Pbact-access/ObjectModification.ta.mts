/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta.mjs';

/**
 * @summary ObjectModification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectModification  ::=  CHOICE {
 *   addAttribute     [0]  Attribute{{SupportedAttributes}},
 *   deleteAttribute  [1]  AttributeType,
 *   addValues        [2]  Attribute{{SupportedAttributes}},
 *   deleteValues     [3]  Attribute{{SupportedAttributes}},
 *   replaceAttribute [4]  Attribute{{SupportedAttributes}},
 *   ... }
 * ```
 */
export type ObjectModification =
    | { addAttribute: Attribute } /* CHOICE_ALT_ROOT */
    | { deleteAttribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { addValues: Attribute } /* CHOICE_ALT_ROOT */
    | { deleteValues: Attribute } /* CHOICE_ALT_ROOT */
    | { replaceAttribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ObjectModification: $.ASN1Decoder<ObjectModification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectModification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectModification} The decoded data structure.
 */
export function _decode_ObjectModification(el: _Element) {
    if (!_cached_decoder_for_ObjectModification) {
        _cached_decoder_for_ObjectModification = $._decode_extensible_choice<ObjectModification>(
            {
                'CONTEXT 0': [
                    'addAttribute',
                    $._decode_implicit<Attribute>(() => _decode_Attribute),
                ],
                'CONTEXT 1': [
                    'deleteAttribute',
                    $._decode_implicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                'CONTEXT 2': [
                    'addValues',
                    $._decode_implicit<Attribute>(() => _decode_Attribute),
                ],
                'CONTEXT 3': [
                    'deleteValues',
                    $._decode_implicit<Attribute>(() => _decode_Attribute),
                ],
                'CONTEXT 4': [
                    'replaceAttribute',
                    $._decode_implicit<Attribute>(() => _decode_Attribute),
                ],
            }
        );
    }
    return _cached_decoder_for_ObjectModification(el);
}


let _cached_encoder_for_ObjectModification: $.ASN1Encoder<ObjectModification> | null = null;


/**
 * @summary Encodes a(n) ObjectModification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectModification, encoded as an ASN.1 Element.
 */
export function _encode_ObjectModification(
    value: ObjectModification,
    elGetter: $.ASN1Encoder<ObjectModification>
) {
    if (!_cached_encoder_for_ObjectModification) {
        _cached_encoder_for_ObjectModification = $._encode_choice<ObjectModification>(
            {
                addAttribute: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Attribute,
                    $.BER
                ),
                deleteAttribute: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeType,
                    $.BER
                ),
                addValues: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_Attribute,
                    $.BER
                ),
                deleteValues: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_Attribute,
                    $.BER
                ),
                replaceAttribute: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_Attribute,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ObjectModification(value, elGetter);
}


/* eslint-enable */
