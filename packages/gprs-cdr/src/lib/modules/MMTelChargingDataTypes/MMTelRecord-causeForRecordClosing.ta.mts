/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMTelRecord_causeForRecordClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-causeForRecordClosing ::= ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMTelRecord_causeForRecordClosing {
    serviceDeliveryEndSuccessfully = 0,
    unSuccessfulServiceDelivery = 1,
    timeLimit = 3,
    serviceChange = 4,
    managementIntervention = 5,
}

/**
 * @summary MMTelRecord_causeForRecordClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-causeForRecordClosing ::= ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMTelRecord_causeForRecordClosing = _enum_for_MMTelRecord_causeForRecordClosing;

/**
 * @summary MMTelRecord_causeForRecordClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelRecord-causeForRecordClosing ::= ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMTelRecord_causeForRecordClosing = _enum_for_MMTelRecord_causeForRecordClosing;

/**
 * @summary MMTelRecord_causeForRecordClosing_serviceDeliveryEndSuccessfully
 * @constant
 * @type {number}
 */
export
const MMTelRecord_causeForRecordClosing_serviceDeliveryEndSuccessfully: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.serviceDeliveryEndSuccessfully; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceDeliveryEndSuccessfully
 * @constant
 * @type {number}
 */
export
const serviceDeliveryEndSuccessfully: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.serviceDeliveryEndSuccessfully; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMTelRecord_causeForRecordClosing_unSuccessfulServiceDelivery
 * @constant
 * @type {number}
 */
export
const MMTelRecord_causeForRecordClosing_unSuccessfulServiceDelivery: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.unSuccessfulServiceDelivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unSuccessfulServiceDelivery
 * @constant
 * @type {number}
 */
export
const unSuccessfulServiceDelivery: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.unSuccessfulServiceDelivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMTelRecord_causeForRecordClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const MMTelRecord_causeForRecordClosing_timeLimit: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.timeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.timeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMTelRecord_causeForRecordClosing_serviceChange
 * @constant
 * @type {number}
 */
export
const MMTelRecord_causeForRecordClosing_serviceChange: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.serviceChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @constant
 * @type {number}
 */
export
const serviceChange: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.serviceChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMTelRecord_causeForRecordClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const MMTelRecord_causeForRecordClosing_managementIntervention: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.managementIntervention; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: MMTelRecord_causeForRecordClosing = MMTelRecord_causeForRecordClosing.managementIntervention; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMTelRecord_causeForRecordClosing: $.ASN1Decoder<MMTelRecord_causeForRecordClosing> = $._decodeEnumerated;

export
const _encode_MMTelRecord_causeForRecordClosing: $.ASN1Encoder<MMTelRecord_causeForRecordClosing> = $._encodeEnumerated;

/* eslint-enable */
