/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CharacterSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CharacterSet  ::=  INTEGER {
 *     unknown(0),
 *     iso8859-1(1),
 *     -- The character set "iso8859-1" is specified in International
 *     -- Standard ISO 8859-1
 *     -- The value 2 was assigned for CCITT Rec. T.61
 *     -- which has been withdrawn by ITU-T.
 *     iso8859-2(3),
 *     -- The character set “iso8859-2” is specified in International
 *     -- Standard ISO 8859-2
 *     iso8859-3(4),
 *     --The character set “iso8859-3” is specified in International
 *     -- Standard ISO 8859-3
 *     iso8859-4(5),
 *     --The character set “iso8859-4” is specified in International
 *     -- Standard ISO 8859-4
 *     iso8859-5(6),
 *     --The character set “iso8859-5” is specified in International
 *     -- Standard ISO 8859-5
 *     iso8859-7(7),
 *     --The character set “iso8859-7” is specified in International
 *     -- Standard ISO 8859-7
 *     iso10646-BmpString(8),
 *     -- The character set “iso10646-BmpString” is specified in International
 *     -- Standard ISO 10646-1 and in ITU-T Rec. X.680
 *     -- with this character set, each character occupies 2 octets in NameData
 *     iso10646-utf-8String(9)
 *     -- The character set “iso10646-utf-8String” is specified in International
 *     -- Standard ISO 10646-1
 *     -- UTF-8-String is defined in Annex R of ISO 10646-1
 *     -- with this character set, each character occupies a variable
 *     -- number of octets (1…6) in NameData
 * } (0..255)
 * ```
 */
export
type CharacterSet = INTEGER;

/**
 * @summary CharacterSet_unknown
 * @constant
 * @type {number}
 */
export
const CharacterSet_unknown: CharacterSet = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_unknown
 * @constant
 * @type {number}
 */
export
const unknown: CharacterSet = CharacterSet_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_1
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso8859_1: CharacterSet = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_1
 * @constant
 * @type {number}
 */
export
const iso8859_1: CharacterSet = CharacterSet_iso8859_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_2
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso8859_2: CharacterSet = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_2
 * @constant
 * @type {number}
 */
export
const iso8859_2: CharacterSet = CharacterSet_iso8859_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_3
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso8859_3: CharacterSet = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_3
 * @constant
 * @type {number}
 */
export
const iso8859_3: CharacterSet = CharacterSet_iso8859_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_4
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso8859_4: CharacterSet = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_4
 * @constant
 * @type {number}
 */
export
const iso8859_4: CharacterSet = CharacterSet_iso8859_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_5
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso8859_5: CharacterSet = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_5
 * @constant
 * @type {number}
 */
export
const iso8859_5: CharacterSet = CharacterSet_iso8859_5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_7
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso8859_7: CharacterSet = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_7
 * @constant
 * @type {number}
 */
export
const iso8859_7: CharacterSet = CharacterSet_iso8859_7; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso10646_BmpString
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso10646_BmpString: CharacterSet = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso10646_BmpString
 * @constant
 * @type {number}
 */
export
const iso10646_BmpString: CharacterSet = CharacterSet_iso10646_BmpString; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso10646_utf_8String
 * @constant
 * @type {number}
 */
export
const CharacterSet_iso10646_utf_8String: CharacterSet = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso10646_utf_8String
 * @constant
 * @type {number}
 */
export
const iso10646_utf_8String: CharacterSet = CharacterSet_iso10646_utf_8String; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CharacterSet = (el: _Element): CharacterSet => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("CharacterSet violates INTEGER constraint");
    }
    return value;
};

export
const _encode_CharacterSet: $.ASN1Encoder<CharacterSet> = $._encodeInteger;

/* eslint-enable */
