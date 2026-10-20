/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    serviceChange                 ( 0 ),
 *    volumeLimit                   ( 1 ),
 *    timeLimit                     ( 2 ),
 *    numberofTalkBurstLimit        ( 3 ),
 *    numberofActiveParticipants    ( 4 ),
 *    tariffTime                    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChangeCondition {
    serviceChange = 0,
    volumeLimit = 1,
    timeLimit = 2,
    numberofTalkBurstLimit = 3,
    numberofActiveParticipants = 4,
    tariffTime = 5,
}

/**
 * @summary ChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    serviceChange                 ( 0 ),
 *    volumeLimit                   ( 1 ),
 *    timeLimit                     ( 2 ),
 *    numberofTalkBurstLimit        ( 3 ),
 *    numberofActiveParticipants    ( 4 ),
 *    tariffTime                    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChangeCondition = _enum_for_ChangeCondition;

/**
 * @summary ChangeCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    serviceChange                 ( 0 ),
 *    volumeLimit                   ( 1 ),
 *    timeLimit                     ( 2 ),
 *    numberofTalkBurstLimit        ( 3 ),
 *    numberofActiveParticipants    ( 4 ),
 *    tariffTime                    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChangeCondition = _enum_for_ChangeCondition;

/**
 * @summary ChangeCondition_serviceChange
 * @constant
 * @type {number}
 */
export
const ChangeCondition_serviceChange: ChangeCondition = ChangeCondition.serviceChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @constant
 * @type {number}
 */
export
const serviceChange: ChangeCondition = ChangeCondition.serviceChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_volumeLimit
 * @constant
 * @type {number}
 */
export
const ChangeCondition_volumeLimit: ChangeCondition = ChangeCondition.volumeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: ChangeCondition = ChangeCondition.volumeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_timeLimit
 * @constant
 * @type {number}
 */
export
const ChangeCondition_timeLimit: ChangeCondition = ChangeCondition.timeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: ChangeCondition = ChangeCondition.timeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_numberofTalkBurstLimit
 * @constant
 * @type {number}
 */
export
const ChangeCondition_numberofTalkBurstLimit: ChangeCondition = ChangeCondition.numberofTalkBurstLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberofTalkBurstLimit
 * @constant
 * @type {number}
 */
export
const numberofTalkBurstLimit: ChangeCondition = ChangeCondition.numberofTalkBurstLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_numberofActiveParticipants
 * @constant
 * @type {number}
 */
export
const ChangeCondition_numberofActiveParticipants: ChangeCondition = ChangeCondition.numberofActiveParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberofActiveParticipants
 * @constant
 * @type {number}
 */
export
const numberofActiveParticipants: ChangeCondition = ChangeCondition.numberofActiveParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_tariffTime
 * @constant
 * @type {number}
 */
export
const ChangeCondition_tariffTime: ChangeCondition = ChangeCondition.tariffTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tariffTime
 * @constant
 * @type {number}
 */
export
const tariffTime: ChangeCondition = ChangeCondition.tariffTime; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChangeCondition: $.ASN1Decoder<ChangeCondition> = $._decodeEnumerated;

export
const _encode_ChangeCondition: $.ASN1Encoder<ChangeCondition> = $._encodeEnumerated;

/* eslint-enable */
