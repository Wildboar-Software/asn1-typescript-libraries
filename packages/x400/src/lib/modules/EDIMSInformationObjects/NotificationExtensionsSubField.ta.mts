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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NotificationExtensionsSubField */
/**
 * @summary NotificationExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type NotificationExtensionsSubField = ExtensionField; // DefinedType
/* END_OF_SYMBOL_DEFINITION NotificationExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationExtensionsSubField */
let _cached_decoder_for_NotificationExtensionsSubField: $.ASN1Decoder<NotificationExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationExtensionsSubField */
/**
 * @summary Decodes an ASN.1 element into a(n) NotificationExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationExtensionsSubField} The decoded data structure.
 */
export function _decode_NotificationExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_NotificationExtensionsSubField) {
        _cached_decoder_for_NotificationExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_NotificationExtensionsSubField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotificationExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationExtensionsSubField */
let _cached_encoder_for_NotificationExtensionsSubField: $.ASN1Encoder<NotificationExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationExtensionsSubField */
/**
 * @summary Encodes a(n) NotificationExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_NotificationExtensionsSubField(
    value: NotificationExtensionsSubField,
    elGetter: $.ASN1Encoder<NotificationExtensionsSubField>
) {
    if (!_cached_encoder_for_NotificationExtensionsSubField) {
        _cached_encoder_for_NotificationExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_NotificationExtensionsSubField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotificationExtensionsSubField */

/* eslint-enable */
