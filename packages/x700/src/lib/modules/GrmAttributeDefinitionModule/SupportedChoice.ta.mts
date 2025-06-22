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
    OptionalIdentifier,
    _decode_OptionalIdentifier,
    _encode_OptionalIdentifier,
} from '../GrmAttributeDefinitionModule/OptionalIdentifier.ta.mjs';
/**
 * @summary SupportedChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedChoice  ::=  CHOICE {
 *   establish    [0] EXPLICIT OptionalIdentifier,
 *   terminate    [1] EXPLICIT OptionalIdentifier,
 *   query        [2] EXPLICIT OptionalIdentifier,
 *   notify       [3] EXPLICIT OptionalIdentifier,
 *   userDefined  [4] EXPLICIT OptionalIdentifier
 * }
 * ```
 */
export type SupportedChoice =
    | { establish: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { terminate: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { query: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { notify: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { userDefined: OptionalIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SupportedChoice: $.ASN1Decoder<SupportedChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedChoice} The decoded data structure.
 */
export function _decode_SupportedChoice(el: _Element) {
    if (!_cached_decoder_for_SupportedChoice) {
        _cached_decoder_for_SupportedChoice = $._decode_inextensible_choice<SupportedChoice>(
            {
                'CONTEXT 0': [
                    'establish',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'terminate',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 2': [
                    'query',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 3': [
                    'notify',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 4': [
                    'userDefined',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SupportedChoice(el);
}

let _cached_encoder_for_SupportedChoice: $.ASN1Encoder<SupportedChoice> | null = null;

/**
 * @summary Encodes a(n) SupportedChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedChoice, encoded as an ASN.1 Element.
 */
export function _encode_SupportedChoice(
    value: SupportedChoice,
    elGetter: $.ASN1Encoder<SupportedChoice>
) {
    if (!_cached_encoder_for_SupportedChoice) {
        _cached_encoder_for_SupportedChoice = $._encode_choice<SupportedChoice>(
            {
                establish: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                terminate: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                query: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                notify: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                userDefined: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SupportedChoice(value, elGetter);
}


/* eslint-enable */
