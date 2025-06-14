/* eslint-disable */
import {
    UTCTime,
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

/* START_OF_SYMBOL_DEFINITION NotificationTimeField */
/**
 * @summary NotificationTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationTimeField  ::=  UTCTime
 * ```
 */
export type NotificationTimeField = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationTimeField */
let _cached_decoder_for_NotificationTimeField: $.ASN1Decoder<NotificationTimeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationTimeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NotificationTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationTimeField} The decoded data structure.
 */
export function _decode_NotificationTimeField(el: _Element) {
    if (!_cached_decoder_for_NotificationTimeField) {
        _cached_decoder_for_NotificationTimeField = $._decodeUTCTime;
    }
    return _cached_decoder_for_NotificationTimeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationTimeField */
let _cached_encoder_for_NotificationTimeField: $.ASN1Encoder<NotificationTimeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationTimeField */
/**
 * @summary Encodes a(n) NotificationTimeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationTimeField, encoded as an ASN.1 Element.
 */
export function _encode_NotificationTimeField(
    value: NotificationTimeField,
    elGetter: $.ASN1Encoder<NotificationTimeField>
) {
    if (!_cached_encoder_for_NotificationTimeField) {
        _cached_encoder_for_NotificationTimeField = $._encodeUTCTime;
    }
    return _cached_encoder_for_NotificationTimeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotificationTimeField */

/* eslint-enable */
