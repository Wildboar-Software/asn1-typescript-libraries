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
    IndividualResult,
    _decode_IndividualResult,
    _encode_IndividualResult,
} from '../ASN1DefinedTypesModule/IndividualResult.ta.mjs';

/**
 * @summary SwitchOverResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchOverResult  ::=  SEQUENCE OF IndividualResult
 * ```
 */
export type SwitchOverResult = IndividualResult[]; // SequenceOfType


let _cached_decoder_for_SwitchOverResult: $.ASN1Decoder<SwitchOverResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SwitchOverResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SwitchOverResult} The decoded data structure.
 */
export function _decode_SwitchOverResult(el: _Element) {
    if (!_cached_decoder_for_SwitchOverResult) {
        _cached_decoder_for_SwitchOverResult = $._decodeSequenceOf<IndividualResult>(
            () => _decode_IndividualResult
        );
    }
    return _cached_decoder_for_SwitchOverResult(el);
}


let _cached_encoder_for_SwitchOverResult: $.ASN1Encoder<SwitchOverResult> | null = null;


/**
 * @summary Encodes a(n) SwitchOverResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchOverResult, encoded as an ASN.1 Element.
 */
export function _encode_SwitchOverResult(
    value: SwitchOverResult,
    elGetter: $.ASN1Encoder<SwitchOverResult>
) {
    if (!_cached_encoder_for_SwitchOverResult) {
        _cached_encoder_for_SwitchOverResult = $._encodeSequenceOf<IndividualResult>(
            () => _encode_IndividualResult,
            $.BER
        );
    }
    return _cached_encoder_for_SwitchOverResult(value, elGetter);
}


/* eslint-enable */
