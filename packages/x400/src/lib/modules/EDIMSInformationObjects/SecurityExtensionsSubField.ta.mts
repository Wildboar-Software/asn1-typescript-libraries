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
/**
 * @summary SecurityExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type SecurityExtensionsSubField = ExtensionField; // DefinedType

let _cached_decoder_for_SecurityExtensionsSubField: $.ASN1Decoder<SecurityExtensionsSubField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityExtensionsSubField} The decoded data structure.
 */
export function _decode_SecurityExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_SecurityExtensionsSubField) {
        _cached_decoder_for_SecurityExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_SecurityExtensionsSubField(el);
}

let _cached_encoder_for_SecurityExtensionsSubField: $.ASN1Encoder<SecurityExtensionsSubField> | null = null;

/**
 * @summary Encodes a(n) SecurityExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_SecurityExtensionsSubField(
    value: SecurityExtensionsSubField,
    elGetter: $.ASN1Encoder<SecurityExtensionsSubField>
) {
    if (!_cached_encoder_for_SecurityExtensionsSubField) {
        _cached_encoder_for_SecurityExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_SecurityExtensionsSubField(value, elGetter);
}


/* eslint-enable */
