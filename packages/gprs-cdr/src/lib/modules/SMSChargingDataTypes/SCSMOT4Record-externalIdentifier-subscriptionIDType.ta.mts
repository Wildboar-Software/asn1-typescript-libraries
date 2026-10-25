/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType
 * @description
 *
 * Kind of external identifier on an SC-SMO-T4 CDR. TS 32.274 does not define
 * these codes. The names match Subscription-Id-Type in IETF RFC 4006, which TS
 * 32.274 cites for the refund procedure and does not cite for this field.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.1.3.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMOT4Record-externalIdentifier-subscriptionIDType ::= ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SCSMOT4Record_externalIdentifier_subscriptionIDType {
    eND_USER_E164 = 0,
    eND_USER_IMSI = 1,
    eND_USER_SIP_URI = 2,
    eND_USER_NAI = 3,
    eND_USER_PRIVATE = 4,
}

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType
 * @description
 *
 * Kind of external identifier on an SC-SMO-T4 CDR. TS 32.274 does not define
 * these codes. The names match Subscription-Id-Type in IETF RFC 4006, which TS
 * 32.274 cites for the refund procedure and does not cite for this field.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.1.3.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMOT4Record-externalIdentifier-subscriptionIDType ::= ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SCSMOT4Record_externalIdentifier_subscriptionIDType = _enum_for_SCSMOT4Record_externalIdentifier_subscriptionIDType;

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType
 * @description
 *
 * Kind of external identifier on an SC-SMO-T4 CDR. TS 32.274 does not define
 * these codes. The names match Subscription-Id-Type in IETF RFC 4006, which TS
 * 32.274 cites for the refund procedure and does not cite for this field.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.1.3.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMOT4Record-externalIdentifier-subscriptionIDType ::= ENUMERATED {
 *    eND-USER-E164       ( 0 ),
 *    eND-USER-IMSI       ( 1 ),
 *    eND-USER-SIP-URI    ( 2 ),
 *    eND-USER-NAI        ( 3 ),
 *    eND-USER-PRIVATE    ( 4 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType = _enum_for_SCSMOT4Record_externalIdentifier_subscriptionIDType;

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_E164
 * @description
 *
 * End-user E.164. TS 32.274 does not define this code. The name matches
 * Subscription-Id-Type in IETF RFC 4006.
 *
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_E164 = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_E164 satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_E164
 * @constant
 * @type {number}
 */
export
const eND_USER_E164 = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_E164 satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_IMSI
 * @description
 *
 * End-user IMSI. TS 32.274 does not define this code. The name matches
 * Subscription-Id-Type in IETF RFC 4006.
 *
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_IMSI = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_IMSI satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_IMSI
 * @constant
 * @type {number}
 */
export
const eND_USER_IMSI = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_IMSI satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_SIP_URI
 * @description
 *
 * End-user SIP URI. TS 32.274 does not define this code. The name matches
 * Subscription-Id-Type in IETF RFC 4006.
 *
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_SIP_URI = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_SIP_URI satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_SIP_URI
 * @constant
 * @type {number}
 */
export
const eND_USER_SIP_URI = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_SIP_URI satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_NAI
 * @description
 *
 * End-user NAI. TS 32.274 does not define this code. The name matches
 * Subscription-Id-Type in IETF RFC 4006.
 *
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_NAI = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_NAI satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_NAI
 * @constant
 * @type {number}
 */
export
const eND_USER_NAI = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_NAI satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_PRIVATE
 * @description
 *
 * End-user private identifier. TS 32.274 does not define this code. The name
 * matches Subscription-Id-Type in IETF RFC 4006.
 *
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_PRIVATE = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_PRIVATE satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_PRIVATE
 * @constant
 * @type {number}
 */
export
const eND_USER_PRIVATE = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_PRIVATE satisfies SCSMOT4Record_externalIdentifier_subscriptionIDType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SCSMOT4Record_externalIdentifier_subscriptionIDType: $.ASN1Decoder<SCSMOT4Record_externalIdentifier_subscriptionIDType> = $._decodeEnumerated;

export
const _encode_SCSMOT4Record_externalIdentifier_subscriptionIDType: $.ASN1Encoder<SCSMOT4Record_externalIdentifier_subscriptionIDType> = $._encodeEnumerated;

/* eslint-enable */
