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
 *    normalRelease             ( 0 ),
 *    abnormalRelease           ( 1 ),
 *    serviceChange             ( 2 ),
 *    volumeLimit               ( 3 ),
 *    timeLimit                 ( 4 ),
 *    numberofTalkBurstLimit    ( 5 ),
 *    maxChangeCond             ( 6 ),
 *    sessionTypeChange         ( 7 ),
 *    managementIntervention    ( 8 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseForRecordClosing {
    normalRelease = 0,
    abnormalRelease = 1,
    serviceChange = 2,
    volumeLimit = 3,
    timeLimit = 4,
    numberofTalkBurstLimit = 5,
    maxChangeCond = 6,
    sessionTypeChange = 7,
    managementIntervention = 8,
}

/**
 * @summary CauseForRecordClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    normalRelease             ( 0 ),
 *    abnormalRelease           ( 1 ),
 *    serviceChange             ( 2 ),
 *    volumeLimit               ( 3 ),
 *    timeLimit                 ( 4 ),
 *    numberofTalkBurstLimit    ( 5 ),
 *    maxChangeCond             ( 6 ),
 *    sessionTypeChange         ( 7 ),
 *    managementIntervention    ( 8 ) }
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
 *    normalRelease             ( 0 ),
 *    abnormalRelease           ( 1 ),
 *    serviceChange             ( 2 ),
 *    volumeLimit               ( 3 ),
 *    timeLimit                 ( 4 ),
 *    numberofTalkBurstLimit    ( 5 ),
 *    maxChangeCond             ( 6 ),
 *    sessionTypeChange         ( 7 ),
 *    managementIntervention    ( 8 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CauseForRecordClosing = _enum_for_CauseForRecordClosing;

/**
 * @summary CauseForRecordClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_normalRelease: CauseForRecordClosing = CauseForRecordClosing.normalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: CauseForRecordClosing = CauseForRecordClosing.normalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_abnormalRelease: CauseForRecordClosing = CauseForRecordClosing.abnormalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: CauseForRecordClosing = CauseForRecordClosing.abnormalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

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
 * @summary CauseForRecordClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_volumeLimit: CauseForRecordClosing = CauseForRecordClosing.volumeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: CauseForRecordClosing = CauseForRecordClosing.volumeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

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
 * @summary CauseForRecordClosing_numberofTalkBurstLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_numberofTalkBurstLimit: CauseForRecordClosing = CauseForRecordClosing.numberofTalkBurstLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberofTalkBurstLimit
 * @constant
 * @type {number}
 */
export
const numberofTalkBurstLimit: CauseForRecordClosing = CauseForRecordClosing.numberofTalkBurstLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_maxChangeCond: CauseForRecordClosing = CauseForRecordClosing.maxChangeCond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond: CauseForRecordClosing = CauseForRecordClosing.maxChangeCond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_sessionTypeChange
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_sessionTypeChange: CauseForRecordClosing = CauseForRecordClosing.sessionTypeChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionTypeChange
 * @constant
 * @type {number}
 */
export
const sessionTypeChange: CauseForRecordClosing = CauseForRecordClosing.sessionTypeChange; /* SHORT_NAMED_ENUMERATED_VALUE */

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
