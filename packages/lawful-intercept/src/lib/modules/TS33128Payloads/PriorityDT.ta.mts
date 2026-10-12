/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PriorityDT {
    noPriority = 1,
    priority = 2,
}

/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PriorityDT = _enum_for_PriorityDT;

/**
 * @summary PriorityDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityDT  ::=  ENUMERATED
 * {
 *     noPriority(1),
 *     priority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PriorityDT = _enum_for_PriorityDT;

/**
 * @summary PriorityDT_noPriority
 * @constant
 * @type {number}
 */
export
const PriorityDT_noPriority: PriorityDT = PriorityDT.noPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noPriority
 * @constant
 * @type {number}
 */
export
const noPriority: PriorityDT = PriorityDT.noPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityDT_priority
 * @constant
 * @type {number}
 */
export
const PriorityDT_priority: PriorityDT = PriorityDT.priority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priority
 * @constant
 * @type {number}
 */
export
const priority: PriorityDT = PriorityDT.priority; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PriorityDT: $.ASN1Decoder<PriorityDT> = $._decodeEnumerated;
export const _encode_PriorityDT: $.ASN1Encoder<PriorityDT> = $._encodeEnumerated;


/* eslint-enable */
