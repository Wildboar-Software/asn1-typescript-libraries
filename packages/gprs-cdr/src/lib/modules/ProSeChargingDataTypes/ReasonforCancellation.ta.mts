/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReasonforCancellation
 * @description
 *
 * Why an EPC-level discovery request was cancelled: a proximity alert was sent,
 * the time window expired with no renewal, or the requestor cancelled it.
 * Recorded in the PF-ED-CDR when the request is cancelled.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3. Table 6.1.3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonforCancellation  ::=  ENUMERATED {
 *    proximityAlerted             ( 0 ),
 *    timeExpiredWithNoRrenewal    ( 1 ),
 *    requestorCancellation        ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReasonforCancellation {
    proximityAlerted = 0,
    timeExpiredWithNoRrenewal = 1,
    requestorCancellation = 2,
}

/**
 * @summary ReasonforCancellation
 * @description
 *
 * Why an EPC-level discovery request was cancelled: a proximity alert was sent,
 * the time window expired with no renewal, or the requestor cancelled it.
 * Recorded in the PF-ED-CDR when the request is cancelled.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3. Table 6.1.3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonforCancellation  ::=  ENUMERATED {
 *    proximityAlerted             ( 0 ),
 *    timeExpiredWithNoRrenewal    ( 1 ),
 *    requestorCancellation        ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ReasonforCancellation = _enum_for_ReasonforCancellation;

/**
 * @summary ReasonforCancellation
 * @description
 *
 * Why an EPC-level discovery request was cancelled: a proximity alert was sent,
 * the time window expired with no renewal, or the requestor cancelled it.
 * Recorded in the PF-ED-CDR when the request is cancelled.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3. Table 6.1.3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonforCancellation  ::=  ENUMERATED {
 *    proximityAlerted             ( 0 ),
 *    timeExpiredWithNoRrenewal    ( 1 ),
 *    requestorCancellation        ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ReasonforCancellation = _enum_for_ReasonforCancellation;

/**
 * @summary ReasonforCancellation_proximityAlerted
 * @description
 *
 * The request was cancelled because the UEs were alerted that they are in
 * proximity.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ReasonforCancellation_proximityAlerted = ReasonforCancellation.proximityAlerted satisfies ReasonforCancellation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proximityAlerted
 * @description
 *
 * Cancelled because proximity was alerted. See
 * `ReasonforCancellation_proximityAlerted`.
 *
 * @constant
 * @type {number}
 */
export
const proximityAlerted = ReasonforCancellation.proximityAlerted satisfies ReasonforCancellation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonforCancellation_timeExpiredWithNoRrenewal
 * @description
 *
 * The proximity request's time window expired and the UE did not renew it. The
 * ASN.1 name spells renewal as `Rrenewal`.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ReasonforCancellation_timeExpiredWithNoRrenewal = ReasonforCancellation.timeExpiredWithNoRrenewal satisfies ReasonforCancellation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeExpiredWithNoRrenewal
 * @description
 *
 * Time expired with no renewal. See
 * `ReasonforCancellation_timeExpiredWithNoRrenewal`.
 *
 * @constant
 * @type {number}
 */
export
const timeExpiredWithNoRrenewal = ReasonforCancellation.timeExpiredWithNoRrenewal satisfies ReasonforCancellation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonforCancellation_requestorCancellation
 * @description
 *
 * The requestor UE cancelled the proximity request.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ReasonforCancellation_requestorCancellation = ReasonforCancellation.requestorCancellation satisfies ReasonforCancellation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestorCancellation
 * @description
 *
 * Requestor cancelled the request. See
 * `ReasonforCancellation_requestorCancellation`.
 *
 * @constant
 * @type {number}
 */
export
const requestorCancellation = ReasonforCancellation.requestorCancellation satisfies ReasonforCancellation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReasonforCancellation: $.ASN1Decoder<ReasonforCancellation> = $._decodeEnumerated;

export
const _encode_ReasonforCancellation: $.ASN1Encoder<ReasonforCancellation> = $._encodeEnumerated;

/* eslint-enable */
