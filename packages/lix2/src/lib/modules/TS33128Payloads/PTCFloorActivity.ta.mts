/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCFloorActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorActivity   ::=  ENUMERATED
 * {
 *     tBCPRequest(1),
 *     tBCPGranted(2),
 *     tBCPDeny(3),
 *     tBCPIdle(4),
 *     tBCPTaken(5),
 *     tBCPRevoke(6),
 *     tBCPQueued(7),
 *     tBCPRelease(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCFloorActivity {
    tBCPRequest = 1,
    tBCPGranted = 2,
    tBCPDeny = 3,
    tBCPIdle = 4,
    tBCPTaken = 5,
    tBCPRevoke = 6,
    tBCPQueued = 7,
    tBCPRelease = 8,
}

/**
 * @summary PTCFloorActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorActivity   ::=  ENUMERATED
 * {
 *     tBCPRequest(1),
 *     tBCPGranted(2),
 *     tBCPDeny(3),
 *     tBCPIdle(4),
 *     tBCPTaken(5),
 *     tBCPRevoke(6),
 *     tBCPQueued(7),
 *     tBCPRelease(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCFloorActivity = _enum_for_PTCFloorActivity;

/**
 * @summary PTCFloorActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorActivity   ::=  ENUMERATED
 * {
 *     tBCPRequest(1),
 *     tBCPGranted(2),
 *     tBCPDeny(3),
 *     tBCPIdle(4),
 *     tBCPTaken(5),
 *     tBCPRevoke(6),
 *     tBCPQueued(7),
 *     tBCPRelease(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCFloorActivity = _enum_for_PTCFloorActivity;

/**
 * @summary PTCFloorActivity_tBCPRequest
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPRequest: PTCFloorActivity = PTCFloorActivity.tBCPRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPRequest
 * @constant
 * @type {number}
 */
export
const tBCPRequest: PTCFloorActivity = PTCFloorActivity.tBCPRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPGranted
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPGranted: PTCFloorActivity = PTCFloorActivity.tBCPGranted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPGranted
 * @constant
 * @type {number}
 */
export
const tBCPGranted: PTCFloorActivity = PTCFloorActivity.tBCPGranted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPDeny
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPDeny: PTCFloorActivity = PTCFloorActivity.tBCPDeny; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPDeny
 * @constant
 * @type {number}
 */
export
const tBCPDeny: PTCFloorActivity = PTCFloorActivity.tBCPDeny; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPIdle
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPIdle: PTCFloorActivity = PTCFloorActivity.tBCPIdle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPIdle
 * @constant
 * @type {number}
 */
export
const tBCPIdle: PTCFloorActivity = PTCFloorActivity.tBCPIdle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPTaken
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPTaken: PTCFloorActivity = PTCFloorActivity.tBCPTaken; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPTaken
 * @constant
 * @type {number}
 */
export
const tBCPTaken: PTCFloorActivity = PTCFloorActivity.tBCPTaken; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPRevoke
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPRevoke: PTCFloorActivity = PTCFloorActivity.tBCPRevoke; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPRevoke
 * @constant
 * @type {number}
 */
export
const tBCPRevoke: PTCFloorActivity = PTCFloorActivity.tBCPRevoke; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPQueued
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPQueued: PTCFloorActivity = PTCFloorActivity.tBCPQueued; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPQueued
 * @constant
 * @type {number}
 */
export
const tBCPQueued: PTCFloorActivity = PTCFloorActivity.tBCPQueued; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPRelease
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPRelease: PTCFloorActivity = PTCFloorActivity.tBCPRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPRelease
 * @constant
 * @type {number}
 */
export
const tBCPRelease: PTCFloorActivity = PTCFloorActivity.tBCPRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCFloorActivity: $.ASN1Decoder<PTCFloorActivity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCFloorActivity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCFloorActivity (el: _Element): PTCFloorActivity {
    if (!_cached_decoder_for_PTCFloorActivity) { _cached_decoder_for_PTCFloorActivity = $._decodeEnumerated; }
    return _cached_decoder_for_PTCFloorActivity(el);
}

let _cached_encoder_for_PTCFloorActivity: $.ASN1Encoder<PTCFloorActivity> | null = null;

/**
 * @summary Encodes a(n) PTCFloorActivity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCFloorActivity, encoded as an ASN.1 Element.
 */
export
function _encode_PTCFloorActivity (value: PTCFloorActivity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCFloorActivity) { _cached_encoder_for_PTCFloorActivity = $._encodeEnumerated; }
    return _cached_encoder_for_PTCFloorActivity(value, elGetter);
}


/* eslint-enable */
