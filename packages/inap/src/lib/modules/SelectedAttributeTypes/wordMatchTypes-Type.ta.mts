/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary wordMatchTypes_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wordMatchTypes-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_wordMatchTypes_Type {
    wordExact = 0,
    wordTruncated = 1,
    wordPhonetic = 2,
    wordProviderDefined = 3,
}

/**
 * @summary wordMatchTypes_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wordMatchTypes-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type wordMatchTypes_Type = _enum_for_wordMatchTypes_Type;

/**
 * @summary wordMatchTypes_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wordMatchTypes-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const wordMatchTypes_Type = _enum_for_wordMatchTypes_Type;

/**
 * @summary wordMatchTypes_Type_wordExact
 * @constant
 * @type {number}
 */
export
const wordMatchTypes_Type_wordExact: wordMatchTypes_Type = wordMatchTypes_Type.wordExact; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordExact
 * @constant
 * @type {number}
 */
export
const wordExact: wordMatchTypes_Type = wordMatchTypes_Type.wordExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordMatchTypes_Type_wordTruncated
 * @constant
 * @type {number}
 */
export
const wordMatchTypes_Type_wordTruncated: wordMatchTypes_Type = wordMatchTypes_Type.wordTruncated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordTruncated
 * @constant
 * @type {number}
 */
export
const wordTruncated: wordMatchTypes_Type = wordMatchTypes_Type.wordTruncated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordMatchTypes_Type_wordPhonetic
 * @constant
 * @type {number}
 */
export
const wordMatchTypes_Type_wordPhonetic: wordMatchTypes_Type = wordMatchTypes_Type.wordPhonetic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordPhonetic
 * @constant
 * @type {number}
 */
export
const wordPhonetic: wordMatchTypes_Type = wordMatchTypes_Type.wordPhonetic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordMatchTypes_Type_wordProviderDefined
 * @constant
 * @type {number}
 */
export
const wordMatchTypes_Type_wordProviderDefined: wordMatchTypes_Type = wordMatchTypes_Type.wordProviderDefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordProviderDefined
 * @constant
 * @type {number}
 */
export
const wordProviderDefined: wordMatchTypes_Type = wordMatchTypes_Type.wordProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_wordMatchTypes_Type: $.ASN1Decoder<wordMatchTypes_Type> = $._decodeEnumerated;

export
const _encode_wordMatchTypes_Type: $.ASN1Encoder<wordMatchTypes_Type> = $._encodeEnumerated;

/* eslint-enable */
