/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PriorityDT
 * @description
 * 
 * The priority indication for a trigger payload.
 *
 * 3GPP TS 33.128, clause 7.7.3.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The priority indication for a trigger payload.
 *
 * 3GPP TS 33.128, clause 7.7.3.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The priority indication for a trigger payload.
 *
 * 3GPP TS 33.128, clause 7.7.3.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const PriorityDT_noPriority = PriorityDT.noPriority satisfies PriorityDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noPriority
 * @constant
 * @type {number}
 */
export
const noPriority = PriorityDT.noPriority satisfies PriorityDT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityDT_priority
 * @constant
 * @type {number}
 */
export
const PriorityDT_priority = PriorityDT.priority satisfies PriorityDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priority
 * @constant
 * @type {number}
 */
export
const priority = PriorityDT.priority satisfies PriorityDT; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PriorityDT: $.ASN1Decoder<PriorityDT> = $._decodeEnumerated;
export const _encode_PriorityDT: $.ASN1Encoder<PriorityDT> = $._encodeEnumerated;


/* eslint-enable */
