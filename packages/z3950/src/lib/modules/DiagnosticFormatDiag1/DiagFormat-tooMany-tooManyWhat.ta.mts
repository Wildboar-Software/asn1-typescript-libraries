/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_tooMany_tooManyWhat
 * @description
 * 
 * Which limit a diag-1 tooMany diagnostic reports. Values match DIAG.1
 * conditions 5, 6, 7, 8, 11, 12, 111, 112, and 234.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-tooMany-tooManyWhat ::= INTEGER {
 *     argumentWords (1),
 *     truncatedWords (2),
 *     booleanOperators (3),
 *     incompleteSubfields (4),
 *     characters (5),
 *     recordsRetrieved (6),
 *     dataBasesSpecified (7),
 *     resultSetsCreated (8),
 *     indexTermsProcessed (9)
 * }
 * ```
 */
export
type DiagFormat_tooMany_tooManyWhat = INTEGER;

/**
 * @summary DiagFormat_tooMany_tooManyWhat_argumentWords
 * @description
 * 
 * Too many argument words (DIAG.1 condition 5).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_argumentWords: 1 = 1 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_argumentWords
 * @description
 * 
 * Too many argument words (DIAG.1 condition 5).
 * 
 * @constant
 * @type {number}
 */
export
const argumentWords: 1 = DiagFormat_tooMany_tooManyWhat_argumentWords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_truncatedWords
 * @description
 * 
 * Too many truncated words (DIAG.1 condition 7).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_truncatedWords: 2 = 2 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_truncatedWords
 * @description
 * 
 * Too many truncated words (DIAG.1 condition 7).
 * 
 * @constant
 * @type {number}
 */
export
const truncatedWords: 2 = DiagFormat_tooMany_tooManyWhat_truncatedWords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_booleanOperators
 * @description
 * 
 * Too many boolean operators (DIAG.1 condition 6).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_booleanOperators: 3 = 3 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_booleanOperators
 * @description
 * 
 * Too many boolean operators (DIAG.1 condition 6).
 * 
 * @constant
 * @type {number}
 */
export
const booleanOperators: 3 = DiagFormat_tooMany_tooManyWhat_booleanOperators; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_incompleteSubfields
 * @description
 * 
 * Too many incomplete subfields (DIAG.1 condition 8).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_incompleteSubfields: 4 = 4 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_incompleteSubfields
 * @description
 * 
 * Too many incomplete subfields (DIAG.1 condition 8).
 * 
 * @constant
 * @type {number}
 */
export
const incompleteSubfields: 4 = DiagFormat_tooMany_tooManyWhat_incompleteSubfields; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_characters
 * @description
 * 
 * Too many characters in the search statement (DIAG.1 condition 11).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_characters: 5 = 5 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_characters
 * @description
 * 
 * Too many characters in the search statement (DIAG.1 condition 11).
 * 
 * @constant
 * @type {number}
 */
export
const characters: 5 = DiagFormat_tooMany_tooManyWhat_characters; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_recordsRetrieved
 * @description
 * 
 * Too many records retrieved (DIAG.1 condition 12).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_recordsRetrieved: 6 = 6 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_recordsRetrieved
 * @description
 * 
 * Too many records retrieved (DIAG.1 condition 12).
 * 
 * @constant
 * @type {number}
 */
export
const recordsRetrieved: 6 = DiagFormat_tooMany_tooManyWhat_recordsRetrieved; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_dataBasesSpecified
 * @description
 * 
 * Too many databases specified (DIAG.1 condition 111). Addinfo is the maximum.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_dataBasesSpecified: 7 = 7 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_dataBasesSpecified
 * @description
 * 
 * Too many databases specified (DIAG.1 condition 111). Addinfo is the maximum.
 * 
 * @constant
 * @type {number}
 */
export
const dataBasesSpecified: 7 = DiagFormat_tooMany_tooManyWhat_dataBasesSpecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_resultSetsCreated
 * @description
 * 
 * Too many result sets created (DIAG.1 condition 112). Addinfo is the maximum.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_resultSetsCreated: 8 = 8 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_resultSetsCreated
 * @description
 * 
 * Too many result sets created (DIAG.1 condition 112). Addinfo is the maximum.
 * 
 * @constant
 * @type {number}
 */
export
const resultSetsCreated: 8 = DiagFormat_tooMany_tooManyWhat_resultSetsCreated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_indexTermsProcessed
 * @description
 * 
 * Too many index terms processed (DIAG.1 condition 234). Addinfo is the number
 * of terms.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_tooMany_tooManyWhat_indexTermsProcessed: 9 = 9 satisfies DiagFormat_tooMany_tooManyWhat; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_tooMany_tooManyWhat_indexTermsProcessed
 * @description
 * 
 * Too many index terms processed (DIAG.1 condition 234). Addinfo is the number
 * of terms.
 * 
 * @constant
 * @type {number}
 */
export
const indexTermsProcessed: 9 = DiagFormat_tooMany_tooManyWhat_indexTermsProcessed; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_tooMany_tooManyWhat: $.ASN1Decoder<DiagFormat_tooMany_tooManyWhat> = $._decodeInteger;
export const _encode_DiagFormat_tooMany_tooManyWhat: $.ASN1Encoder<DiagFormat_tooMany_tooManyWhat> = $._encodeInteger;


/* eslint-enable */
