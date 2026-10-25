/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStatusExtension
 * @description
 * 
 * Extension of the MMStatus, that provides more granularity. Include if sent
 * to/by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.14.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Extension of the MMStatus, that provides more granularity. Include if sent
 * to/by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.14.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Extension of the MMStatus, that provides more granularity. Include if sent
 * to/by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.14.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const MMStatusExtension: typeof _enum_for_MMStatusExtension = _enum_for_MMStatusExtension;

/**
 * @summary MMStatusExtension_rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByMMSRecipient: _enum_for_MMStatusExtension.rejectionByMMSRecipient = MMStatusExtension.rejectionByMMSRecipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByMMSRecipient
 * @constant
 * @type {number}
 */
export
const rejectionByMMSRecipient: _enum_for_MMStatusExtension.rejectionByMMSRecipient = MMStatusExtension.rejectionByMMSRecipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusExtension_rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const MMStatusExtension_rejectionByOtherRS: _enum_for_MMStatusExtension.rejectionByOtherRS = MMStatusExtension.rejectionByOtherRS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectionByOtherRS
 * @constant
 * @type {number}
 */
export
const rejectionByOtherRS: _enum_for_MMStatusExtension.rejectionByOtherRS = MMStatusExtension.rejectionByOtherRS; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMStatusExtension: $.ASN1Decoder<MMStatusExtension> = $._decodeEnumerated;
export const _encode_MMStatusExtension: $.ASN1Encoder<MMStatusExtension> = $._encodeEnumerated;


/* eslint-enable */
