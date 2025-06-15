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

/* START_OF_SYMBOL_DEFINITION ZeroToOne */
/**
 * @summary ZeroToOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZeroToOne  ::=  INTEGER(0..1)
 * ```
 */
export type ZeroToOne = INTEGER;
/* END_OF_SYMBOL_DEFINITION ZeroToOne */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ZeroToOne */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ZeroToOne */

/* START_OF_SYMBOL_DEFINITION _decode_ZeroToOne */
export const _decode_ZeroToOne = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ZeroToOne */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ZeroToOne */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ZeroToOne */

/* START_OF_SYMBOL_DEFINITION _encode_ZeroToOne */
export const _encode_ZeroToOne = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ZeroToOne */

/* eslint-enable */
