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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ExactOrPattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExactOrPattern  ::=  CHOICE {
 *   exact-match    [0]  ORName,
 *   pattern-match  [1]  ORName
 * }
 * ```
 */
export type ExactOrPattern =
    | { exact_match: ORName } /* CHOICE_ALT_ROOT */
    | { pattern_match: ORName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExactOrPattern: $.ASN1Decoder<ExactOrPattern> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExactOrPattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExactOrPattern} The decoded data structure.
 */
export function _decode_ExactOrPattern(el: _Element) {
    if (!_cached_decoder_for_ExactOrPattern) {
        _cached_decoder_for_ExactOrPattern = $._decode_inextensible_choice<ExactOrPattern>(
            {
                'CONTEXT 0': [
                    'exact_match',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
                'CONTEXT 1': [
                    'pattern_match',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
            }
        );
    }
    return _cached_decoder_for_ExactOrPattern(el);
}

let _cached_encoder_for_ExactOrPattern: $.ASN1Encoder<ExactOrPattern> | null = null;

/**
 * @summary Encodes a(n) ExactOrPattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExactOrPattern, encoded as an ASN.1 Element.
 */
export function _encode_ExactOrPattern(
    value: ExactOrPattern,
    elGetter: $.ASN1Encoder<ExactOrPattern>
) {
    if (!_cached_encoder_for_ExactOrPattern) {
        _cached_encoder_for_ExactOrPattern = $._encode_choice<ExactOrPattern>(
            {
                exact_match: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ORName,
                    $.BER
                ),
                pattern_match: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ORName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExactOrPattern(value, elGetter);
}


/* eslint-enable */
