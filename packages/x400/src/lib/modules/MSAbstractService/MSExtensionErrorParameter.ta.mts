/* eslint-disable */
import {
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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    MSExtensionItem,
    _decode_MSExtensionItem,
    _encode_MSExtensionItem,
} from '../MSAbstractService/MSExtensionItem.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MSExtensionErrorParameter */
/**
 * @summary MSExtensionErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSExtensionErrorParameter  ::=  CHOICE {
 *   ms-extension-problem  [0]  MSExtensionItem,
 *   unknown-ms-extension  [1]  OBJECT IDENTIFIER
 * }
 * ```
 */
export type MSExtensionErrorParameter =
    | { ms_extension_problem: MSExtensionItem } /* CHOICE_ALT_ROOT */
    | { unknown_ms_extension: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MSExtensionErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSExtensionErrorParameter */
let _cached_decoder_for_MSExtensionErrorParameter: $.ASN1Decoder<MSExtensionErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSExtensionErrorParameter */

/* START_OF_SYMBOL_DEFINITION _decode_MSExtensionErrorParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) MSExtensionErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSExtensionErrorParameter} The decoded data structure.
 */
export function _decode_MSExtensionErrorParameter(el: _Element) {
    if (!_cached_decoder_for_MSExtensionErrorParameter) {
        _cached_decoder_for_MSExtensionErrorParameter = $._decode_inextensible_choice<MSExtensionErrorParameter>(
            {
                'CONTEXT 0': [
                    'ms_extension_problem',
                    $._decode_implicit<MSExtensionItem>(
                        () => _decode_MSExtensionItem
                    ),
                ],
                'CONTEXT 1': [
                    'unknown_ms_extension',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MSExtensionErrorParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSExtensionErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSExtensionErrorParameter */
let _cached_encoder_for_MSExtensionErrorParameter: $.ASN1Encoder<MSExtensionErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSExtensionErrorParameter */

/* START_OF_SYMBOL_DEFINITION _encode_MSExtensionErrorParameter */
/**
 * @summary Encodes a(n) MSExtensionErrorParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSExtensionErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_MSExtensionErrorParameter(
    value: MSExtensionErrorParameter,
    elGetter: $.ASN1Encoder<MSExtensionErrorParameter>
) {
    if (!_cached_encoder_for_MSExtensionErrorParameter) {
        _cached_encoder_for_MSExtensionErrorParameter = $._encode_choice<MSExtensionErrorParameter>(
            {
                ms_extension_problem: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MSExtensionItem,
                    $.BER
                ),
                unknown_ms_extension: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MSExtensionErrorParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSExtensionErrorParameter */

/* eslint-enable */
