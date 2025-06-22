/* eslint-disable */
import {
    INTEGER,
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

/**
 * @summary InvokeIdsPerforming
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeIdsPerforming  ::=  SET OF INTEGER
 * ```
 */
export type InvokeIdsPerforming = INTEGER[]; // SetOfType

let _cached_decoder_for_InvokeIdsPerforming: $.ASN1Decoder<InvokeIdsPerforming> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeIdsPerforming
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeIdsPerforming} The decoded data structure.
 */
export function _decode_InvokeIdsPerforming(el: _Element) {
    if (!_cached_decoder_for_InvokeIdsPerforming) {
        _cached_decoder_for_InvokeIdsPerforming = $._decodeSetOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_InvokeIdsPerforming(el);
}

let _cached_encoder_for_InvokeIdsPerforming: $.ASN1Encoder<InvokeIdsPerforming> | null = null;

/**
 * @summary Encodes a(n) InvokeIdsPerforming into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeIdsPerforming, encoded as an ASN.1 Element.
 */
export function _encode_InvokeIdsPerforming(
    value: InvokeIdsPerforming,
    elGetter: $.ASN1Encoder<InvokeIdsPerforming>
) {
    if (!_cached_encoder_for_InvokeIdsPerforming) {
        _cached_encoder_for_InvokeIdsPerforming = $._encodeSetOf<INTEGER>(
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_InvokeIdsPerforming(value, elGetter);
}


/* eslint-enable */
