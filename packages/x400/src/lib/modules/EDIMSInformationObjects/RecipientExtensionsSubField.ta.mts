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
/* START_OF_SYMBOL_DEFINITION RecipientExtensionsSubField */
/**
 * @summary RecipientExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type RecipientExtensionsSubField = ExtensionField; // DefinedType
/* END_OF_SYMBOL_DEFINITION RecipientExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientExtensionsSubField */
let _cached_decoder_for_RecipientExtensionsSubField: $.ASN1Decoder<RecipientExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientExtensionsSubField */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientExtensionsSubField} The decoded data structure.
 */
export function _decode_RecipientExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_RecipientExtensionsSubField) {
        _cached_decoder_for_RecipientExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_RecipientExtensionsSubField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientExtensionsSubField */
let _cached_encoder_for_RecipientExtensionsSubField: $.ASN1Encoder<RecipientExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientExtensionsSubField */
/**
 * @summary Encodes a(n) RecipientExtensionsSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_RecipientExtensionsSubField(
    value: RecipientExtensionsSubField,
    elGetter: $.ASN1Encoder<RecipientExtensionsSubField>
) {
    if (!_cached_encoder_for_RecipientExtensionsSubField) {
        _cached_encoder_for_RecipientExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_RecipientExtensionsSubField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientExtensionsSubField */

/* eslint-enable */
