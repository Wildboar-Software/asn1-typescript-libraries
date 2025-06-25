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
 * @summary FNExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type FNExtensionsSubField = ExtensionField; // DefinedType

let _cached_decoder_for_FNExtensionsSubField: $.ASN1Decoder<FNExtensionsSubField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FNExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNExtensionsSubField} The decoded data structure.
 */
export function _decode_FNExtensionsSubField(el: _Element): FNExtensionsSubField {
    if (!_cached_decoder_for_FNExtensionsSubField) {
        _cached_decoder_for_FNExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_FNExtensionsSubField(el);
}

let _cached_encoder_for_FNExtensionsSubField: $.ASN1Encoder<FNExtensionsSubField> | null = null;

/**
 * @summary Encodes a(n) FNExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_FNExtensionsSubField(
    value: FNExtensionsSubField,
    elGetter: $.ASN1Encoder<FNExtensionsSubField>
): _Element {
    if (!_cached_encoder_for_FNExtensionsSubField) {
        _cached_encoder_for_FNExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_FNExtensionsSubField(value, elGetter);
}


/* eslint-enable */
