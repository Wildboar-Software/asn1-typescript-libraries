/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatus  ::=  ENUMERATED
 * {     disabled             (4),
 *     partiallyDisabled         (8),
 *     enabled             (1),
 *     initializing             (0),
 *     messagesLost             (3),
 *     normal                 (2),    
 *     overloadImminent         (5),
 *     overloadReached         (6),
 *     overloadRelieved         (7) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SystemStatus {
    disabled = 4,
    partiallyDisabled = 8,
    enabled = 1,
    initializing = 0,
    messagesLost = 3,
    normal = 2,
    overloadImminent = 5,
    overloadReached = 6,
    overloadRelieved = 7,
}

/**
 * @summary SystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatus  ::=  ENUMERATED
 * {     disabled             (4),
 *     partiallyDisabled         (8),
 *     enabled             (1),
 *     initializing             (0),
 *     messagesLost             (3),
 *     normal                 (2),    
 *     overloadImminent         (5),
 *     overloadReached         (6),
 *     overloadRelieved         (7) }
 * ```
 * 
 * @enum {number}
 */
export
type SystemStatus = _enum_for_SystemStatus;

/**
 * @summary SystemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemStatus  ::=  ENUMERATED
 * {     disabled             (4),
 *     partiallyDisabled         (8),
 *     enabled             (1),
 *     initializing             (0),
 *     messagesLost             (3),
 *     normal                 (2),    
 *     overloadImminent         (5),
 *     overloadReached         (6),
 *     overloadRelieved         (7) }
 * ```
 * 
 * @enum {number}
 */
export
const SystemStatus = _enum_for_SystemStatus;

/**
 * @summary SystemStatus_disabled
 * @constant
 * @type {number}
 */
export
const SystemStatus_disabled: SystemStatus = SystemStatus.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: SystemStatus = SystemStatus.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_partiallyDisabled
 * @constant
 * @type {number}
 */
export
const SystemStatus_partiallyDisabled: SystemStatus = SystemStatus.partiallyDisabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary partiallyDisabled
 * @constant
 * @type {number}
 */
export
const partiallyDisabled: SystemStatus = SystemStatus.partiallyDisabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_enabled
 * @constant
 * @type {number}
 */
export
const SystemStatus_enabled: SystemStatus = SystemStatus.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export
const enabled: SystemStatus = SystemStatus.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_initializing
 * @constant
 * @type {number}
 */
export
const SystemStatus_initializing: SystemStatus = SystemStatus.initializing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initializing
 * @constant
 * @type {number}
 */
export
const initializing: SystemStatus = SystemStatus.initializing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_messagesLost
 * @constant
 * @type {number}
 */
export
const SystemStatus_messagesLost: SystemStatus = SystemStatus.messagesLost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messagesLost
 * @constant
 * @type {number}
 */
export
const messagesLost: SystemStatus = SystemStatus.messagesLost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_normal
 * @constant
 * @type {number}
 */
export
const SystemStatus_normal: SystemStatus = SystemStatus.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: SystemStatus = SystemStatus.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_overloadImminent
 * @constant
 * @type {number}
 */
export
const SystemStatus_overloadImminent: SystemStatus = SystemStatus.overloadImminent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overloadImminent
 * @constant
 * @type {number}
 */
export
const overloadImminent: SystemStatus = SystemStatus.overloadImminent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_overloadReached
 * @constant
 * @type {number}
 */
export
const SystemStatus_overloadReached: SystemStatus = SystemStatus.overloadReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overloadReached
 * @constant
 * @type {number}
 */
export
const overloadReached: SystemStatus = SystemStatus.overloadReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemStatus_overloadRelieved
 * @constant
 * @type {number}
 */
export
const SystemStatus_overloadRelieved: SystemStatus = SystemStatus.overloadRelieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overloadRelieved
 * @constant
 * @type {number}
 */
export
const overloadRelieved: SystemStatus = SystemStatus.overloadRelieved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SystemStatus: $.ASN1Decoder<SystemStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemStatus (el: _Element): SystemStatus {
    if (!_cached_decoder_for_SystemStatus) { _cached_decoder_for_SystemStatus = $._decodeEnumerated; }
    return _cached_decoder_for_SystemStatus(el);
}

let _cached_encoder_for_SystemStatus: $.ASN1Encoder<SystemStatus> | null = null;

/**
 * @summary Encodes a(n) SystemStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SystemStatus (value: SystemStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemStatus) { _cached_encoder_for_SystemStatus = $._encodeEnumerated; }
    return _cached_encoder_for_SystemStatus(value, elGetter);
}


/* eslint-enable */
