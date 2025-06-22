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
    RemoveTpsFromGtpResult_Item,
    _decode_RemoveTpsFromGtpResult_Item,
    _encode_RemoveTpsFromGtpResult_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromGtpResult-Item.ta.mjs';

/**
 * @summary RemoveTpsFromGtpResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromGtpResult  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   [0]  Failed,
 *             removed  [1]  RemoveTpsResultInformation}
 * ```
 */
export type RemoveTpsFromGtpResult = RemoveTpsFromGtpResult_Item[]; // SequenceOfType


let _cached_decoder_for_RemoveTpsFromGtpResult: $.ASN1Decoder<RemoveTpsFromGtpResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromGtpResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromGtpResult} The decoded data structure.
 */
export function _decode_RemoveTpsFromGtpResult(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsFromGtpResult) {
        _cached_decoder_for_RemoveTpsFromGtpResult = $._decodeSequenceOf<RemoveTpsFromGtpResult_Item>(
            () => _decode_RemoveTpsFromGtpResult_Item
        );
    }
    return _cached_decoder_for_RemoveTpsFromGtpResult(el);
}


let _cached_encoder_for_RemoveTpsFromGtpResult: $.ASN1Encoder<RemoveTpsFromGtpResult> | null = null;


/**
 * @summary Encodes a(n) RemoveTpsFromGtpResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromGtpResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromGtpResult(
    value: RemoveTpsFromGtpResult,
    elGetter: $.ASN1Encoder<RemoveTpsFromGtpResult>
) {
    if (!_cached_encoder_for_RemoveTpsFromGtpResult) {
        _cached_encoder_for_RemoveTpsFromGtpResult = $._encodeSequenceOf<RemoveTpsFromGtpResult_Item>(
            () => _encode_RemoveTpsFromGtpResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RemoveTpsFromGtpResult(value, elGetter);
}


/* eslint-enable */
