/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    GraphicString,
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

/**
 * @summary GeneralIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralIdentifier  ::=  CHOICE {
 *   registered-identifier   [0]  OBJECT IDENTIFIER,
 *   descriptive-identifier  [1]  SEQUENCE OF GraphicString
 * }
 * ```
 */
export type GeneralIdentifier =
    | { registered_identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { descriptive_identifier: GraphicString[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GeneralIdentifier: $.ASN1Decoder<GeneralIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralIdentifier} The decoded data structure.
 */
export function _decode_GeneralIdentifier(el: _Element): GeneralIdentifier {
    if (!_cached_decoder_for_GeneralIdentifier) {
        _cached_decoder_for_GeneralIdentifier = $._decode_inextensible_choice<GeneralIdentifier>(
            {
                'CONTEXT 0': [
                    'registered_identifier',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'descriptive_identifier',
                    $._decode_implicit<GraphicString[]>(() =>
                        $._decodeSequenceOf<GraphicString>(
                            () => $._decodeGraphicString
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_GeneralIdentifier(el);
}

let _cached_encoder_for_GeneralIdentifier: $.ASN1Encoder<GeneralIdentifier> | null = null;

/**
 * @summary Encodes a(n) GeneralIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_GeneralIdentifier(
    value: GeneralIdentifier,
    elGetter: $.ASN1Encoder<GeneralIdentifier>
): _Element {
    if (!_cached_encoder_for_GeneralIdentifier) {
        _cached_encoder_for_GeneralIdentifier = $._encode_choice<GeneralIdentifier>(
            {
                registered_identifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                descriptive_identifier: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<GraphicString>(
                            () => $._encodeGraphicString,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_GeneralIdentifier(value, elGetter);
}


/* eslint-enable */
