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
    RemoveTpsFromTpPoolResult_Item,
    _decode_RemoveTpsFromTpPoolResult_Item,
    _encode_RemoveTpsFromTpPoolResult_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromTpPoolResult-Item.ta.mjs';

/**
 * @summary RemoveTpsFromTpPoolResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromTpPoolResult  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   [0]  Failed,
 *             removed  [1]  RemoveTpsResultInformation}
 * ```
 */
export type RemoveTpsFromTpPoolResult = RemoveTpsFromTpPoolResult_Item[]; // SequenceOfType


let _cached_decoder_for_RemoveTpsFromTpPoolResult: $.ASN1Decoder<RemoveTpsFromTpPoolResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromTpPoolResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromTpPoolResult} The decoded data structure.
 */
export function _decode_RemoveTpsFromTpPoolResult(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsFromTpPoolResult) {
        _cached_decoder_for_RemoveTpsFromTpPoolResult = $._decodeSequenceOf<RemoveTpsFromTpPoolResult_Item>(
            () => _decode_RemoveTpsFromTpPoolResult_Item
        );
    }
    return _cached_decoder_for_RemoveTpsFromTpPoolResult(el);
}


let _cached_encoder_for_RemoveTpsFromTpPoolResult: $.ASN1Encoder<RemoveTpsFromTpPoolResult> | null = null;


/**
 * @summary Encodes a(n) RemoveTpsFromTpPoolResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromTpPoolResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromTpPoolResult(
    value: RemoveTpsFromTpPoolResult,
    elGetter: $.ASN1Encoder<RemoveTpsFromTpPoolResult>
) {
    if (!_cached_encoder_for_RemoveTpsFromTpPoolResult) {
        _cached_encoder_for_RemoveTpsFromTpPoolResult = $._encodeSequenceOf<RemoveTpsFromTpPoolResult_Item>(
            () => _encode_RemoveTpsFromTpPoolResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RemoveTpsFromTpPoolResult(value, elGetter);
}


/* eslint-enable */
