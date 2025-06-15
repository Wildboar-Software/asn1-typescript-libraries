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

/* START_OF_SYMBOL_DEFINITION IdentificationCode */
/**
 * @summary IdentificationCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentificationCode  ::=  TeletexString(SIZE (1..ub-identification-code))
 * ```
 */
export type IdentificationCode = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION IdentificationCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentificationCode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentificationCode */

/* START_OF_SYMBOL_DEFINITION _decode_IdentificationCode */
export const _decode_IdentificationCode = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_IdentificationCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentificationCode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentificationCode */

/* START_OF_SYMBOL_DEFINITION _encode_IdentificationCode */
export const _encode_IdentificationCode = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_IdentificationCode */

/* eslint-enable */
