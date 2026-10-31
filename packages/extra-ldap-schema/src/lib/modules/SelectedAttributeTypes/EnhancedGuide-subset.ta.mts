/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnhancedGuide_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnhancedGuide-subset ::= INTEGER {
 *   baseObject   (0),
 *   oneLevel     (1),
 *   wholeSubtree (2) }
 * ```
 */
export
type EnhancedGuide_subset = INTEGER;

/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export
const EnhancedGuide_subset_baseObject: number = 0 satisfies EnhancedGuide_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export
const baseObject: number = EnhancedGuide_subset_baseObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const EnhancedGuide_subset_oneLevel: number = 1 satisfies EnhancedGuide_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const oneLevel: number = EnhancedGuide_subset_oneLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const EnhancedGuide_subset_wholeSubtree: number = 2 satisfies EnhancedGuide_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const wholeSubtree: number = EnhancedGuide_subset_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_EnhancedGuide_subset: $.ASN1Decoder<EnhancedGuide_subset> = $._decodeInteger;

export
const _encode_EnhancedGuide_subset: $.ASN1Encoder<EnhancedGuide_subset> = $._encodeInteger;

/* eslint-enable */
