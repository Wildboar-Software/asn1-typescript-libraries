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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';
import {
    Connected,
    _decode_Connected,
    _encode_Connected,
} from '../ASN1DefinedTypesModule/Connected.ta.mjs';

/**
 * @summary IndividualResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndividualResult  ::=  CHOICE {failed  [0]  Failed,
 *                              pass    [1]  Connected
 * }
 * ```
 */
export type IndividualResult =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { pass: Connected } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_IndividualResult: $.ASN1Decoder<IndividualResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IndividualResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndividualResult} The decoded data structure.
 */
export function _decode_IndividualResult(el: _Element): IndividualResult {
    if (!_cached_decoder_for_IndividualResult) {
        _cached_decoder_for_IndividualResult = $._decode_inextensible_choice<IndividualResult>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_explicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'pass',
                    $._decode_explicit<Connected>(() => _decode_Connected),
                ],
            }
        );
    }
    return _cached_decoder_for_IndividualResult(el);
}


let _cached_encoder_for_IndividualResult: $.ASN1Encoder<IndividualResult> | null = null;


/**
 * @summary Encodes a(n) IndividualResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndividualResult, encoded as an ASN.1 Element.
 */
export function _encode_IndividualResult(
    value: IndividualResult,
    elGetter: $.ASN1Encoder<IndividualResult>
): _Element {
    if (!_cached_encoder_for_IndividualResult) {
        _cached_encoder_for_IndividualResult = $._encode_choice<IndividualResult>(
            {
                failed: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                pass: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Connected,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IndividualResult(value, elGetter);
}


/* eslint-enable */
