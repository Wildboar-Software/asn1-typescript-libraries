/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TimerID {
    tssf = 0,
}

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)}
 * ```
 * 
 * @enum {number}
 */
export
type TimerID = _enum_for_TimerID;

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID  ::=  ENUMERATED {tssf(0)}
 * ```
 * 
 * @enum {number}
 */
export
const TimerID = _enum_for_TimerID;

/**
 * @summary TimerID_tssf
 * @constant
 * @type {number}
 */
export
const TimerID_tssf: TimerID = TimerID.tssf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tssf
 * @constant
 * @type {number}
 */
export
const tssf: TimerID = TimerID.tssf; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TimerID: $.ASN1Decoder<TimerID> = $._decodeEnumerated;

export
const _encode_TimerID: $.ASN1Encoder<TimerID> = $._encodeEnumerated;

/* eslint-enable */
