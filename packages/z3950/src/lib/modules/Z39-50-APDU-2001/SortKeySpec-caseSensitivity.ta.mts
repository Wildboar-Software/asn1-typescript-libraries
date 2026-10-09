/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortKeySpec_caseSensitivity
 * @description
 * 
 * Case handling for one sort key, when case applies (ANSI/NISO Z39.50-2003
 * §3.2.7.1.3). The standard does not define the comparison further.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeySpec-caseSensitivity ::= INTEGER {
 *     caseSensitive (0),
 *     caseInsensitive (1)
 * }
 * ```
 */
export
type SortKeySpec_caseSensitivity = INTEGER;

/**
 * @summary SortKeySpec_caseSensitivity_caseSensitive
 * @description
 * 
 * Letter case distinguishes sort values (ANSI/NISO Z39.50-2003 §3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const SortKeySpec_caseSensitivity_caseSensitive: SortKeySpec_caseSensitivity = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_caseSensitivity_caseSensitive
 * @description
 * 
 * Short name for `SortKeySpec_caseSensitivity_caseSensitive`. Case
 * distinguishes values (§3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const caseSensitive: SortKeySpec_caseSensitivity = SortKeySpec_caseSensitivity_caseSensitive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_caseSensitivity_caseInsensitive
 * @description
 * 
 * Letter case does not distinguish sort values (ANSI/NISO Z39.50-2003
 * §3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const SortKeySpec_caseSensitivity_caseInsensitive: SortKeySpec_caseSensitivity = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeySpec_caseSensitivity_caseInsensitive
 * @description
 * 
 * Short name for `SortKeySpec_caseSensitivity_caseInsensitive`. Case does not
 * distinguish values (§3.2.7.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const caseInsensitive: SortKeySpec_caseSensitivity = SortKeySpec_caseSensitivity_caseInsensitive; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortKeySpec_caseSensitivity: $.ASN1Decoder<SortKeySpec_caseSensitivity> = $._decodeInteger;
export const _encode_SortKeySpec_caseSensitivity: $.ASN1Encoder<SortKeySpec_caseSensitivity> = $._encodeInteger;


/* eslint-enable */
