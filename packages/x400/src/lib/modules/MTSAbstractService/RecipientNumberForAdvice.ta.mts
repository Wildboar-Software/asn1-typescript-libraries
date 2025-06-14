/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION RecipientNumberForAdvice */
/**
 * @summary RecipientNumberForAdvice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientNumberForAdvice  ::=
 *   TeletexString(SIZE (1..ub-recipient-number-for-advice-length))
 * ```
 */
export type RecipientNumberForAdvice = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientNumberForAdvice */
let _cached_decoder_for_RecipientNumberForAdvice: $.ASN1Decoder<RecipientNumberForAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientNumberForAdvice */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientNumberForAdvice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientNumberForAdvice} The decoded data structure.
 */
export function _decode_RecipientNumberForAdvice(el: _Element) {
    if (!_cached_decoder_for_RecipientNumberForAdvice) {
        _cached_decoder_for_RecipientNumberForAdvice = $._decodeTeletexString;
    }
    return _cached_decoder_for_RecipientNumberForAdvice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientNumberForAdvice */
let _cached_encoder_for_RecipientNumberForAdvice: $.ASN1Encoder<RecipientNumberForAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientNumberForAdvice */
/**
 * @summary Encodes a(n) RecipientNumberForAdvice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientNumberForAdvice, encoded as an ASN.1 Element.
 */
export function _encode_RecipientNumberForAdvice(
    value: RecipientNumberForAdvice,
    elGetter: $.ASN1Encoder<RecipientNumberForAdvice>
) {
    if (!_cached_encoder_for_RecipientNumberForAdvice) {
        _cached_encoder_for_RecipientNumberForAdvice = $._encodeTeletexString;
    }
    return _cached_encoder_for_RecipientNumberForAdvice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientNumberForAdvice */

/* eslint-enable */
