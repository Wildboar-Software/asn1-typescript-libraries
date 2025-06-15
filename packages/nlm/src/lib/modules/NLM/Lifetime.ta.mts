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

/* START_OF_SYMBOL_DEFINITION Lifetime */
/**
 * @summary Lifetime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Lifetime  ::=  INTEGER(1..255)
 * ```
 */
export type Lifetime = INTEGER;
/* END_OF_SYMBOL_DEFINITION Lifetime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Lifetime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Lifetime */

/* START_OF_SYMBOL_DEFINITION _decode_Lifetime */
export const _decode_Lifetime = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Lifetime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Lifetime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Lifetime */

/* START_OF_SYMBOL_DEFINITION _encode_Lifetime */
export const _encode_Lifetime = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Lifetime */

/* eslint-enable */
