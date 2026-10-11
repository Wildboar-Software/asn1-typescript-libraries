/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStatusExtension {
    rejectionByMMSRecipient = 0,
    rejectionByOtherRS = 1,
}

/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMStatusExtension = _enum_for_MMStatusExtension;

/**
 * @summary MMStatusExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusExtension  ::=  ENUMERATED
 * {
 *     rejectionByMMSRecipient(0),
 *     rejectionByOtherRS(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMStatusExtension = _enum_for_MMStatusExtension;

/**
 * @summary MMStatusExtension_rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByMMSRecipient: MMStatusExtension = MMStatusExtension.rejectionByMMSRecipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const rejectionByMMSRecipient: MMStatusExtension = MMStatusExtension.rejectionByMMSRecipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusExtension_rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByOtherRS: MMStatusExtension = MMStatusExtension.rejectionByOtherRS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const rejectionByOtherRS: MMStatusExtension = MMStatusExtension.rejectionByOtherRS; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_MMStatusExtension: $.ASN1Decoder<MMStatusExtension> = $._decodeEnumerated;

export const _encode_MMStatusExtension: $.ASN1Encoder<MMStatusExtension> = $._encodeEnumerated;


/* eslint-enable */
