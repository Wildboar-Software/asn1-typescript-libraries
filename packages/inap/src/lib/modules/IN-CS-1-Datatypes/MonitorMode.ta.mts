/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorMode  ::=  ENUMERATED {
 *   interrupted(0), notifyAndContinue(1), transparent(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MonitorMode {
    interrupted = 0,
    notifyAndContinue = 1,
    transparent = 2,
}

/**
 * @summary MonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorMode  ::=  ENUMERATED {
 *   interrupted(0), notifyAndContinue(1), transparent(2)}
 * ```
 * 
 * @enum {number}
 */
export
type MonitorMode = _enum_for_MonitorMode;

/**
 * @summary MonitorMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorMode  ::=  ENUMERATED {
 *   interrupted(0), notifyAndContinue(1), transparent(2)}
 * ```
 * 
 * @enum {number}
 */
export
const MonitorMode = _enum_for_MonitorMode;

/**
 * @summary MonitorMode_interrupted
 * @constant
 * @type {number}
 */
export
const MonitorMode_interrupted: MonitorMode = MonitorMode.interrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: MonitorMode = MonitorMode.interrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorMode_notifyAndContinue
 * @constant
 * @type {number}
 */
export
const MonitorMode_notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndContinue
 * @constant
 * @type {number}
 */
export
const notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorMode_transparent
 * @constant
 * @type {number}
 */
export
const MonitorMode_transparent: MonitorMode = MonitorMode.transparent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transparent
 * @constant
 * @type {number}
 */
export
const transparent: MonitorMode = MonitorMode.transparent; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MonitorMode: $.ASN1Decoder<MonitorMode> = $._decodeEnumerated;

export
const _encode_MonitorMode: $.ASN1Encoder<MonitorMode> = $._encodeEnumerated;

/* eslint-enable */
