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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';
/**
 * @summary NotificationExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationExtensionsField  ::=  SET OF IPMSExtension{{NotificationExtensions}}
 * ```
 */
export type NotificationExtensionsField = IPMSExtension[]; // SetOfType

let _cached_decoder_for_NotificationExtensionsField: $.ASN1Decoder<NotificationExtensionsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationExtensionsField} The decoded data structure.
 */
export function _decode_NotificationExtensionsField(el: _Element): NotificationExtensionsField {
    if (!_cached_decoder_for_NotificationExtensionsField) {
        _cached_decoder_for_NotificationExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_NotificationExtensionsField(el);
}

let _cached_encoder_for_NotificationExtensionsField: $.ASN1Encoder<NotificationExtensionsField> | null = null;

/**
 * @summary Encodes a(n) NotificationExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_NotificationExtensionsField(
    value: NotificationExtensionsField,
    elGetter: $.ASN1Encoder<NotificationExtensionsField>
): _Element {
    if (!_cached_encoder_for_NotificationExtensionsField) {
        _cached_encoder_for_NotificationExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_NotificationExtensionsField(value, elGetter);
}


/* eslint-enable */
