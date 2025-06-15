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

/* START_OF_SYMBOL_DEFINITION SizeInOctets */
/**
 * @summary SizeInOctets
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SizeInOctets  ::=  INTEGER
 * ```
 */
export type SizeInOctets = INTEGER;
/* END_OF_SYMBOL_DEFINITION SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SizeInOctets */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _decode_SizeInOctets */
export const _decode_SizeInOctets = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SizeInOctets */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _encode_SizeInOctets */
export const _encode_SizeInOctets = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SizeInOctets */

/* eslint-enable */
