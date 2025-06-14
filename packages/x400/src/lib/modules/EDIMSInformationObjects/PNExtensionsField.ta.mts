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
    PNExtensionsSubField,
    _decode_PNExtensionsSubField,
    _encode_PNExtensionsSubField,
} from '../EDIMSInformationObjects/PNExtensionsSubField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PNExtensionsField */
/**
 * @summary PNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PNExtensionsField  ::=  SET OF PNExtensionsSubField
 * ```
 */
export type PNExtensionsField = PNExtensionsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION PNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PNExtensionsField */
let _cached_decoder_for_PNExtensionsField: $.ASN1Decoder<PNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_PNExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) PNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PNExtensionsField} The decoded data structure.
 */
export function _decode_PNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_PNExtensionsField) {
        _cached_decoder_for_PNExtensionsField = $._decodeSetOf<PNExtensionsSubField>(
            () => _decode_PNExtensionsSubField
        );
    }
    return _cached_decoder_for_PNExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PNExtensionsField */
let _cached_encoder_for_PNExtensionsField: $.ASN1Encoder<PNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_PNExtensionsField */
/**
 * @summary Encodes a(n) PNExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_PNExtensionsField(
    value: PNExtensionsField,
    elGetter: $.ASN1Encoder<PNExtensionsField>
) {
    if (!_cached_encoder_for_PNExtensionsField) {
        _cached_encoder_for_PNExtensionsField = $._encodeSetOf<PNExtensionsSubField>(
            () => _encode_PNExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_PNExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PNExtensionsField */

/* eslint-enable */
