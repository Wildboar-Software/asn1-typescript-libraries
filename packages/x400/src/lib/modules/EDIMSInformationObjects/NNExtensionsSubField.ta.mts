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
 * @summary NNExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type NNExtensionsSubField = ExtensionField; // DefinedType

let _cached_decoder_for_NNExtensionsSubField: $.ASN1Decoder<NNExtensionsSubField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NNExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNExtensionsSubField} The decoded data structure.
 */
export function _decode_NNExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_NNExtensionsSubField) {
        _cached_decoder_for_NNExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_NNExtensionsSubField(el);
}

let _cached_encoder_for_NNExtensionsSubField: $.ASN1Encoder<NNExtensionsSubField> | null = null;

/**
 * @summary Encodes a(n) NNExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_NNExtensionsSubField(
    value: NNExtensionsSubField,
    elGetter: $.ASN1Encoder<NNExtensionsSubField>
) {
    if (!_cached_encoder_for_NNExtensionsSubField) {
        _cached_encoder_for_NNExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_NNExtensionsSubField(value, elGetter);
}


/* eslint-enable */
