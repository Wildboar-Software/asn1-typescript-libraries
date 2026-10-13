/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSQuotaUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSQuotaUnit  ::=  ENUMERATED
 * {
 *     numMessages(1),
 *     bytes(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSQuotaUnit {
    numMessages = 1,
    bytes = 2,
}

/**
 * @summary MMSQuotaUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSQuotaUnit  ::=  ENUMERATED
 * {
 *     numMessages(1),
 *     bytes(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSQuotaUnit = _enum_for_MMSQuotaUnit;

/**
 * @summary MMSQuotaUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSQuotaUnit  ::=  ENUMERATED
 * {
 *     numMessages(1),
 *     bytes(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSQuotaUnit = _enum_for_MMSQuotaUnit;

/**
 * @summary MMSQuotaUnit_numMessages
 * @constant
 * @type {number}
 */
export
const MMSQuotaUnit_numMessages: MMSQuotaUnit = MMSQuotaUnit.numMessages; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numMessages
 * @constant
 * @type {number}
 */
export
const numMessages: MMSQuotaUnit = MMSQuotaUnit.numMessages; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSQuotaUnit_bytes
 * @constant
 * @type {number}
 */
export
const MMSQuotaUnit_bytes: MMSQuotaUnit = MMSQuotaUnit.bytes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bytes
 * @constant
 * @type {number}
 */
export
const bytes: MMSQuotaUnit = MMSQuotaUnit.bytes; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSQuotaUnit: $.ASN1Decoder<MMSQuotaUnit> = $._decodeEnumerated;
export const _encode_MMSQuotaUnit: $.ASN1Encoder<MMSQuotaUnit> = $._encodeEnumerated;


/* eslint-enable */
