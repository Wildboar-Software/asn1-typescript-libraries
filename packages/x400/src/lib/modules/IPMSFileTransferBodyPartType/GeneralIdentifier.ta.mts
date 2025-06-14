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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION GeneralIdentifier */
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
/* END_OF_SYMBOL_DEFINITION GeneralIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralIdentifier */
let _cached_decoder_for_GeneralIdentifier: $.ASN1Decoder<GeneralIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralIdentifier} The decoded data structure.
 */
export function _decode_GeneralIdentifier(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_GeneralIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralIdentifier */
let _cached_encoder_for_GeneralIdentifier: $.ASN1Encoder<GeneralIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralIdentifier */
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
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_GeneralIdentifier */

/* eslint-enable */
