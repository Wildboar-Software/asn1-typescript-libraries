/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UiiFormat_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED {
 *   baseObject    (0),
 *   oneLevel      (1),
 *   wholeSubtree  (2) }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_UiiFormat_subset: {
    readonly baseObject: 0;
    readonly oneLevel: 1;
    readonly wholeSubtree: 2;
} = {
    baseObject: 0,
    oneLevel: 1,
    wholeSubtree: 2,
};

export
type _enum_for_UiiFormat_subset = ENUMERATED;

/**
 * @summary UiiFormat_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED {
 *   baseObject    (0),
 *   oneLevel      (1),
 *   wholeSubtree  (2) }
 * ```
 * 
 * @enum {number}
 */
export
type UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED {
 *   baseObject    (0),
 *   oneLevel      (1),
 *   wholeSubtree  (2) }
 * ```
 * 
 * @enum {number}
 */
export
const UiiFormat_subset: typeof _enum_for_UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset_baseObject
 * @constant
 * @type {number}
 */
export
const UiiFormat_subset_baseObject: number = UiiFormat_subset.baseObject satisfies UiiFormat_subset; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export
const baseObject: number = UiiFormat_subset_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_oneLevel
 * @constant
 * @type {number}
 */
export
const UiiFormat_subset_oneLevel: number = UiiFormat_subset.oneLevel satisfies UiiFormat_subset; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export
const oneLevel: number = UiiFormat_subset_oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export
const UiiFormat_subset_wholeSubtree: number = UiiFormat_subset.wholeSubtree satisfies UiiFormat_subset; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export
const wholeSubtree: number = UiiFormat_subset_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_UiiFormat_subset: $.ASN1Decoder<UiiFormat_subset> = $._decodeEnumerated;

export
const _encode_UiiFormat_subset: $.ASN1Encoder<UiiFormat_subset> = $._encodeEnumerated;

/* eslint-enable */
