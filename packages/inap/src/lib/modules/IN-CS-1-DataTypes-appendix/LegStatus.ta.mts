/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegStatus  ::=  ENUMERATED {
 *   connected(0), unconnected(1), pending(2), interacting(3)
 *  --  user connected to a resource--}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LegStatus {
    connected = 0,
    unconnected = 1,
    pending = 2,
    interacting = 3,
}

/**
 * @summary LegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegStatus  ::=  ENUMERATED {
 *   connected(0), unconnected(1), pending(2), interacting(3)
 *  --  user connected to a resource--}
 * ```
 * 
 * @enum {number}
 */
export
type LegStatus = _enum_for_LegStatus;

/**
 * @summary LegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegStatus  ::=  ENUMERATED {
 *   connected(0), unconnected(1), pending(2), interacting(3)
 *  --  user connected to a resource--}
 * ```
 * 
 * @enum {number}
 */
export
const LegStatus = _enum_for_LegStatus;

/**
 * @summary LegStatus_connected
 * @constant
 * @type {number}
 */
export
const LegStatus_connected = LegStatus.connected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @constant
 * @type {number}
 */
export
const connected = LegStatus.connected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LegStatus_unconnected
 * @constant
 * @type {number}
 */
export
const LegStatus_unconnected = LegStatus.unconnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unconnected
 * @constant
 * @type {number}
 */
export
const unconnected = LegStatus.unconnected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LegStatus_pending
 * @constant
 * @type {number}
 */
export
const LegStatus_pending = LegStatus.pending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pending
 * @constant
 * @type {number}
 */
export
const pending = LegStatus.pending; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LegStatus_interacting
 * @constant
 * @type {number}
 */
export
const LegStatus_interacting = LegStatus.interacting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interacting
 * @constant
 * @type {number}
 */
export
const interacting = LegStatus.interacting; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_LegStatus(el: _Element): LegStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case LegStatus.connected: return LegStatus.connected;
        case LegStatus.unconnected: return LegStatus.unconnected;
        case LegStatus.pending: return LegStatus.pending;
        case LegStatus.interacting: return LegStatus.interacting;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for LegStatus.",
                el,
            );
    }
}

export
const _encode_LegStatus: $.ASN1Encoder<LegStatus> = $._encodeEnumerated as $.ASN1Encoder<LegStatus>;

/* eslint-enable */
