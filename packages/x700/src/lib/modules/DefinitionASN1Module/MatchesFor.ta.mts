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
import * as $ from '@wildboar/asn1/functional';


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


/**
 * @summary MatchesFor_equality
 * @constant
 */
export const MatchesFor_equality: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary equality
 * @constant
 */
export const equality: number = MatchesFor_equality; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_ordering
 * @constant
 */
export const MatchesFor_ordering: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary ordering
 * @constant
 */
export const ordering: number = MatchesFor_ordering; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_substrings
 * @constant
 */
export const MatchesFor_substrings: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary substrings
 * @constant
 */
export const substrings: number = MatchesFor_substrings; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_setComparison
 * @constant
 */
export const MatchesFor_setComparison: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary setComparison
 * @constant
 */
export const setComparison: number = MatchesFor_setComparison; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_setIntersection
 * @constant
 */
export const MatchesFor_setIntersection: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary setIntersection
 * @constant
 */
export const setIntersection: number = MatchesFor_setIntersection; /* SHORT_NAMED_BIT */




export const _decode_MatchesFor = $._decodeBitString;




export const _encode_MatchesFor = $._encodeBitString;


/* eslint-enable */
