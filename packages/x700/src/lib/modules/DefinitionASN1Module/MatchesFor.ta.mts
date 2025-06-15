/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION MatchesFor */
/**
 * @summary MatchesFor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchesFor  ::=  BIT STRING {
 *   equality(0), ordering(1), substrings(2), setComparison(3), setIntersection(4)
 * }
 * ```
 */
export type MatchesFor = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION MatchesFor */

/* START_OF_SYMBOL_DEFINITION MatchesFor_equality */
/**
 * @summary MatchesFor_equality
 * @constant
 */
export const MatchesFor_equality: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_equality */

/* START_OF_SYMBOL_DEFINITION equality */
/**
 * @summary equality
 * @constant
 */
export const equality: number = MatchesFor_equality; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION equality */

/* START_OF_SYMBOL_DEFINITION MatchesFor_ordering */
/**
 * @summary MatchesFor_ordering
 * @constant
 */
export const MatchesFor_ordering: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_ordering */

/* START_OF_SYMBOL_DEFINITION ordering */
/**
 * @summary ordering
 * @constant
 */
export const ordering: number = MatchesFor_ordering; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ordering */

/* START_OF_SYMBOL_DEFINITION MatchesFor_substrings */
/**
 * @summary MatchesFor_substrings
 * @constant
 */
export const MatchesFor_substrings: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_substrings */

/* START_OF_SYMBOL_DEFINITION substrings */
/**
 * @summary substrings
 * @constant
 */
export const substrings: number = MatchesFor_substrings; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION substrings */

/* START_OF_SYMBOL_DEFINITION MatchesFor_setComparison */
/**
 * @summary MatchesFor_setComparison
 * @constant
 */
export const MatchesFor_setComparison: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_setComparison */

/* START_OF_SYMBOL_DEFINITION setComparison */
/**
 * @summary setComparison
 * @constant
 */
export const setComparison: number = MatchesFor_setComparison; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION setComparison */

/* START_OF_SYMBOL_DEFINITION MatchesFor_setIntersection */
/**
 * @summary MatchesFor_setIntersection
 * @constant
 */
export const MatchesFor_setIntersection: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION MatchesFor_setIntersection */

/* START_OF_SYMBOL_DEFINITION setIntersection */
/**
 * @summary setIntersection
 * @constant
 */
export const setIntersection: number = MatchesFor_setIntersection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION setIntersection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchesFor */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchesFor */

/* START_OF_SYMBOL_DEFINITION _decode_MatchesFor */
export const _decode_MatchesFor = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_MatchesFor */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchesFor */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchesFor */

/* START_OF_SYMBOL_DEFINITION _encode_MatchesFor */
export const _encode_MatchesFor = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_MatchesFor */

/* eslint-enable */
