/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const MonitorMode: typeof _enum_for_MonitorMode = _enum_for_MonitorMode;

/**
 * @summary MonitorMode_interrupted
 * @constant
 * @type {number}
 */
export
const MonitorMode_interrupted: _enum_for_MonitorMode.interrupted = MonitorMode.interrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: _enum_for_MonitorMode.interrupted = MonitorMode.interrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorMode_notifyAndContinue
 * @constant
 * @type {number}
 */
export
const MonitorMode_notifyAndContinue: _enum_for_MonitorMode.notifyAndContinue = MonitorMode.notifyAndContinue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notifyAndContinue
 * @constant
 * @type {number}
 */
export
const notifyAndContinue: _enum_for_MonitorMode.notifyAndContinue = MonitorMode.notifyAndContinue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitorMode_transparent
 * @constant
 * @type {number}
 */
export
const MonitorMode_transparent: _enum_for_MonitorMode.transparent = MonitorMode.transparent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transparent
 * @constant
 * @type {number}
 */
export
const transparent: _enum_for_MonitorMode.transparent = MonitorMode.transparent; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_MonitorMode(el: _Element): MonitorMode {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case MonitorMode.interrupted: return MonitorMode.interrupted;
        case MonitorMode.notifyAndContinue: return MonitorMode.notifyAndContinue;
        case MonitorMode.transparent: return MonitorMode.transparent;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for MonitorMode.",
                el,
            );
    }
}

export
const _encode_MonitorMode: $.ASN1Encoder<MonitorMode> = $._encodeEnumerated as $.ASN1Encoder<MonitorMode>;

/* eslint-enable */
