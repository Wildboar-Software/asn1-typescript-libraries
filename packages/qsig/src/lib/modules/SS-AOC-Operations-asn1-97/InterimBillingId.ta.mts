/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InterimBillingId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterimBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InterimBillingId {
    normalCharging = 0,
    creditCardCharging = 2,
}

/**
 * @summary InterimBillingId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterimBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InterimBillingId = _enum_for_InterimBillingId;

/**
 * @summary InterimBillingId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterimBillingId  ::=  ENUMERATED {
 *     normalCharging(0),
 *     creditCardCharging(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const InterimBillingId = _enum_for_InterimBillingId;

/**
 * @summary InterimBillingId_normalCharging
 * @constant
 * @type {number}
 */
export
const InterimBillingId_normalCharging: InterimBillingId = InterimBillingId.normalCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalCharging
 * @constant
 * @type {number}
 */
export
const normalCharging: InterimBillingId = InterimBillingId.normalCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterimBillingId_creditCardCharging
 * @constant
 * @type {number}
 */
export
const InterimBillingId_creditCardCharging: InterimBillingId = InterimBillingId.creditCardCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditCardCharging
 * @constant
 * @type {number}
 */
export
const creditCardCharging: InterimBillingId = InterimBillingId.creditCardCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_InterimBillingId: $.ASN1Decoder<InterimBillingId> = $._decodeEnumerated;

export
const _encode_InterimBillingId: $.ASN1Encoder<InterimBillingId> = $._encodeEnumerated;

/* eslint-enable */
