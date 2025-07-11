/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
/**
 * @summary Representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Representation  ::=  CHOICE {
 *   nameBindingSuperior        [0]  TemplateLabel,
 *   nameBindingSubordinate     [1]  TemplateLabel,
 *   attribute                  [2]  TemplateLabel,
 *   relationshipObjectPointer  [3]  TemplateLabel,
 *   operation                  NULL
 * }
 * ```
 */
export type Representation =
    | { nameBindingSuperior: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { nameBindingSubordinate: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { attribute: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { relationshipObjectPointer: TemplateLabel } /* CHOICE_ALT_ROOT */
    | { operation: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Representation: $.ASN1Decoder<Representation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Representation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Representation} The decoded data structure.
 */
export function _decode_Representation(el: _Element): Representation {
    if (!_cached_decoder_for_Representation) {
        _cached_decoder_for_Representation = $._decode_inextensible_choice<Representation>(
            {
                'CONTEXT 0': [
                    'nameBindingSuperior',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'CONTEXT 1': [
                    'nameBindingSubordinate',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'CONTEXT 2': [
                    'attribute',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'CONTEXT 3': [
                    'relationshipObjectPointer',
                    $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    ),
                ],
                'UNIVERSAL 5': ['operation', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_Representation(el);
}

let _cached_encoder_for_Representation: $.ASN1Encoder<Representation> | null = null;

/**
 * @summary Encodes a(n) Representation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Representation, encoded as an ASN.1 Element.
 */
export function _encode_Representation(
    value: Representation,
    elGetter: $.ASN1Encoder<Representation>
): _Element {
    if (!_cached_encoder_for_Representation) {
        _cached_encoder_for_Representation = $._encode_choice<Representation>(
            {
                nameBindingSuperior: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                nameBindingSubordinate: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                attribute: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                relationshipObjectPointer: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TemplateLabel,
                    $.BER
                ),
                operation: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Representation(value, elGetter);
}


/* eslint-enable */
