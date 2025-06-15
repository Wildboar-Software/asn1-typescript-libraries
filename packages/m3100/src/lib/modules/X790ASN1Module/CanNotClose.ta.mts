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

/* START_OF_SYMBOL_DEFINITION CanNotClose */
/**
 * @summary CanNotClose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CanNotClose  ::=  INTEGER {alreadyCleared(0)}
 * ```
 */
export type CanNotClose = INTEGER;
/* END_OF_SYMBOL_DEFINITION CanNotClose */

/* START_OF_SYMBOL_DEFINITION CanNotClose_alreadyCleared */
/**
 * @summary CanNotClose_alreadyCleared
 * @constant
 * @type {number}
 */
export const CanNotClose_alreadyCleared: CanNotClose = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CanNotClose_alreadyCleared */

/* START_OF_SYMBOL_DEFINITION alreadyCleared */
/**
 * @summary CanNotClose_alreadyCleared
 * @constant
 * @type {number}
 */
export const alreadyCleared: CanNotClose = CanNotClose_alreadyCleared; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION alreadyCleared */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CanNotClose */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CanNotClose */

/* START_OF_SYMBOL_DEFINITION _decode_CanNotClose */
export const _decode_CanNotClose = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CanNotClose */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CanNotClose */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CanNotClose */

/* START_OF_SYMBOL_DEFINITION _encode_CanNotClose */
export const _encode_CanNotClose = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CanNotClose */

/* eslint-enable */
