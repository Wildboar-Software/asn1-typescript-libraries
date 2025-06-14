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
/* START_OF_SYMBOL_DEFINITION FirstRecipientField */
/**
 * @summary FirstRecipientField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FirstRecipientField  ::=  ORName
 * ```
 */
export type FirstRecipientField = ORName; // DefinedType
/* END_OF_SYMBOL_DEFINITION FirstRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FirstRecipientField */
let _cached_decoder_for_FirstRecipientField: $.ASN1Decoder<FirstRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FirstRecipientField */

/* START_OF_SYMBOL_DEFINITION _decode_FirstRecipientField */
/**
 * @summary Decodes an ASN.1 element into a(n) FirstRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FirstRecipientField} The decoded data structure.
 */
export function _decode_FirstRecipientField(el: _Element) {
    if (!_cached_decoder_for_FirstRecipientField) {
        _cached_decoder_for_FirstRecipientField = _decode_ORName;
    }
    return _cached_decoder_for_FirstRecipientField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FirstRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FirstRecipientField */
let _cached_encoder_for_FirstRecipientField: $.ASN1Encoder<FirstRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FirstRecipientField */

/* START_OF_SYMBOL_DEFINITION _encode_FirstRecipientField */
/**
 * @summary Encodes a(n) FirstRecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FirstRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_FirstRecipientField(
    value: FirstRecipientField,
    elGetter: $.ASN1Encoder<FirstRecipientField>
) {
    if (!_cached_encoder_for_FirstRecipientField) {
        _cached_encoder_for_FirstRecipientField = _encode_ORName;
    }
    return _cached_encoder_for_FirstRecipientField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FirstRecipientField */

/* eslint-enable */
