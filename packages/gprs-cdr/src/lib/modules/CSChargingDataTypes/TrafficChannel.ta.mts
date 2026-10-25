/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrafficChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficChannel  ::=  ENUMERATED {
 *    fullRate    ( 0 ),
 *    halfRate    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TrafficChannel {
    fullRate = 0,
    halfRate = 1,
}

/**
 * @summary TrafficChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficChannel  ::=  ENUMERATED {
 *    fullRate    ( 0 ),
 *    halfRate    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TrafficChannel = _enum_for_TrafficChannel;

/**
 * @summary TrafficChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficChannel  ::=  ENUMERATED {
 *    fullRate    ( 0 ),
 *    halfRate    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TrafficChannel: typeof _enum_for_TrafficChannel = _enum_for_TrafficChannel;

/**
 * @summary TrafficChannel_fullRate
 * @constant
 * @type {number}
 */
export
const TrafficChannel_fullRate: _enum_for_TrafficChannel.fullRate = TrafficChannel.fullRate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullRate
 * @constant
 * @type {number}
 */
export
const fullRate: _enum_for_TrafficChannel.fullRate = TrafficChannel.fullRate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficChannel_halfRate
 * @constant
 * @type {number}
 */
export
const TrafficChannel_halfRate: _enum_for_TrafficChannel.halfRate = TrafficChannel.halfRate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary halfRate
 * @constant
 * @type {number}
 */
export
const halfRate: _enum_for_TrafficChannel.halfRate = TrafficChannel.halfRate; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TrafficChannel: $.ASN1Decoder<TrafficChannel> = $._decodeEnumerated;

export
const _encode_TrafficChannel: $.ASN1Encoder<TrafficChannel> = $._encodeEnumerated;

/* eslint-enable */
