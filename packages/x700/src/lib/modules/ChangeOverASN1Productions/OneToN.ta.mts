/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION OneToN */
/**
 * @summary OneToN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneToN  ::=  INTEGER(1..MAX)
 * ```
 */
export type OneToN = INTEGER;
/* END_OF_SYMBOL_DEFINITION OneToN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OneToN */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OneToN */

/* START_OF_SYMBOL_DEFINITION _decode_OneToN */
export const _decode_OneToN = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_OneToN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OneToN */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OneToN */

/* START_OF_SYMBOL_DEFINITION _encode_OneToN */
export const _encode_OneToN = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_OneToN */

/* eslint-enable */
