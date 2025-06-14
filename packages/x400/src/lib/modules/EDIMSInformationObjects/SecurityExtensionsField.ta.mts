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
    SecurityExtensionsSubField,
    _decode_SecurityExtensionsSubField,
    _encode_SecurityExtensionsSubField,
} from '../EDIMSInformationObjects/SecurityExtensionsSubField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SecurityExtensionsField */
/**
 * @summary SecurityExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityExtensionsField  ::=  SET OF SecurityExtensionsSubField
 * ```
 */
export type SecurityExtensionsField = SecurityExtensionsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityExtensionsField */
let _cached_decoder_for_SecurityExtensionsField: $.ASN1Decoder<SecurityExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityExtensionsField} The decoded data structure.
 */
export function _decode_SecurityExtensionsField(el: _Element) {
    if (!_cached_decoder_for_SecurityExtensionsField) {
        _cached_decoder_for_SecurityExtensionsField = $._decodeSetOf<SecurityExtensionsSubField>(
            () => _decode_SecurityExtensionsSubField
        );
    }
    return _cached_decoder_for_SecurityExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityExtensionsField */
let _cached_encoder_for_SecurityExtensionsField: $.ASN1Encoder<SecurityExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityExtensionsField */
/**
 * @summary Encodes a(n) SecurityExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_SecurityExtensionsField(
    value: SecurityExtensionsField,
    elGetter: $.ASN1Encoder<SecurityExtensionsField>
) {
    if (!_cached_encoder_for_SecurityExtensionsField) {
        _cached_encoder_for_SecurityExtensionsField = $._encodeSetOf<SecurityExtensionsSubField>(
            () => _encode_SecurityExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityExtensionsField */

/* eslint-enable */
