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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';
/**
 * @summary RNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RNExtensionsField  ::=  SET OF IPMSExtension{{RNExtensions}}
 * ```
 */
export type RNExtensionsField = IPMSExtension[]; // SetOfType

let _cached_decoder_for_RNExtensionsField: $.ASN1Decoder<RNExtensionsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RNExtensionsField} The decoded data structure.
 */
export function _decode_RNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_RNExtensionsField) {
        _cached_decoder_for_RNExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_RNExtensionsField(el);
}

let _cached_encoder_for_RNExtensionsField: $.ASN1Encoder<RNExtensionsField> | null = null;

/**
 * @summary Encodes a(n) RNExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_RNExtensionsField(
    value: RNExtensionsField,
    elGetter: $.ASN1Encoder<RNExtensionsField>
) {
    if (!_cached_encoder_for_RNExtensionsField) {
        _cached_encoder_for_RNExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_RNExtensionsField(value, elGetter);
}


/* eslint-enable */
