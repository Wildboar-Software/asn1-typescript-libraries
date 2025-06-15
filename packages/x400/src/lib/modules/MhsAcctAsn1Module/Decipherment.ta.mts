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

/* START_OF_SYMBOL_DEFINITION Decipherment */
/**
 * @summary Decipherment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Decipherment  ::=  INTEGER {success(1), failure(2)}
 * ```
 */
export type Decipherment = INTEGER;
/* END_OF_SYMBOL_DEFINITION Decipherment */

/* START_OF_SYMBOL_DEFINITION Decipherment_success */
/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const Decipherment_success: Decipherment = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Decipherment_success */

/* START_OF_SYMBOL_DEFINITION success */
/**
 * @summary Decipherment_success
 * @constant
 * @type {number}
 */
export const success: Decipherment = Decipherment_success; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION success */

/* START_OF_SYMBOL_DEFINITION Decipherment_failure */
/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const Decipherment_failure: Decipherment = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Decipherment_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary Decipherment_failure
 * @constant
 * @type {number}
 */
export const failure: Decipherment = Decipherment_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Decipherment */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Decipherment */

/* START_OF_SYMBOL_DEFINITION _decode_Decipherment */
export const _decode_Decipherment = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Decipherment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Decipherment */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Decipherment */

/* START_OF_SYMBOL_DEFINITION _encode_Decipherment */
export const _encode_Decipherment = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Decipherment */

/* eslint-enable */
