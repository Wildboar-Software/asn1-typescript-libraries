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
/* START_OF_SYMBOL_DEFINITION SecurityExtensionsSubField */
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
/* END_OF_SYMBOL_DEFINITION SecurityExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityExtensionsSubField */
let _cached_decoder_for_SecurityExtensionsSubField: $.ASN1Decoder<SecurityExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityExtensionsSubField */
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
/* END_OF_SYMBOL_DEFINITION _decode_SecurityExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityExtensionsSubField */
let _cached_encoder_for_SecurityExtensionsSubField: $.ASN1Encoder<SecurityExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityExtensionsSubField */
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

/* END_OF_SYMBOL_DEFINITION _encode_SecurityExtensionsSubField */

/* eslint-enable */
