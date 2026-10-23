/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RelationshipMode
 * @description
 *
 * Whether the neighbouring network's contact point is inside the same
 * trust domain (clause 6.1.3.10). The IBCF uses trust to decide whether
 * real-time tariff information is accepted (clause 5.1.5).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * This field indicates whether the other functional entity (e.g. contact
 * point of the neighbouring network) is regarded as part of the same trust
 * domain.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.42A.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelationshipMode  ::=  ENUMERATED {
 *    trusted        ( 0 ),
 *    non-trusted    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RelationshipMode {
    trusted = 0,
    non_trusted = 1,
}

/**
 * @summary RelationshipMode
 * @description
 *
 * Whether the neighbouring network's contact point is inside the same
 * trust domain (clause 6.1.3.10). The IBCF uses trust to decide whether
 * real-time tariff information is accepted (clause 5.1.5).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * This field indicates whether the other functional entity (e.g. contact
 * point of the neighbouring network) is regarded as part of the same trust
 * domain.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.42A.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelationshipMode  ::=  ENUMERATED {
 *    trusted        ( 0 ),
 *    non-trusted    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type RelationshipMode = _enum_for_RelationshipMode;

/**
 * @summary RelationshipMode
 * @description
 *
 * Whether the neighbouring network's contact point is inside the same
 * trust domain (clause 6.1.3.10). The IBCF uses trust to decide whether
 * real-time tariff information is accepted (clause 5.1.5).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.10.
 *
 * This field indicates whether the other functional entity (e.g. contact
 * point of the neighbouring network) is regarded as part of the same trust
 * domain.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.42A.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelationshipMode  ::=  ENUMERATED {
 *    trusted        ( 0 ),
 *    non-trusted    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const RelationshipMode = _enum_for_RelationshipMode;

/**
 * @summary RelationshipMode_trusted
 * @description
 *
 * The neighbour is inside the same trust domain (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const RelationshipMode_trusted: RelationshipMode = RelationshipMode.trusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @description
 *
 * The neighbour is inside the same trust domain (clause 6.1.3.10).
 *
 * @constant
 * @type {number}
 */
export
const trusted: RelationshipMode = RelationshipMode.trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RelationshipMode_non_trusted
 * @description
 *
 * The neighbour is outside the trust domain (clause 6.1.3.10). The IBCF
 * discards real-time tariff information from an untrusted network (clause
 * 5.1.5).
 *
 * @constant
 * @type {number}
 */
export
const RelationshipMode_non_trusted: RelationshipMode = RelationshipMode.non_trusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_trusted
 * @description
 *
 * The neighbour is outside the trust domain (clause 6.1.3.10). The IBCF
 * discards real-time tariff information from an untrusted network (clause
 * 5.1.5).
 *
 * @constant
 * @type {number}
 */
export
const non_trusted: RelationshipMode = RelationshipMode.non_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RelationshipMode: $.ASN1Decoder<RelationshipMode> = $._decodeEnumerated;

export
const _encode_RelationshipMode: $.ASN1Encoder<RelationshipMode> = $._encodeEnumerated;

/* eslint-enable */
