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

/* START_OF_SYMBOL_DEFINITION Stratum */
/**
 * @summary Stratum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Stratum  ::=  INTEGER(0..255)
 * ```
 */
export type Stratum = INTEGER;
/* END_OF_SYMBOL_DEFINITION Stratum */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Stratum */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Stratum */

/* START_OF_SYMBOL_DEFINITION _decode_Stratum */
export const _decode_Stratum = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Stratum */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Stratum */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Stratum */

/* START_OF_SYMBOL_DEFINITION _encode_Stratum */
export const _encode_Stratum = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Stratum */

/* eslint-enable */
