/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortKeyDetails_caseSensitivity
 * @description
 * How case is treated for a sort key, including the default when the sort
 * request does not say. ANSI/NISO Z39.50-2003 §3.2.10.3.13; Explain ASN.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeyDetails-caseSensitivity ::= INTEGER {
 *     always (0),
 *     -- always case-sensitive
 *     never (1),
 *     -- never case-sensitive
 *     default-yes (2),
 *     -- case-sensitivity is as specified on request,
 *     -- and if not specified, case-sensitive
 *     default-no (3)
 * }
 * ```
 */
export
type SortKeyDetails_caseSensitivity = INTEGER;

/**
 * @summary SortKeyDetails_caseSensitivity_always
 * @description
 * The key is always case-sensitive. ANSI/NISO Z39.50-2003 Explain ASN.1.
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_always: SortKeyDetails_caseSensitivity = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_always
 * @description
 * Short name for `SortKeyDetails_caseSensitivity_always`.
 * @constant
 * @type {number}
 */
export
const always: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_always; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_never
 * @description
 * The key is never case-sensitive. ANSI/NISO Z39.50-2003 Explain ASN.1.
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_never: SortKeyDetails_caseSensitivity = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_never
 * @description
 * Short name for `SortKeyDetails_caseSensitivity_never`.
 * @constant
 * @type {number}
 */
export
const never: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_never; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_yes
 * @description
 * Case sensitivity is as specified on the request. If the request does not
 * specify, the key is case-sensitive. ANSI/NISO Z39.50-2003 Explain ASN.1.
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_default_yes: SortKeyDetails_caseSensitivity = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_yes
 * @description
 * Short name for `SortKeyDetails_caseSensitivity_default_yes`.
 * @constant
 * @type {number}
 */
export
const default_yes: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_default_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_no
 * @description
 * Case sensitivity is as specified on the request. If the request does not
 * specify, the key is not case-sensitive. ANSI/NISO Z39.50-2003 Explain ASN.1.
 * @constant
 * @type {number}
 */
export
const SortKeyDetails_caseSensitivity_default_no: SortKeyDetails_caseSensitivity = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortKeyDetails_caseSensitivity_default_no
 * @description
 * Short name for `SortKeyDetails_caseSensitivity_default_no`.
 * @constant
 * @type {number}
 */
export
const default_no: SortKeyDetails_caseSensitivity = SortKeyDetails_caseSensitivity_default_no; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SortKeyDetails_caseSensitivity: $.ASN1Decoder<SortKeyDetails_caseSensitivity> = $._decodeInteger;
export const _encode_SortKeyDetails_caseSensitivity: $.ASN1Encoder<SortKeyDetails_caseSensitivity> = $._encodeInteger;


/* eslint-enable */
