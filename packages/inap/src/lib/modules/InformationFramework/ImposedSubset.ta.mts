/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ImposedSubset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImposedSubset  ::=  ENUMERATED {baseObject(0), oneLevel(1), wholeSubtree(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ImposedSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}

/**
 * @summary ImposedSubset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImposedSubset  ::=  ENUMERATED {baseObject(0), oneLevel(1), wholeSubtree(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ImposedSubset = _enum_for_ImposedSubset;

/**
 * @summary ImposedSubset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImposedSubset  ::=  ENUMERATED {baseObject(0), oneLevel(1), wholeSubtree(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ImposedSubset = _enum_for_ImposedSubset;

/**
 * @summary ImposedSubset_baseObject
 * @constant
 * @type {number}
 */
export
const ImposedSubset_baseObject: ImposedSubset = ImposedSubset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export
const baseObject: ImposedSubset = ImposedSubset.baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImposedSubset_oneLevel
 * @constant
 * @type {number}
 */
export
const ImposedSubset_oneLevel: ImposedSubset = ImposedSubset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export
const oneLevel: ImposedSubset = ImposedSubset.oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImposedSubset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const ImposedSubset_wholeSubtree: ImposedSubset = ImposedSubset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export
const wholeSubtree: ImposedSubset = ImposedSubset.wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ImposedSubset: $.ASN1Decoder<ImposedSubset> = $._decodeEnumerated;

export
const _encode_ImposedSubset: $.ASN1Encoder<ImposedSubset> = $._encodeEnumerated;

/* eslint-enable */
