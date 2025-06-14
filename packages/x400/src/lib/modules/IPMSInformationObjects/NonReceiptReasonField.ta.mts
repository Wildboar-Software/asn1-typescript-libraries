/* eslint-disable */
import {
    ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_NonReceiptReasonField */
export enum _enum_for_NonReceiptReasonField {
    ipm_discarded = 0,
    ipm_auto_forwarded = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_NonReceiptReasonField */

/* START_OF_SYMBOL_DEFINITION NonReceiptReasonField */
/**
 * @summary NonReceiptReasonField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonReceiptReasonField  ::=  ENUMERATED {
 *   ipm-discarded(0), ipm-auto-forwarded(1), ...
 *   }
 * ```@enum {number}
 */
export type NonReceiptReasonField =
    | _enum_for_NonReceiptReasonField
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION NonReceiptReasonField */

/* START_OF_SYMBOL_DEFINITION NonReceiptReasonField_ipm_discarded */
/**
 * @summary NonReceiptReasonField_ipm_discarded
 * @constant
 * @type {number}
 */
export const NonReceiptReasonField_ipm_discarded: NonReceiptReasonField = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NonReceiptReasonField_ipm_discarded */

/* START_OF_SYMBOL_DEFINITION ipm_discarded */
/**
 * @summary ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded: NonReceiptReasonField = NonReceiptReasonField_ipm_discarded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_discarded */

/* START_OF_SYMBOL_DEFINITION NonReceiptReasonField_ipm_auto_forwarded */
/**
 * @summary NonReceiptReasonField_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const NonReceiptReasonField_ipm_auto_forwarded: NonReceiptReasonField = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NonReceiptReasonField_ipm_auto_forwarded */

/* START_OF_SYMBOL_DEFINITION ipm_auto_forwarded */
/**
 * @summary ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded: NonReceiptReasonField = NonReceiptReasonField_ipm_auto_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_auto_forwarded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonReceiptReasonField */
let _cached_decoder_for_NonReceiptReasonField: $.ASN1Decoder<NonReceiptReasonField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonReceiptReasonField */

/* START_OF_SYMBOL_DEFINITION _decode_NonReceiptReasonField */
/**
 * @summary Decodes an ASN.1 element into a(n) NonReceiptReasonField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonReceiptReasonField} The decoded data structure.
 */
export function _decode_NonReceiptReasonField(el: _Element) {
    if (!_cached_decoder_for_NonReceiptReasonField) {
        _cached_decoder_for_NonReceiptReasonField = $._decodeEnumerated;
    }
    return _cached_decoder_for_NonReceiptReasonField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonReceiptReasonField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonReceiptReasonField */
let _cached_encoder_for_NonReceiptReasonField: $.ASN1Encoder<NonReceiptReasonField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonReceiptReasonField */

/* START_OF_SYMBOL_DEFINITION _encode_NonReceiptReasonField */
/**
 * @summary Encodes a(n) NonReceiptReasonField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonReceiptReasonField, encoded as an ASN.1 Element.
 */
export function _encode_NonReceiptReasonField(
    value: NonReceiptReasonField,
    elGetter: $.ASN1Encoder<NonReceiptReasonField>
) {
    if (!_cached_encoder_for_NonReceiptReasonField) {
        _cached_encoder_for_NonReceiptReasonField = $._encodeEnumerated;
    }
    return _cached_encoder_for_NonReceiptReasonField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonReceiptReasonField */

/* eslint-enable */
