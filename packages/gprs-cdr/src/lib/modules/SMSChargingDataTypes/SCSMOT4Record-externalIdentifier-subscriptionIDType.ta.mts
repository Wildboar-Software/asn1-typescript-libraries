/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMOT4Record-externalIdentifier-subscriptionIDType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMOT4Record-externalIdentifier-subscriptionIDType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMOT4Record-externalIdentifier-subscriptionIDType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType = _enum_for_SCSMOT4Record_externalIdentifier_subscriptionIDType;

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_E164
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_E164: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_E164; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_E164
 * @constant
 * @type {number}
 */
export
const eND_USER_E164: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_E164; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_IMSI
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_IMSI: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_IMSI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_IMSI
 * @constant
 * @type {number}
 */
export
const eND_USER_IMSI: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_IMSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_SIP_URI
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_SIP_URI: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_SIP_URI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_SIP_URI
 * @constant
 * @type {number}
 */
export
const eND_USER_SIP_URI: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_SIP_URI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_NAI
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_NAI: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_NAI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_NAI
 * @constant
 * @type {number}
 */
export
const eND_USER_NAI: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_NAI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_PRIVATE
 * @constant
 * @type {number}
 */
export
const SCSMOT4Record_externalIdentifier_subscriptionIDType_eND_USER_PRIVATE: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_PRIVATE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eND_USER_PRIVATE
 * @constant
 * @type {number}
 */
export
const eND_USER_PRIVATE: SCSMOT4Record_externalIdentifier_subscriptionIDType = SCSMOT4Record_externalIdentifier_subscriptionIDType.eND_USER_PRIVATE; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SCSMOT4Record_externalIdentifier_subscriptionIDType: $.ASN1Decoder<SCSMOT4Record_externalIdentifier_subscriptionIDType> = $._decodeEnumerated;

export
const _encode_SCSMOT4Record_externalIdentifier_subscriptionIDType: $.ASN1Encoder<SCSMOT4Record_externalIdentifier_subscriptionIDType> = $._encodeEnumerated;

/* eslint-enable */
