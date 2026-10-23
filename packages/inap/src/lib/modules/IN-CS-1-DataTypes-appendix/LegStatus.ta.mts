/* eslint-disable */
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
const LegStatus_connected: LegStatus = LegStatus.connected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @constant
 * @type {number}
 */
export
const connected: LegStatus = LegStatus.connected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LegStatus_unconnected
 * @constant
 * @type {number}
 */
export
const LegStatus_unconnected: LegStatus = LegStatus.unconnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unconnected
 * @constant
 * @type {number}
 */
export
const unconnected: LegStatus = LegStatus.unconnected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LegStatus_pending
 * @constant
 * @type {number}
 */
export
const LegStatus_pending: LegStatus = LegStatus.pending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pending
 * @constant
 * @type {number}
 */
export
const pending: LegStatus = LegStatus.pending; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LegStatus_interacting
 * @constant
 * @type {number}
 */
export
const LegStatus_interacting: LegStatus = LegStatus.interacting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interacting
 * @constant
 * @type {number}
 */
export
const interacting: LegStatus = LegStatus.interacting; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_LegStatus: $.ASN1Decoder<LegStatus> = $._decodeEnumerated;

export
const _encode_LegStatus: $.ASN1Encoder<LegStatus> = $._encodeEnumerated;

/* eslint-enable */
