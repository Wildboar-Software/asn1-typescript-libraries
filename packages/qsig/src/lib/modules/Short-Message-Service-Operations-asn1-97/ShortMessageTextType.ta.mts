/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ShortMessageTextType
 * @description
 *
 * How to read `shortMessageTextData` (ECMA-325 §E.1.3.4). Range 0..8. Only 0
 * to 3 are named. The standard is silent on values 4 to 8.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShortMessageTextType  ::=  INTEGER {
 *     iA5Coded(0), -- ShortMessageTextData shall contain data according to
 *     octetCoded(1), -- the type given in ShortMessageTextType, for further
 *     uniCoded(2), -- details see annex E. 1.3.4.
 *     compressedCoded(3)
 * } (0..8)
 * ```
 */
export
type ShortMessageTextType = INTEGER;

/**
 * @summary ShortMessageTextType_iA5Coded
 * @description
 *
 * Value 0. IA5 text, 0 to 140 octets, at most 160 characters (ECMA-325
 * §E.1.3.4.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const ShortMessageTextType_iA5Coded: ShortMessageTextType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary iA5Coded
 * @description Alias of {@link ShortMessageTextType_iA5Coded}.
 * @constant
 * @type {number}
 */
export
const iA5Coded: ShortMessageTextType = ShortMessageTextType_iA5Coded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_octetCoded
 * @description
 *
 * Value 1. Octet-coded text, 0 to 140 octets, at most 140 characters (ECMA-325
 * §E.1.3.4.2).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const ShortMessageTextType_octetCoded: ShortMessageTextType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary octetCoded
 * @description Alias of {@link ShortMessageTextType_octetCoded}.
 * @constant
 * @type {number}
 */
export
const octetCoded: ShortMessageTextType = ShortMessageTextType_octetCoded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_uniCoded
 * @description
 *
 * Value 2. ISO/IEC 10646-1 text, 0 to 140 octets, at most 70 characters
 * (ECMA-325 §E.1.3.4.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const ShortMessageTextType_uniCoded: ShortMessageTextType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary uniCoded
 * @description Alias of {@link ShortMessageTextType_uniCoded}.
 * @constant
 * @type {number}
 */
export
const uniCoded: ShortMessageTextType = ShortMessageTextType_uniCoded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_compressedCoded
 * @description
 *
 * Value 3. Compressed text, 0 to 140 octets, including the GSM 03.42
 * compressed-data header and footer. `compressed` shall be TRUE (ECMA-325
 * §E.1.3.4.4).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 */
export
const ShortMessageTextType_compressedCoded: ShortMessageTextType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary compressedCoded
 * @description Alias of {@link ShortMessageTextType_compressedCoded}.
 * @constant
 * @type {number}
 */
export
const compressedCoded: ShortMessageTextType = ShortMessageTextType_compressedCoded; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ShortMessageTextType = (el: _Element): ShortMessageTextType => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 8n) : (value < 0 || value > 8))) {
        throw new ASN1OverflowError("ShortMessageTextType violates INTEGER constraint");
    }
    return value;
};

export
const _encode_ShortMessageTextType: $.ASN1Encoder<ShortMessageTextType> = $._encodeInteger;

/* eslint-enable */
