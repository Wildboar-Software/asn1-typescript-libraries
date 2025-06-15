/* eslint-disable */
import {
    REAL,
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

/* START_OF_SYMBOL_DEFINITION FilterWeight */
/**
 * @summary FilterWeight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterWeight  ::=  REAL(0..{mantissa 1, base 10, exponent 0})
 * ```
 */
export type FilterWeight = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION FilterWeight */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterWeight */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterWeight */

/* START_OF_SYMBOL_DEFINITION _decode_FilterWeight */
export const _decode_FilterWeight = $._decodeReal;
/* END_OF_SYMBOL_DEFINITION _decode_FilterWeight */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterWeight */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterWeight */

/* START_OF_SYMBOL_DEFINITION _encode_FilterWeight */
export const _encode_FilterWeight = $._encodeReal;

/* END_OF_SYMBOL_DEFINITION _encode_FilterWeight */

/* eslint-enable */
