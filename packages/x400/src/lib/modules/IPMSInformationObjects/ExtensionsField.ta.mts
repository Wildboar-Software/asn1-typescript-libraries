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
 * @summary ExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionsField  ::=  SET OF IPMSExtension{{HeadingExtensions}}
 * ```
 */
export type ExtensionsField = IPMSExtension[]; // SetOfType

let _cached_decoder_for_ExtensionsField: $.ASN1Decoder<ExtensionsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionsField} The decoded data structure.
 */
export function _decode_ExtensionsField(el: _Element) {
    if (!_cached_decoder_for_ExtensionsField) {
        _cached_decoder_for_ExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_ExtensionsField(el);
}

let _cached_encoder_for_ExtensionsField: $.ASN1Encoder<ExtensionsField> | null = null;

/**
 * @summary Encodes a(n) ExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionsField(
    value: ExtensionsField,
    elGetter: $.ASN1Encoder<ExtensionsField>
) {
    if (!_cached_encoder_for_ExtensionsField) {
        _cached_encoder_for_ExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ExtensionsField(value, elGetter);
}


/* eslint-enable */
