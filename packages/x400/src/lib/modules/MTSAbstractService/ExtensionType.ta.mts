/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
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

/**
 * @summary ExtensionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionType  ::=  CHOICE {
 *   standard-extension  [0]  INTEGER(0..ub-extension-types),
 *   private-extension   [3]  OBJECT IDENTIFIER
 * }
 * ```
 */
export type ExtensionType =
    | { standard_extension: INTEGER } /* CHOICE_ALT_ROOT */
    | { private_extension: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtensionType: $.ASN1Decoder<ExtensionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionType} The decoded data structure.
 */
export function _decode_ExtensionType(el: _Element) {
    if (!_cached_decoder_for_ExtensionType) {
        _cached_decoder_for_ExtensionType = $._decode_inextensible_choice<ExtensionType>(
            {
                'CONTEXT 0': [
                    'standard_extension',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 3': [
                    'private_extension',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExtensionType(el);
}

let _cached_encoder_for_ExtensionType: $.ASN1Encoder<ExtensionType> | null = null;

/**
 * @summary Encodes a(n) ExtensionType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionType, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionType(
    value: ExtensionType,
    elGetter: $.ASN1Encoder<ExtensionType>
) {
    if (!_cached_encoder_for_ExtensionType) {
        _cached_encoder_for_ExtensionType = $._encode_choice<ExtensionType>(
            {
                standard_extension: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                private_extension: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExtensionType(value, elGetter);
}


/* eslint-enable */
