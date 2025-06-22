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
    MSExtensionItem,
    _decode_MSExtensionItem,
    _encode_MSExtensionItem,
} from '../MSAbstractService/MSExtensionItem.ta.mjs';
/**
 * @summary MSExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSExtensions  ::=  SEQUENCE SIZE (1..ub-extensions) OF MSExtensionItem
 * ```
 */
export type MSExtensions = MSExtensionItem[]; // SequenceOfType

let _cached_decoder_for_MSExtensions: $.ASN1Decoder<MSExtensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSExtensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSExtensions} The decoded data structure.
 */
export function _decode_MSExtensions(el: _Element) {
    if (!_cached_decoder_for_MSExtensions) {
        _cached_decoder_for_MSExtensions = $._decodeSequenceOf<MSExtensionItem>(
            () => _decode_MSExtensionItem
        );
    }
    return _cached_decoder_for_MSExtensions(el);
}

let _cached_encoder_for_MSExtensions: $.ASN1Encoder<MSExtensions> | null = null;

/**
 * @summary Encodes a(n) MSExtensions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSExtensions, encoded as an ASN.1 Element.
 */
export function _encode_MSExtensions(
    value: MSExtensions,
    elGetter: $.ASN1Encoder<MSExtensions>
) {
    if (!_cached_encoder_for_MSExtensions) {
        _cached_encoder_for_MSExtensions = $._encodeSequenceOf<MSExtensionItem>(
            () => _encode_MSExtensionItem,
            $.BER
        );
    }
    return _cached_encoder_for_MSExtensions(value, elGetter);
}


/* eslint-enable */
