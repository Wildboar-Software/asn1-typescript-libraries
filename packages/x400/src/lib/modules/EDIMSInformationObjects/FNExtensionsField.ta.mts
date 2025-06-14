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
    FNExtensionsSubField,
    _decode_FNExtensionsSubField,
    _encode_FNExtensionsSubField,
} from '../EDIMSInformationObjects/FNExtensionsSubField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION FNExtensionsField */
/**
 * @summary FNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNExtensionsField  ::=  SET OF FNExtensionsSubField
 * ```
 */
export type FNExtensionsField = FNExtensionsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNExtensionsField */
let _cached_decoder_for_FNExtensionsField: $.ASN1Decoder<FNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_FNExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNExtensionsField} The decoded data structure.
 */
export function _decode_FNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_FNExtensionsField) {
        _cached_decoder_for_FNExtensionsField = $._decodeSetOf<FNExtensionsSubField>(
            () => _decode_FNExtensionsSubField
        );
    }
    return _cached_decoder_for_FNExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNExtensionsField */
let _cached_encoder_for_FNExtensionsField: $.ASN1Encoder<FNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_FNExtensionsField */
/**
 * @summary Encodes a(n) FNExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_FNExtensionsField(
    value: FNExtensionsField,
    elGetter: $.ASN1Encoder<FNExtensionsField>
) {
    if (!_cached_encoder_for_FNExtensionsField) {
        _cached_encoder_for_FNExtensionsField = $._encodeSetOf<FNExtensionsSubField>(
            () => _encode_FNExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_FNExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNExtensionsField */

/* eslint-enable */
