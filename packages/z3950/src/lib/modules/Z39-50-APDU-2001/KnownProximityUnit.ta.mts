/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KnownProximityUnit
 * @description
 * 
 * Registered proximity unit (ANSI/NISO Z39.50-2003 §3.7.2.1). Distance is a
 * difference of ordinals in this unit, and distance zero means the same unit.
 * `byte` may be used only when version 3 is in force.
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
 * @description
 * 
 * Proximity unit of one character (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_character: KnownProximityUnit = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_character
 * @description
 * 
 * Short name for `KnownProximityUnit_character`. Unit of one character
 * (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const character: KnownProximityUnit = KnownProximityUnit_character; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_word
 * @description
 * 
 * Proximity unit of one word (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_word: KnownProximityUnit = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_word
 * @description
 * 
 * Short name for `KnownProximityUnit_word`. Unit of one word (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const word: KnownProximityUnit = KnownProximityUnit_word; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_sentence
 * @description
 * 
 * Proximity unit of one sentence (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_sentence: KnownProximityUnit = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_sentence
 * @description
 * 
 * Short name for `KnownProximityUnit_sentence`. Unit of one sentence
 * (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const sentence: KnownProximityUnit = KnownProximityUnit_sentence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_paragraph
 * @description
 * 
 * Proximity unit of one paragraph. Distance 0 means the same paragraph
 * (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_paragraph: KnownProximityUnit = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_paragraph
 * @description
 * 
 * Short name for `KnownProximityUnit_paragraph`. Unit of one paragraph
 * (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const paragraph: KnownProximityUnit = KnownProximityUnit_paragraph; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_section
 * @description
 * 
 * Proximity unit of one section (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_section: KnownProximityUnit = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_section
 * @description
 * 
 * Short name for `KnownProximityUnit_section`. Unit of one section (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const section: KnownProximityUnit = KnownProximityUnit_section; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_chapter
 * @description
 * 
 * Proximity unit of one chapter (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_chapter: KnownProximityUnit = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_chapter
 * @description
 * 
 * Short name for `KnownProximityUnit_chapter`. Unit of one chapter (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const chapter: KnownProximityUnit = KnownProximityUnit_chapter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_document
 * @description
 * 
 * Proximity unit of one document (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_document: KnownProximityUnit = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_document
 * @description
 * 
 * Short name for `KnownProximityUnit_document`. Unit of one document
 * (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const document: KnownProximityUnit = KnownProximityUnit_document; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_element
 * @description
 * 
 * Named proximity unit. The standard lists `element` and does not define it
 * further (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_element: KnownProximityUnit = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_element
 * @description
 * 
 * Short name for `KnownProximityUnit_element`. The standard does not define
 * this unit further (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const element: KnownProximityUnit = KnownProximityUnit_element; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_subelement
 * @description
 * 
 * Named proximity unit. The standard lists `subelement` and does not define it
 * further (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_subelement: KnownProximityUnit = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_subelement
 * @description
 * 
 * Short name for `KnownProximityUnit_subelement`. The standard does not define
 * this unit further (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const subelement: KnownProximityUnit = KnownProximityUnit_subelement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_elementType
 * @description
 * 
 * Named proximity unit. The standard lists `elementType` and does not define it
 * further (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_elementType: KnownProximityUnit = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_elementType
 * @description
 * 
 * Short name for `KnownProximityUnit_elementType`. The standard does not define
 * this unit further (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const elementType: KnownProximityUnit = KnownProximityUnit_elementType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_byte
 * @description
 * 
 * Proximity unit of one byte. Version 3 only (ANSI/NISO Z39.50-2003 §3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const KnownProximityUnit_byte: KnownProximityUnit = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary KnownProximityUnit_byte
 * @description
 * 
 * Short name for `KnownProximityUnit_byte`. Unit of one byte; version 3 only
 * (§3.7.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const byte: KnownProximityUnit = KnownProximityUnit_byte; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_KnownProximityUnit: $.ASN1Decoder<KnownProximityUnit> = $._decodeInteger;
export const _encode_KnownProximityUnit: $.ASN1Encoder<KnownProximityUnit> = $._encodeInteger;


/* eslint-enable */
