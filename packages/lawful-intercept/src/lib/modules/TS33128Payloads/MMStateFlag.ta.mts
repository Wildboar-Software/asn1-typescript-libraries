/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStateFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStateFlag  ::=  ENUMERATED
 * {
 *     add(1),
 *     remove(2),
 *     filter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStateFlag {
    add = 1,
    remove = 2,
    filter = 3,
}

/**
 * @summary MMStateFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStateFlag  ::=  ENUMERATED
 * {
 *     add(1),
 *     remove(2),
 *     filter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMStateFlag = _enum_for_MMStateFlag;

/**
 * @summary MMStateFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStateFlag  ::=  ENUMERATED
 * {
 *     add(1),
 *     remove(2),
 *     filter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMStateFlag = _enum_for_MMStateFlag;

/**
 * @summary MMStateFlag_add
 * @constant
 * @type {number}
 */
export
const MMStateFlag_add: MMStateFlag = MMStateFlag.add; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary add
 * @constant
 * @type {number}
 */
export
const add: MMStateFlag = MMStateFlag.add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStateFlag_remove
 * @constant
 * @type {number}
 */
export
const MMStateFlag_remove: MMStateFlag = MMStateFlag.remove; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @constant
 * @type {number}
 */
export
const remove: MMStateFlag = MMStateFlag.remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStateFlag_filter
 * @constant
 * @type {number}
 */
export
const MMStateFlag_filter: MMStateFlag = MMStateFlag.filter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary filter
 * @constant
 * @type {number}
 */
export
const filter: MMStateFlag = MMStateFlag.filter; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMStateFlag: $.ASN1Decoder<MMStateFlag> = $._decodeEnumerated;
export const _encode_MMStateFlag: $.ASN1Encoder<MMStateFlag> = $._encodeEnumerated;


/* eslint-enable */
