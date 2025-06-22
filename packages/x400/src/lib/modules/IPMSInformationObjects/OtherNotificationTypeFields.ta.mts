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
 * @summary OtherNotificationTypeFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherNotificationTypeFields  ::=  SET OF IPMSExtension{{OtherNotifications}}
 * ```
 */
export type OtherNotificationTypeFields = IPMSExtension[]; // SetOfType

let _cached_decoder_for_OtherNotificationTypeFields: $.ASN1Decoder<OtherNotificationTypeFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherNotificationTypeFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherNotificationTypeFields} The decoded data structure.
 */
export function _decode_OtherNotificationTypeFields(el: _Element) {
    if (!_cached_decoder_for_OtherNotificationTypeFields) {
        _cached_decoder_for_OtherNotificationTypeFields = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_OtherNotificationTypeFields(el);
}

let _cached_encoder_for_OtherNotificationTypeFields: $.ASN1Encoder<OtherNotificationTypeFields> | null = null;

/**
 * @summary Encodes a(n) OtherNotificationTypeFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherNotificationTypeFields, encoded as an ASN.1 Element.
 */
export function _encode_OtherNotificationTypeFields(
    value: OtherNotificationTypeFields,
    elGetter: $.ASN1Encoder<OtherNotificationTypeFields>
) {
    if (!_cached_encoder_for_OtherNotificationTypeFields) {
        _cached_encoder_for_OtherNotificationTypeFields = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_OtherNotificationTypeFields(value, elGetter);
}


/* eslint-enable */
