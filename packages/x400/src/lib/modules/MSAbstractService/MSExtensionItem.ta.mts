/* eslint-disable */
import {
    INSTANCE_OF,
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
/* START_OF_SYMBOL_DEFINITION MSExtensionItem */
/**
 * @summary MSExtensionItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSExtensionItem  ::=  INSTANCE OF MS-EXTENSION
 * ```
 */
export type MSExtensionItem = INSTANCE_OF; // InstanceOfType
/* END_OF_SYMBOL_DEFINITION MSExtensionItem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSExtensionItem */
let _cached_decoder_for_MSExtensionItem: $.ASN1Decoder<MSExtensionItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSExtensionItem */

/* START_OF_SYMBOL_DEFINITION _decode_MSExtensionItem */
/**
 * @summary Decodes an ASN.1 element into a(n) MSExtensionItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSExtensionItem} The decoded data structure.
 */
export function _decode_MSExtensionItem(el: _Element) {
    if (!_cached_decoder_for_MSExtensionItem) {
        _cached_decoder_for_MSExtensionItem = $._decodeInstanceOf;
    }
    return _cached_decoder_for_MSExtensionItem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSExtensionItem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSExtensionItem */
let _cached_encoder_for_MSExtensionItem: $.ASN1Encoder<MSExtensionItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSExtensionItem */

/* START_OF_SYMBOL_DEFINITION _encode_MSExtensionItem */
/**
 * @summary Encodes a(n) MSExtensionItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSExtensionItem, encoded as an ASN.1 Element.
 */
export function _encode_MSExtensionItem(
    value: MSExtensionItem,
    elGetter: $.ASN1Encoder<MSExtensionItem>
) {
    if (!_cached_encoder_for_MSExtensionItem) {
        _cached_encoder_for_MSExtensionItem = $._encodeInstanceOf;
    }
    return _cached_encoder_for_MSExtensionItem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSExtensionItem */

/* eslint-enable */
