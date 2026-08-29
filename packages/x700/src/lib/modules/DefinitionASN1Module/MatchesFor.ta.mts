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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary MatchesFor
 * @description
 *
 * GDMO attribute `MATCHES FOR` qualifiers (filter tests). Presence
 * matching is always allowed; if this construct is absent, other
 * matching is undefined and not permitted. Bits (X.722 §8.7.3.3):
 * `equality(0)`, `ordering(1)`, `substrings(2)`,
 * `setComparison(3)` (subset/superset), `setIntersection(4)`. When
 * `DERIVED FROM` is used, matching rules are the logical OR of derived
 * and local qualifiers. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.4](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
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
 * @description
 *
 * EQUALITY: value may be tested for equality. X.722 §8.7.3.3.
 * @constant
 */
export const MatchesFor_equality: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary equality
 * @description
 *
 * EQUALITY. Same as `MatchesFor_equality`.
 * @constant
 */
export const equality: number = MatchesFor_equality; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_ordering
 * @description
 *
 * ORDERING: greater/less comparison. X.722 §8.7.3.3.
 * @constant
 */
export const MatchesFor_ordering: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary ordering
 * @description
 *
 * ORDERING. Same as `MatchesFor_ordering`.
 * @constant
 */
export const ordering: number = MatchesFor_ordering; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_substrings
 * @description
 *
 * SUBSTRINGS: substring presence. X.722 §8.7.3.3.
 * @constant
 */
export const MatchesFor_substrings: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary substrings
 * @description
 *
 * SUBSTRINGS. Same as `MatchesFor_substrings`.
 * @constant
 */
export const substrings: number = MatchesFor_substrings; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_setComparison
 * @description
 *
 * SET-COMPARISON: subset/superset. X.722 §8.7.3.3.
 * @constant
 */
export const MatchesFor_setComparison: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary setComparison
 * @description
 *
 * SET-COMPARISON. Same as `MatchesFor_setComparison`.
 * @constant
 */
export const setComparison: number = MatchesFor_setComparison; /* SHORT_NAMED_BIT */


/**
 * @summary MatchesFor_setIntersection
 * @description
 *
 * SET-INTERSECTION: non-null intersection. X.722 §8.7.3.3.
 * @constant
 */
export const MatchesFor_setIntersection: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary setIntersection
 * @description
 *
 * SET-INTERSECTION. Same as `MatchesFor_setIntersection`.
 * @constant
 */
export const setIntersection: number = MatchesFor_setIntersection; /* SHORT_NAMED_BIT */




export const _decode_MatchesFor = $._decodeBitString;




export const _encode_MatchesFor = $._encodeBitString;


/* eslint-enable */
