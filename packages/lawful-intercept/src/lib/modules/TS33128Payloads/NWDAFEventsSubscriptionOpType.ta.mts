/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * Identifies the type of Nnwdaf_EventsSubscription service operation, i.e.,
 * POST to create a subscription, PUT to update a subscription, DELETE to delete
 * a subscription.
 *
 * 3GPP TS 33.128, clause 7.16.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFEventsSubscriptionOpType {
    pOST = 1,
    pUT = 2,
    dELETE = 3,
}

/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * Identifies the type of Nnwdaf_EventsSubscription service operation, i.e.,
 * POST to create a subscription, PUT to update a subscription, DELETE to delete
 * a subscription.
 *
 * 3GPP TS 33.128, clause 7.16.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;

/**
 * @summary NWDAFEventsSubscriptionOpType
 * @description
 * 
 * Identifies the type of Nnwdaf_EventsSubscription service operation, i.e.,
 * POST to create a subscription, PUT to update a subscription, DELETE to delete
 * a subscription.
 *
 * 3GPP TS 33.128, clause 7.16.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     dELETE(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFEventsSubscriptionOpType: typeof _enum_for_NWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;

/**
 * @summary NWDAFEventsSubscriptionOpType_pOST
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_pOST: _enum_for_NWDAFEventsSubscriptionOpType.pOST = NWDAFEventsSubscriptionOpType.pOST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOST
 * @constant
 * @type {number}
 */
export
const pOST: _enum_for_NWDAFEventsSubscriptionOpType.pOST = NWDAFEventsSubscriptionOpType.pOST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionOpType_pUT
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_pUT: _enum_for_NWDAFEventsSubscriptionOpType.pUT = NWDAFEventsSubscriptionOpType.pUT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pUT
 * @constant
 * @type {number}
 */
export
const pUT: _enum_for_NWDAFEventsSubscriptionOpType.pUT = NWDAFEventsSubscriptionOpType.pUT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionOpType_dELETE
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionOpType_dELETE: _enum_for_NWDAFEventsSubscriptionOpType.dELETE = NWDAFEventsSubscriptionOpType.dELETE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dELETE
 * @constant
 * @type {number}
 */
export
const dELETE: _enum_for_NWDAFEventsSubscriptionOpType.dELETE = NWDAFEventsSubscriptionOpType.dELETE; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NWDAFEventsSubscriptionOpType: $.ASN1Decoder<NWDAFEventsSubscriptionOpType> = $._decodeEnumerated;
export const _encode_NWDAFEventsSubscriptionOpType: $.ASN1Encoder<NWDAFEventsSubscriptionOpType> = $._encodeEnumerated;


/* eslint-enable */
