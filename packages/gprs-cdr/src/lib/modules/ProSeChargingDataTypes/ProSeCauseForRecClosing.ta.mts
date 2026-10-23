/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeCauseForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeCauseForRecClosing  ::=  ENUMERATED {
 *    proximityAlerted             ( 0 ),
 *    timeExpiredWithNoRrenewal    ( 1 ),
 *    requestorCancellation        ( 2 ),
 *    timeLimited                  ( 3 ),
 *    maxNumberOfReports           ( 4 ),
 *    abnormalRelease              ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProSeCauseForRecClosing {
    proximityAlerted = 0,
    timeExpiredWithNoRrenewal = 1,
    requestorCancellation = 2,
    timeLimited = 3,
    maxNumberOfReports = 4,
    abnormalRelease = 5,
}

/**
 * @summary ProSeCauseForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeCauseForRecClosing  ::=  ENUMERATED {
 *    proximityAlerted             ( 0 ),
 *    timeExpiredWithNoRrenewal    ( 1 ),
 *    requestorCancellation        ( 2 ),
 *    timeLimited                  ( 3 ),
 *    maxNumberOfReports           ( 4 ),
 *    abnormalRelease              ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeCauseForRecClosing = _enum_for_ProSeCauseForRecClosing;

/**
 * @summary ProSeCauseForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeCauseForRecClosing  ::=  ENUMERATED {
 *    proximityAlerted             ( 0 ),
 *    timeExpiredWithNoRrenewal    ( 1 ),
 *    requestorCancellation        ( 2 ),
 *    timeLimited                  ( 3 ),
 *    maxNumberOfReports           ( 4 ),
 *    abnormalRelease              ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ProSeCauseForRecClosing = _enum_for_ProSeCauseForRecClosing;

/**
 * @summary ProSeCauseForRecClosing_proximityAlerted
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_proximityAlerted: ProSeCauseForRecClosing = ProSeCauseForRecClosing.proximityAlerted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proximityAlerted
 * @constant
 * @type {number}
 */
export
const proximityAlerted: ProSeCauseForRecClosing = ProSeCauseForRecClosing.proximityAlerted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_timeExpiredWithNoRrenewal
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_timeExpiredWithNoRrenewal: ProSeCauseForRecClosing = ProSeCauseForRecClosing.timeExpiredWithNoRrenewal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeExpiredWithNoRrenewal
 * @constant
 * @type {number}
 */
export
const timeExpiredWithNoRrenewal: ProSeCauseForRecClosing = ProSeCauseForRecClosing.timeExpiredWithNoRrenewal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_requestorCancellation
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_requestorCancellation: ProSeCauseForRecClosing = ProSeCauseForRecClosing.requestorCancellation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestorCancellation
 * @constant
 * @type {number}
 */
export
const requestorCancellation: ProSeCauseForRecClosing = ProSeCauseForRecClosing.requestorCancellation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_timeLimited
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_timeLimited: ProSeCauseForRecClosing = ProSeCauseForRecClosing.timeLimited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimited
 * @constant
 * @type {number}
 */
export
const timeLimited: ProSeCauseForRecClosing = ProSeCauseForRecClosing.timeLimited; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_maxNumberOfReports
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_maxNumberOfReports: ProSeCauseForRecClosing = ProSeCauseForRecClosing.maxNumberOfReports; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxNumberOfReports
 * @constant
 * @type {number}
 */
export
const maxNumberOfReports: ProSeCauseForRecClosing = ProSeCauseForRecClosing.maxNumberOfReports; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_abnormalRelease: ProSeCauseForRecClosing = ProSeCauseForRecClosing.abnormalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: ProSeCauseForRecClosing = ProSeCauseForRecClosing.abnormalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeCauseForRecClosing: $.ASN1Decoder<ProSeCauseForRecClosing> = $._decodeEnumerated;

export
const _encode_ProSeCauseForRecClosing: $.ASN1Encoder<ProSeCauseForRecClosing> = $._encodeEnumerated;

/* eslint-enable */
