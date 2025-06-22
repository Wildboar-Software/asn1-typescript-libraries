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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';
/**
 * @summary PNExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PNExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type PNExtensionsSubField = ExtensionField; // DefinedType

let _cached_decoder_for_PNExtensionsSubField: $.ASN1Decoder<PNExtensionsSubField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PNExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PNExtensionsSubField} The decoded data structure.
 */
export function _decode_PNExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_PNExtensionsSubField) {
        _cached_decoder_for_PNExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_PNExtensionsSubField(el);
}

let _cached_encoder_for_PNExtensionsSubField: $.ASN1Encoder<PNExtensionsSubField> | null = null;

/**
 * @summary Encodes a(n) PNExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PNExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_PNExtensionsSubField(
    value: PNExtensionsSubField,
    elGetter: $.ASN1Encoder<PNExtensionsSubField>
) {
    if (!_cached_encoder_for_PNExtensionsSubField) {
        _cached_encoder_for_PNExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_PNExtensionsSubField(value, elGetter);
}


/* eslint-enable */
