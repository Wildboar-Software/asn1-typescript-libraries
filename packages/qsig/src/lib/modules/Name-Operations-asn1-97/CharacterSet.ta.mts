/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CharacterSet
 * @description
 *
 * Character set of an extended name (ECMA-164 §6.1). If the element is absent
 * from `NameSet`, ISO 8859-1 is implied. The integer is constrained to 0..255.
 * Value 2 was assigned to CCITT Rec. T.61, which ITU-T has withdrawn, and is
 * not named. The Standard says further editions might add character sets; it
 * does not say when to use `unknown`. ISO 8859-6 is not named.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
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
 * @description
 *
 * Value 0. ECMA-164 §6.1 assigns the name and does not state when to use it.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_unknown = 0 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unknown
 * @description Alias of {@link CharacterSet_unknown}.
 * @constant
 * @type {number}
 */
export
const unknown = CharacterSet_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_1
 * @description
 *
 * ISO 8859-1 (ECMA-164 §6.1). Also implied by the simple presentation choices
 * and when `characterSet` is omitted from `NameSet`.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso8859_1 = 1 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso8859_1
 * @description Alias of {@link CharacterSet_iso8859_1}.
 * @constant
 * @type {number}
 */
export
const iso8859_1 = CharacterSet_iso8859_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_2
 * @description ISO 8859-2 (ECMA-164 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso8859_2 = 3 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso8859_2
 * @description Alias of {@link CharacterSet_iso8859_2}.
 * @constant
 * @type {number}
 */
export
const iso8859_2 = CharacterSet_iso8859_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_3
 * @description ISO 8859-3 (ECMA-164 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso8859_3 = 4 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso8859_3
 * @description Alias of {@link CharacterSet_iso8859_3}.
 * @constant
 * @type {number}
 */
export
const iso8859_3 = CharacterSet_iso8859_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_4
 * @description ISO 8859-4 (ECMA-164 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso8859_4 = 5 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso8859_4
 * @description Alias of {@link CharacterSet_iso8859_4}.
 * @constant
 * @type {number}
 */
export
const iso8859_4 = CharacterSet_iso8859_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_5
 * @description ISO 8859-5 (ECMA-164 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso8859_5 = 6 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso8859_5
 * @description Alias of {@link CharacterSet_iso8859_5}.
 * @constant
 * @type {number}
 */
export
const iso8859_5 = CharacterSet_iso8859_5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso8859_7
 * @description ISO 8859-7 (ECMA-164 §6.1). ISO 8859-6 is not assigned.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso8859_7 = 7 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso8859_7
 * @description Alias of {@link CharacterSet_iso8859_7}.
 * @constant
 * @type {number}
 */
export
const iso8859_7 = CharacterSet_iso8859_7; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso10646_BmpString
 * @description
 *
 * ISO/IEC 10646 BMP, also BMPString in ITU-T Rec. X.680. Each character
 * occupies 2 octets in `NameData` (ECMA-164 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso10646_BmpString = 8 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso10646_BmpString
 * @description Alias of {@link CharacterSet_iso10646_BmpString}.
 * @constant
 * @type {number}
 */
export
const iso10646_BmpString = CharacterSet_iso10646_BmpString; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CharacterSet_iso10646_utf_8String
 * @description
 *
 * ISO/IEC 10646 UTF-8, Annex R of ISO/IEC 10646-1. Each character occupies 1 to
 * 6 octets in `NameData` (ECMA-164 §6.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 */
export
const CharacterSet_iso10646_utf_8String = 9 satisfies CharacterSet; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iso10646_utf_8String
 * @description Alias of {@link CharacterSet_iso10646_utf_8String}.
 * @constant
 * @type {number}
 */
export
const iso10646_utf_8String = CharacterSet_iso10646_utf_8String; /* SHORT_NAMED_INTEGER_VALUE */

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
