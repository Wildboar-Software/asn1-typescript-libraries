/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeCauseForRecClosing
 * @description
 *
 * Why the ProSe Function released the CDR. On a PF-ED-CDR this is the reason
 * the record was released. On a PF-DC-CDR this is the reason the record was
 * closed.
 *
 * `proximityAlerted`, `timeExpiredWithNoRrenewal`, and `requestorCancellation`
 * are the EPC-level discovery cancellation reasons. `timeLimited` and
 * `maxNumberOfReports` are the conditions on which the ProSe Function stops a
 * session-based Direct Communication charging session. TS 32.277 does not
 * define `abnormalRelease`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3, 5.2.2.3.1.2, 5.2.3.1.3, and 6.1.3.3.
 * Tables 6.1.3.3.1 and 6.1.3.4.1.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
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
 * Why the ProSe Function released the CDR. On a PF-ED-CDR this is the reason
 * the record was released. On a PF-DC-CDR this is the reason the record was
 * closed.
 *
 * `proximityAlerted`, `timeExpiredWithNoRrenewal`, and `requestorCancellation`
 * are the EPC-level discovery cancellation reasons. `timeLimited` and
 * `maxNumberOfReports` are the conditions on which the ProSe Function stops a
 * session-based Direct Communication charging session. TS 32.277 does not
 * define `abnormalRelease`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3, 5.2.2.3.1.2, 5.2.3.1.3, and 6.1.3.3.
 * Tables 6.1.3.3.1 and 6.1.3.4.1.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
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
 * Why the ProSe Function released the CDR. On a PF-ED-CDR this is the reason
 * the record was released. On a PF-DC-CDR this is the reason the record was
 * closed.
 *
 * `proximityAlerted`, `timeExpiredWithNoRrenewal`, and `requestorCancellation`
 * are the EPC-level discovery cancellation reasons. `timeLimited` and
 * `maxNumberOfReports` are the conditions on which the ProSe Function stops a
 * session-based Direct Communication charging session. TS 32.277 does not
 * define `abnormalRelease`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3, 5.2.2.3.1.2, 5.2.3.1.3, and 6.1.3.3.
 * Tables 6.1.3.3.1 and 6.1.3.4.1.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
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
const ProSeCauseForRecClosing: typeof _enum_for_ProSeCauseForRecClosing = _enum_for_ProSeCauseForRecClosing;

/**
 * @summary ProSeCauseForRecClosing_proximityAlerted
 * @description
 *
 * EPC-level discovery ended because the UEs were alerted that they are in
 * proximity. TS 32.298 maps this to Change-Condition "Proximity Alerted".
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
 *
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_proximityAlerted: _enum_for_ProSeCauseForRecClosing.proximityAlerted = ProSeCauseForRecClosing.proximityAlerted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proximityAlerted
 * @description
 *
 * Proximity alerted. See `ProSeCauseForRecClosing_proximityAlerted`.
 *
 * @constant
 * @type {number}
 */
export
const proximityAlerted: _enum_for_ProSeCauseForRecClosing.proximityAlerted = ProSeCauseForRecClosing.proximityAlerted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_timeExpiredWithNoRrenewal
 * @description
 *
 * EPC-level discovery ended because the time window expired and was not
 * renewed. The ASN.1 name spells renewal as `Rrenewal`.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_timeExpiredWithNoRrenewal: _enum_for_ProSeCauseForRecClosing.timeExpiredWithNoRrenewal = ProSeCauseForRecClosing.timeExpiredWithNoRrenewal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeExpiredWithNoRrenewal
 * @description
 *
 * Time expired with no renewal. See
 * `ProSeCauseForRecClosing_timeExpiredWithNoRrenewal`.
 *
 * @constant
 * @type {number}
 */
export
const timeExpiredWithNoRrenewal: _enum_for_ProSeCauseForRecClosing.timeExpiredWithNoRrenewal = ProSeCauseForRecClosing.timeExpiredWithNoRrenewal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_requestorCancellation
 * @description
 *
 * The requestor cancelled the EPC-level discovery request. TS 32.298 maps this
 * to Change-Condition "Requestor Cancellation".
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
 *
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_requestorCancellation: _enum_for_ProSeCauseForRecClosing.requestorCancellation = ProSeCauseForRecClosing.requestorCancellation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestorCancellation
 * @description
 *
 * Requestor cancellation. See `ProSeCauseForRecClosing_requestorCancellation`.
 *
 * @constant
 * @type {number}
 */
export
const requestorCancellation: _enum_for_ProSeCauseForRecClosing.requestorCancellation = ProSeCauseForRecClosing.requestorCancellation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_timeLimited
 * @description
 *
 * The ProSe Function closed a session-based Direct Communication charging
 * session because the operator-configured maximum time limit was reached. A
 * later usage report for the same group opens another PF-DC-CDR. TS 32.298 maps
 * this to Change-Condition "Time Limit".
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.2.3.1.2 and 5.2.3.1.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
 *
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_timeLimited: _enum_for_ProSeCauseForRecClosing.timeLimited = ProSeCauseForRecClosing.timeLimited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimited
 * @description
 *
 * Operator time limit reached. See `ProSeCauseForRecClosing_timeLimited`.
 *
 * @constant
 * @type {number}
 */
export
const timeLimited: _enum_for_ProSeCauseForRecClosing.timeLimited = ProSeCauseForRecClosing.timeLimited; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_maxNumberOfReports
 * @description
 *
 * The ProSe Function closed a session-based Direct Communication charging
 * session because the operator-configured maximum number of reports was
 * reached. TS 32.298 maps this to Change-Condition "Max Number of reports".
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.2.3.1.2 and 5.2.3.1.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
 *
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_maxNumberOfReports: _enum_for_ProSeCauseForRecClosing.maxNumberOfReports = ProSeCauseForRecClosing.maxNumberOfReports; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxNumberOfReports
 * @description
 *
 * Operator report limit reached. See
 * `ProSeCauseForRecClosing_maxNumberOfReports`.
 *
 * @constant
 * @type {number}
 */
export
const maxNumberOfReports: _enum_for_ProSeCauseForRecClosing.maxNumberOfReports = ProSeCauseForRecClosing.maxNumberOfReports; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeCauseForRecClosing_abnormalRelease
 * @description
 *
 * TS 32.277 does not define this cause. TS 32.298 maps it to Change-Condition
 * "Abnormal Release".
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.4.
 *
 * @constant
 * @type {number}
 */
export
const ProSeCauseForRecClosing_abnormalRelease: _enum_for_ProSeCauseForRecClosing.abnormalRelease = ProSeCauseForRecClosing.abnormalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalRelease
 * @description
 *
 * Abnormal release. See `ProSeCauseForRecClosing_abnormalRelease`.
 *
 * @constant
 * @type {number}
 */
export
const abnormalRelease: _enum_for_ProSeCauseForRecClosing.abnormalRelease = ProSeCauseForRecClosing.abnormalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeCauseForRecClosing: $.ASN1Decoder<ProSeCauseForRecClosing> = $._decodeEnumerated;

export
const _encode_ProSeCauseForRecClosing: $.ASN1Encoder<ProSeCauseForRecClosing> = $._encodeEnumerated;

/* eslint-enable */
