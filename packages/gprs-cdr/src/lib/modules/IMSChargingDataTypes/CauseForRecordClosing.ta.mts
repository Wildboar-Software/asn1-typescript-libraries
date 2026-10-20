/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseForRecordClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseForRecordClosing {
    serviceDeliveryEndSuccessfully = 0,
    unSuccessfulServiceDelivery = 1,
    timeLimit = 3,
    serviceChange = 4,
    managementIntervention = 5,
}

/**
 * @summary CauseForRecordClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CauseForRecordClosing = _enum_for_CauseForRecordClosing;

/**
 * @summary CauseForRecordClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    serviceDeliveryEndSuccessfully    ( 0 ),
 *    unSuccessfulServiceDelivery       ( 1 ),
 *    timeLimit                         ( 3 ),
 *    serviceChange                     ( 4 ),
 *    managementIntervention            ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CauseForRecordClosing = _enum_for_CauseForRecordClosing;

/**
 * @summary CauseForRecordClosing_serviceDeliveryEndSuccessfully
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_serviceDeliveryEndSuccessfully: CauseForRecordClosing = CauseForRecordClosing.serviceDeliveryEndSuccessfully; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceDeliveryEndSuccessfully
 * @constant
 * @type {number}
 */
export
const serviceDeliveryEndSuccessfully: CauseForRecordClosing = CauseForRecordClosing.serviceDeliveryEndSuccessfully; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_unSuccessfulServiceDelivery
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_unSuccessfulServiceDelivery: CauseForRecordClosing = CauseForRecordClosing.unSuccessfulServiceDelivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unSuccessfulServiceDelivery
 * @constant
 * @type {number}
 */
export
const unSuccessfulServiceDelivery: CauseForRecordClosing = CauseForRecordClosing.unSuccessfulServiceDelivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_timeLimit: CauseForRecordClosing = CauseForRecordClosing.timeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: CauseForRecordClosing = CauseForRecordClosing.timeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_serviceChange
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_serviceChange: CauseForRecordClosing = CauseForRecordClosing.serviceChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @constant
 * @type {number}
 */
export
const serviceChange: CauseForRecordClosing = CauseForRecordClosing.serviceChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_managementIntervention: CauseForRecordClosing = CauseForRecordClosing.managementIntervention; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: CauseForRecordClosing = CauseForRecordClosing.managementIntervention; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CauseForRecordClosing: $.ASN1Decoder<CauseForRecordClosing> = $._decodeEnumerated;

export
const _encode_CauseForRecordClosing: $.ASN1Encoder<CauseForRecordClosing> = $._encodeEnumerated;

/* eslint-enable */
