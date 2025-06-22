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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';
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

let _cached_decoder_for_NotificationExtensionsSubField: $.ASN1Decoder<NotificationExtensionsSubField> | null = null;

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

let _cached_encoder_for_NotificationExtensionsSubField: $.ASN1Encoder<NotificationExtensionsSubField> | null = null;

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


/* eslint-enable */
