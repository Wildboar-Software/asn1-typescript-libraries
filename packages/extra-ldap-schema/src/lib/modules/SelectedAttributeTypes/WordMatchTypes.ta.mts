/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_WordMatchTypes: {
    readonly wordExact: 0;
    readonly wordTruncated: 1;
    readonly wordPhonetic: 2;
    readonly wordProviderDefined: 3;
} = {
    wordExact: 0,
    wordTruncated: 1,
    wordPhonetic: 2,
    wordProviderDefined: 3,
};

export
type _enum_for_WordMatchTypes = ENUMERATED;

/**
 * @summary WordMatchTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WordMatchTypes  ::=  ENUMERATED {
 *   wordExact           (0),
 *   wordTruncated       (1),
 *   wordPhonetic        (2),
 *   wordProviderDefined (3),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export
type WordMatchTypes = _enum_for_WordMatchTypes | ENUMERATED;

/**
 * @summary WordMatchTypes_wordExact
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordExact: number = 0 satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordExact
 * @constant
 * @type {number}
 */
export
const wordExact: number = WordMatchTypes_wordExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordTruncated
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordTruncated: number = 1 satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordTruncated
 * @constant
 * @type {number}
 */
export
const wordTruncated: number = WordMatchTypes_wordTruncated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordPhonetic
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordPhonetic: number = 2 satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordPhonetic
 * @constant
 * @type {number}
 */
export
const wordPhonetic: number = WordMatchTypes_wordPhonetic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordProviderDefined
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordProviderDefined: number = 3 satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordProviderDefined
 * @constant
 * @type {number}
 */
export
const wordProviderDefined: number = WordMatchTypes_wordProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_WordMatchTypes: $.ASN1Decoder<WordMatchTypes> = $._decodeEnumerated;

export
const _encode_WordMatchTypes: $.ASN1Encoder<WordMatchTypes> = $._encodeEnumerated;

/* eslint-enable */
