/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DeviceCategory
 * @description
 * Device category of a queried device in Get Logical/Physical Device
 * Information (ECMA-269 §13.1.2.2.1 / §13.1.3.2.1, ECMA-285 §9.10). Station is
 * the default.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceCategory  ::=  ENUMERATED
 * {     acd                     ( 0),
 *     group                     ( 1),
 *     networkInterface             ( 2),
 *     park                     ( 3),
 *     routeingDevice                 ( 4),
 *     station                 ( 5),
 *     voiceUnit                 ( 6),
 *     genericInteractiveVoice            ( 8),
 *     listenerInteractiveVoice        ( 9),
 *     dtmfInteractiveVoice            (10),
 *     promptInteractiveVoice            (11),
 *     promptQueueInteractiveVoice        (12),
 *     messageInteractiveVoice            (13),
 *     conference                (14),
 *     other                     ( 7) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DeviceCategory {
    acd = 0,
    group = 1,
    networkInterface = 2,
    park = 3,
    routeingDevice = 4,
    station = 5,
    voiceUnit = 6,
    genericInteractiveVoice = 8,
    listenerInteractiveVoice = 9,
    dtmfInteractiveVoice = 10,
    promptInteractiveVoice = 11,
    promptQueueInteractiveVoice = 12,
    messageInteractiveVoice = 13,
    conference = 14,
    other = 7,
}

/**
 * @summary DeviceCategory
 * @description
 * Device category of a queried device in Get Logical/Physical Device
 * Information (ECMA-269 §13.1.2.2.1 / §13.1.3.2.1, ECMA-285 §9.10). Station is
 * the default.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceCategory  ::=  ENUMERATED
 * {     acd                     ( 0),
 *     group                     ( 1),
 *     networkInterface             ( 2),
 *     park                     ( 3),
 *     routeingDevice                 ( 4),
 *     station                 ( 5),
 *     voiceUnit                 ( 6),
 *     genericInteractiveVoice            ( 8),
 *     listenerInteractiveVoice        ( 9),
 *     dtmfInteractiveVoice            (10),
 *     promptInteractiveVoice            (11),
 *     promptQueueInteractiveVoice        (12),
 *     messageInteractiveVoice            (13),
 *     conference                (14),
 *     other                     ( 7) }
 * ```
 * 
 * @enum {number}
 */
export
type DeviceCategory = _enum_for_DeviceCategory;

/**
 * @summary DeviceCategory
 * @description
 * Device category of a queried device in Get Logical/Physical Device
 * Information (ECMA-269 §13.1.2.2.1 / §13.1.3.2.1, ECMA-285 §9.10). Station is
 * the default.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceCategory  ::=  ENUMERATED
 * {     acd                     ( 0),
 *     group                     ( 1),
 *     networkInterface             ( 2),
 *     park                     ( 3),
 *     routeingDevice                 ( 4),
 *     station                 ( 5),
 *     voiceUnit                 ( 6),
 *     genericInteractiveVoice            ( 8),
 *     listenerInteractiveVoice        ( 9),
 *     dtmfInteractiveVoice            (10),
 *     promptInteractiveVoice            (11),
 *     promptQueueInteractiveVoice        (12),
 *     messageInteractiveVoice            (13),
 *     conference                (14),
 *     other                     ( 7) }
 * ```
 * 
 * @enum {number}
 */
export
const DeviceCategory = _enum_for_DeviceCategory;

/**
 * @summary DeviceCategory_acd
 * @constant
 * @type {number}
 * @description
 * ACD device (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_acd: DeviceCategory = DeviceCategory.acd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acd
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_acd`.
 */
export
const acd: DeviceCategory = DeviceCategory.acd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_group
 * @constant
 * @type {number}
 * @description
 * Group device (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_group: DeviceCategory = DeviceCategory.group; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary group
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_group`.
 */
export
const group: DeviceCategory = DeviceCategory.group; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_networkInterface
 * @constant
 * @type {number}
 * @description
 * Network Interface (e.g. trunk, CO line) (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_networkInterface: DeviceCategory = DeviceCategory.networkInterface; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInterface
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_networkInterface`.
 */
export
const networkInterface: DeviceCategory = DeviceCategory.networkInterface; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_park
 * @constant
 * @type {number}
 * @description
 * Park device (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_park: DeviceCategory = DeviceCategory.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_park`.
 */
export
const park: DeviceCategory = DeviceCategory.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_routeingDevice
 * @constant
 * @type {number}
 * @description
 * Routeing Device (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_routeingDevice: DeviceCategory = DeviceCategory.routeingDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeingDevice
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_routeingDevice`.
 */
export
const routeingDevice: DeviceCategory = DeviceCategory.routeingDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_station
 * @constant
 * @type {number}
 * @description
 * Station (default) (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_station: DeviceCategory = DeviceCategory.station; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary station
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_station`.
 */
export
const station: DeviceCategory = DeviceCategory.station; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_voiceUnit
 * @constant
 * @type {number}
 * @description
 * Voice Unit (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_voiceUnit: DeviceCategory = DeviceCategory.voiceUnit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceUnit
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_voiceUnit`.
 */
export
const voiceUnit: DeviceCategory = DeviceCategory.voiceUnit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_genericInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Generic Interactive Voice (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_genericInteractiveVoice: DeviceCategory = DeviceCategory.genericInteractiveVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_genericInteractiveVoice`.
 */
export
const genericInteractiveVoice: DeviceCategory = DeviceCategory.genericInteractiveVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_listenerInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Listener Interactive Voice (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_listenerInteractiveVoice: DeviceCategory = DeviceCategory.listenerInteractiveVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenerInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_listenerInteractiveVoice`.
 */
export
const listenerInteractiveVoice: DeviceCategory = DeviceCategory.listenerInteractiveVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_dtmfInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * DTMF Interactive Voice (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_dtmfInteractiveVoice: DeviceCategory = DeviceCategory.dtmfInteractiveVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmfInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_dtmfInteractiveVoice`.
 */
export
const dtmfInteractiveVoice: DeviceCategory = DeviceCategory.dtmfInteractiveVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_promptInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Prompt Interactive Voice (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_promptInteractiveVoice: DeviceCategory = DeviceCategory.promptInteractiveVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary promptInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_promptInteractiveVoice`.
 */
export
const promptInteractiveVoice: DeviceCategory = DeviceCategory.promptInteractiveVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_promptQueueInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Prompt Queue Interactive Voice (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_promptQueueInteractiveVoice: DeviceCategory = DeviceCategory.promptQueueInteractiveVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary promptQueueInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_promptQueueInteractiveVoice`.
 */
export
const promptQueueInteractiveVoice: DeviceCategory = DeviceCategory.promptQueueInteractiveVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_messageInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Message Interactive Voice (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_messageInteractiveVoice: DeviceCategory = DeviceCategory.messageInteractiveVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageInteractiveVoice
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_messageInteractiveVoice`.
 */
export
const messageInteractiveVoice: DeviceCategory = DeviceCategory.messageInteractiveVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_conference
 * @constant
 * @type {number}
 * @description
 * Conference (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_conference: DeviceCategory = DeviceCategory.conference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conference
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_conference`.
 */
export
const conference: DeviceCategory = DeviceCategory.conference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DeviceCategory_other
 * @constant
 * @type {number}
 * @description
 * Other (ECMA-269 §13.1.2–13.1.4).
 */
export
const DeviceCategory_other: DeviceCategory = DeviceCategory.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 * @description
 * Alias of `DeviceCategory_other`.
 */
export
const other: DeviceCategory = DeviceCategory.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DeviceCategory: $.ASN1Decoder<DeviceCategory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceCategory (el: _Element): DeviceCategory {
    if (!_cached_decoder_for_DeviceCategory) { _cached_decoder_for_DeviceCategory = $._decodeEnumerated; }
    return _cached_decoder_for_DeviceCategory(el);
}

let _cached_encoder_for_DeviceCategory: $.ASN1Encoder<DeviceCategory> | null = null;

/**
 * @summary Encodes a(n) DeviceCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceCategory, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceCategory (value: DeviceCategory, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceCategory) { _cached_encoder_for_DeviceCategory = $._encodeEnumerated; }
    return _cached_encoder_for_DeviceCategory(value, elGetter);
}


/* eslint-enable */
