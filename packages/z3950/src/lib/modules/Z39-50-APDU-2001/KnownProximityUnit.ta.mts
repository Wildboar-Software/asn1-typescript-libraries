/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KnownProximityUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KnownProximityUnit  ::=  INTEGER {
 *             character   (1),
 *             word        (2),
 *             sentence    (3),
 *             paragraph   (4),
 *             section     (5),
 *             chapter     (6),
 *             document    (7),
 *             element     (8),
 *             subelement  (9),
 *             elementType (10),
 *             byte        (11) -- Version 3 only
 * }
 * ```
 */
export
type KnownProximityUnit = INTEGER;

/**
 * @summary KnownProximityUnit_character
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_character: KnownProximityUnit = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_character
 * @constant
 * @type {number}
 */
export
const character: KnownProximityUnit = KnownProximityUnit_character; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_word
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_word: KnownProximityUnit = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_word
 * @constant
 * @type {number}
 */
export
const word: KnownProximityUnit = KnownProximityUnit_word; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_sentence
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_sentence: KnownProximityUnit = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_sentence
 * @constant
 * @type {number}
 */
export
const sentence: KnownProximityUnit = KnownProximityUnit_sentence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_paragraph
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_paragraph: KnownProximityUnit = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_paragraph
 * @constant
 * @type {number}
 */
export
const paragraph: KnownProximityUnit = KnownProximityUnit_paragraph; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_section
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_section: KnownProximityUnit = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_section
 * @constant
 * @type {number}
 */
export
const section: KnownProximityUnit = KnownProximityUnit_section; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_chapter
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_chapter: KnownProximityUnit = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_chapter
 * @constant
 * @type {number}
 */
export
const chapter: KnownProximityUnit = KnownProximityUnit_chapter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_document
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_document: KnownProximityUnit = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_document
 * @constant
 * @type {number}
 */
export
const document: KnownProximityUnit = KnownProximityUnit_document; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_element
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_element: KnownProximityUnit = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_element
 * @constant
 * @type {number}
 */
export
const element: KnownProximityUnit = KnownProximityUnit_element; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_subelement
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_subelement: KnownProximityUnit = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_subelement
 * @constant
 * @type {number}
 */
export
const subelement: KnownProximityUnit = KnownProximityUnit_subelement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_elementType
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_elementType: KnownProximityUnit = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_elementType
 * @constant
 * @type {number}
 */
export
const elementType: KnownProximityUnit = KnownProximityUnit_elementType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_byte
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_byte: KnownProximityUnit = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_byte
 * @constant
 * @type {number}
 */
export
const byte: KnownProximityUnit = KnownProximityUnit_byte; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_KnownProximityUnit = $._decodeInteger;
export const _encode_KnownProximityUnit = $._encodeInteger;


/* eslint-enable */
