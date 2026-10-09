/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortKeySpec_sortRelation
 * @description
 * 
 * Sort direction for one key (ANSI/NISO Z39.50-2003 §3.2.7.1.3, §4.1 comment
 * 4). Frequency order groups records by how often the key value occurs. Within
 * one value, order is up to the server and the client cannot predict it.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeySpec-sortRelation ::= INTEGER {
 *     ascending (0),
 *     descending (1),
 *     ascendingByFrequency (3),
 *     descendingByfrequency (4)
 * }
 * ```
 */
export
type SortKeySpec_sortRelation = INTEGER;

/**
 * @summary SortKeySpec_sortRelation_ascending
 * @description
 * 
 * Increasing order of the key value (ANSI/NISO Z39.50-2003 §3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_ascending: SortKeySpec_sortRelation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_ascending
 * @description
 * 
 * Short name for `SortKeySpec_sortRelation_ascending`. Increasing key order
 * (§3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const ascending: SortKeySpec_sortRelation = SortKeySpec_sortRelation_ascending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descending
 * @description
 * 
 * Decreasing order of the key value (ANSI/NISO Z39.50-2003 §3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_descending: SortKeySpec_sortRelation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descending
 * @description
 * 
 * Short name for `SortKeySpec_sortRelation_descending`. Decreasing key order
 * (§3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const descending: SortKeySpec_sortRelation = SortKeySpec_sortRelation_descending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_ascendingByFrequency
 * @description
 * 
 * Increasing order of how often the key value occurs (ANSI/NISO Z39.50-2003
 * §4.1, comment 4). Order among records that share a value is server-defined.
 * 
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_ascendingByFrequency: SortKeySpec_sortRelation = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_ascendingByFrequency
 * @description
 * 
 * Short name for `SortKeySpec_sortRelation_ascendingByFrequency`. Rarest key
 * value first (§4.1, comment 4).
 * 
 * @constant
 * @type {number}
 */
export
const ascendingByFrequency: SortKeySpec_sortRelation = SortKeySpec_sortRelation_ascendingByFrequency; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descendingByfrequency
 * @description
 * 
 * Decreasing order of how often the key value occurs. The ASN.1 name spells
 * `frequency` with a lowercase f (ANSI/NISO Z39.50-2003 §4.1, comment 4). The
 * most frequent value comes first. Order among records that share a value is
 * server-defined.
 * 
 * @constant
 * @type {number}
 */
export
const SortKeySpec_sortRelation_descendingByfrequency: SortKeySpec_sortRelation = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_sortRelation_descendingByfrequency
 * @description
 * 
 * Short name for `SortKeySpec_sortRelation_descendingByfrequency`. Most
 * frequent key value first (§4.1, comment 4).
 * 
 * @constant
 * @type {number}
 */
export
const descendingByfrequency: SortKeySpec_sortRelation = SortKeySpec_sortRelation_descendingByfrequency; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortKeySpec_sortRelation: $.ASN1Decoder<SortKeySpec_sortRelation> = $._decodeInteger;
export const _encode_SortKeySpec_sortRelation: $.ASN1Encoder<SortKeySpec_sortRelation> = $._encodeInteger;


/* eslint-enable */
