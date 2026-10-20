/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ShortMessageTextType
 * @description
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
 * @constant
 * @type {number}
 */
export
const ShortMessageTextType_iA5Coded: ShortMessageTextType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_iA5Coded
 * @constant
 * @type {number}
 */
export
const iA5Coded: ShortMessageTextType = ShortMessageTextType_iA5Coded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_octetCoded
 * @constant
 * @type {number}
 */
export
const ShortMessageTextType_octetCoded: ShortMessageTextType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_octetCoded
 * @constant
 * @type {number}
 */
export
const octetCoded: ShortMessageTextType = ShortMessageTextType_octetCoded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_uniCoded
 * @constant
 * @type {number}
 */
export
const ShortMessageTextType_uniCoded: ShortMessageTextType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_uniCoded
 * @constant
 * @type {number}
 */
export
const uniCoded: ShortMessageTextType = ShortMessageTextType_uniCoded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_compressedCoded
 * @constant
 * @type {number}
 */
export
const ShortMessageTextType_compressedCoded: ShortMessageTextType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShortMessageTextType_compressedCoded
 * @constant
 * @type {number}
 */
export
const compressedCoded: ShortMessageTextType = ShortMessageTextType_compressedCoded; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ShortMessageTextType: $.ASN1Decoder<ShortMessageTextType> = $._decodeInteger;

export
const _encode_ShortMessageTextType: $.ASN1Encoder<ShortMessageTextType> = $._encodeInteger;

/* eslint-enable */
