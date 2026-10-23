/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReasonforCancellation
 * @description
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
 * @constant
 * @type {number}
 */
export
const ReasonforCancellation_proximityAlerted: ReasonforCancellation = ReasonforCancellation.proximityAlerted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proximityAlerted
 * @constant
 * @type {number}
 */
export
const proximityAlerted: ReasonforCancellation = ReasonforCancellation.proximityAlerted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonforCancellation_timeExpiredWithNoRrenewal
 * @constant
 * @type {number}
 */
export
const ReasonforCancellation_timeExpiredWithNoRrenewal: ReasonforCancellation = ReasonforCancellation.timeExpiredWithNoRrenewal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeExpiredWithNoRrenewal
 * @constant
 * @type {number}
 */
export
const timeExpiredWithNoRrenewal: ReasonforCancellation = ReasonforCancellation.timeExpiredWithNoRrenewal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonforCancellation_requestorCancellation
 * @constant
 * @type {number}
 */
export
const ReasonforCancellation_requestorCancellation: ReasonforCancellation = ReasonforCancellation.requestorCancellation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestorCancellation
 * @constant
 * @type {number}
 */
export
const requestorCancellation: ReasonforCancellation = ReasonforCancellation.requestorCancellation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReasonforCancellation: $.ASN1Decoder<ReasonforCancellation> = $._decodeEnumerated;

export
const _encode_ReasonforCancellation: $.ASN1Encoder<ReasonforCancellation> = $._encodeEnumerated;

/* eslint-enable */
