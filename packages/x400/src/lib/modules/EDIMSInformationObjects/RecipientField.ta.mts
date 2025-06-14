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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RecipientField */
/**
 * @summary RecipientField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientField  ::=  ORName
 * ```
 */
export type RecipientField = ORName; // DefinedType
/* END_OF_SYMBOL_DEFINITION RecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientField */
let _cached_decoder_for_RecipientField: $.ASN1Decoder<RecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientField */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientField */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientField} The decoded data structure.
 */
export function _decode_RecipientField(el: _Element) {
    if (!_cached_decoder_for_RecipientField) {
        _cached_decoder_for_RecipientField = _decode_ORName;
    }
    return _cached_decoder_for_RecipientField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientField */
let _cached_encoder_for_RecipientField: $.ASN1Encoder<RecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientField */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientField */
/**
 * @summary Encodes a(n) RecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientField, encoded as an ASN.1 Element.
 */
export function _encode_RecipientField(
    value: RecipientField,
    elGetter: $.ASN1Encoder<RecipientField>
) {
    if (!_cached_encoder_for_RecipientField) {
        _cached_encoder_for_RecipientField = _encode_ORName;
    }
    return _cached_encoder_for_RecipientField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientField */

/* eslint-enable */
