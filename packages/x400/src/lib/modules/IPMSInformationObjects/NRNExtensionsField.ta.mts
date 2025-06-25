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
 * @summary NRNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NRNExtensionsField  ::=  SET OF IPMSExtension{{NRNExtensions}}
 * ```
 */
export type NRNExtensionsField = IPMSExtension[]; // SetOfType

let _cached_decoder_for_NRNExtensionsField: $.ASN1Decoder<NRNExtensionsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NRNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NRNExtensionsField} The decoded data structure.
 */
export function _decode_NRNExtensionsField(el: _Element): NRNExtensionsField {
    if (!_cached_decoder_for_NRNExtensionsField) {
        _cached_decoder_for_NRNExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_NRNExtensionsField(el);
}

let _cached_encoder_for_NRNExtensionsField: $.ASN1Encoder<NRNExtensionsField> | null = null;

/**
 * @summary Encodes a(n) NRNExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_NRNExtensionsField(
    value: NRNExtensionsField,
    elGetter: $.ASN1Encoder<NRNExtensionsField>
): _Element {
    if (!_cached_encoder_for_NRNExtensionsField) {
        _cached_encoder_for_NRNExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_NRNExtensionsField(value, elGetter);
}


/* eslint-enable */
