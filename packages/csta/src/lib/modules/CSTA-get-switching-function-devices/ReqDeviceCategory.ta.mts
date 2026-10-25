/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReqDeviceCategory
 * @description
 *
 * Requested category filter for Get Switching Function Devices
 * (Table 13-10). Group values distinguish ACD, hunt, pick, user,
 * and other.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqDeviceCategory  ::=  ENUMERATED
 * {    acd                 ( 0),
 *     conference            (11),
 *     dtmfIV                (12),
 *     genericIV            (13),
 *     groupACD             ( 1),
 *     groupHunt             ( 2),
 *     groupPick             ( 3),
 *     groupOther             ( 4),
 *     groupUser            (14),
 *     listenerIV            (15),
 *     messageIV            (16),
 *     networkInterface         ( 5),
 *     park                 ( 6),
 *     promptIV            (17),
 *     promptQueue            (18),
 *     routeingDevice            ( 7),
 *     station             ( 8),
 *     voiceUnit             ( 9),
 *     other                 (10) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReqDeviceCategory {
    acd = 0,
    conference = 11,
    dtmfIV = 12,
    genericIV = 13,
    groupACD = 1,
    groupHunt = 2,
    groupPick = 3,
    groupOther = 4,
    groupUser = 14,
    listenerIV = 15,
    messageIV = 16,
    networkInterface = 5,
    park = 6,
    promptIV = 17,
    promptQueue = 18,
    routeingDevice = 7,
    station = 8,
    voiceUnit = 9,
    other = 10,
}

/**
 * @summary ReqDeviceCategory
 * @description
 *
 * Requested category filter for Get Switching Function Devices
 * (Table 13-10). Group values distinguish ACD, hunt, pick, user,
 * and other.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqDeviceCategory  ::=  ENUMERATED
 * {    acd                 ( 0),
 *     conference            (11),
 *     dtmfIV                (12),
 *     genericIV            (13),
 *     groupACD             ( 1),
 *     groupHunt             ( 2),
 *     groupPick             ( 3),
 *     groupOther             ( 4),
 *     groupUser            (14),
 *     listenerIV            (15),
 *     messageIV            (16),
 *     networkInterface         ( 5),
 *     park                 ( 6),
 *     promptIV            (17),
 *     promptQueue            (18),
 *     routeingDevice            ( 7),
 *     station             ( 8),
 *     voiceUnit             ( 9),
 *     other                 (10) }
 * ```
 * 
 * @enum {number}
 */
export
type ReqDeviceCategory = _enum_for_ReqDeviceCategory;

/**
 * @summary ReqDeviceCategory
 * @description
 *
 * Requested category filter for Get Switching Function Devices
 * (Table 13-10). Group values distinguish ACD, hunt, pick, user,
 * and other.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReqDeviceCategory  ::=  ENUMERATED
 * {    acd                 ( 0),
 *     conference            (11),
 *     dtmfIV                (12),
 *     genericIV            (13),
 *     groupACD             ( 1),
 *     groupHunt             ( 2),
 *     groupPick             ( 3),
 *     groupOther             ( 4),
 *     groupUser            (14),
 *     listenerIV            (15),
 *     messageIV            (16),
 *     networkInterface         ( 5),
 *     park                 ( 6),
 *     promptIV            (17),
 *     promptQueue            (18),
 *     routeingDevice            ( 7),
 *     station             ( 8),
 *     voiceUnit             ( 9),
 *     other                 (10) }
 * ```
 * 
 * @enum {number}
 */
export
const ReqDeviceCategory: typeof _enum_for_ReqDeviceCategory = _enum_for_ReqDeviceCategory;

/**
 * @summary ReqDeviceCategory_acd
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_acd: _enum_for_ReqDeviceCategory.acd = ReqDeviceCategory.acd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acd
 * @constant
 * @type {number}
 */
export
const acd: _enum_for_ReqDeviceCategory.acd = ReqDeviceCategory.acd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_conference
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_conference: _enum_for_ReqDeviceCategory.conference = ReqDeviceCategory.conference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conference
 * @constant
 * @type {number}
 */
export
const conference: _enum_for_ReqDeviceCategory.conference = ReqDeviceCategory.conference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_dtmfIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_dtmfIV: _enum_for_ReqDeviceCategory.dtmfIV = ReqDeviceCategory.dtmfIV; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmfIV
 * @constant
 * @type {number}
 */
export
const dtmfIV: _enum_for_ReqDeviceCategory.dtmfIV = ReqDeviceCategory.dtmfIV; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_genericIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_genericIV: _enum_for_ReqDeviceCategory.genericIV = ReqDeviceCategory.genericIV; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericIV
 * @constant
 * @type {number}
 */
export
const genericIV: _enum_for_ReqDeviceCategory.genericIV = ReqDeviceCategory.genericIV; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupACD
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupACD: _enum_for_ReqDeviceCategory.groupACD = ReqDeviceCategory.groupACD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupACD
 * @constant
 * @type {number}
 */
export
const groupACD: _enum_for_ReqDeviceCategory.groupACD = ReqDeviceCategory.groupACD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupHunt
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupHunt: _enum_for_ReqDeviceCategory.groupHunt = ReqDeviceCategory.groupHunt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupHunt
 * @constant
 * @type {number}
 */
export
const groupHunt: _enum_for_ReqDeviceCategory.groupHunt = ReqDeviceCategory.groupHunt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupPick
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupPick: _enum_for_ReqDeviceCategory.groupPick = ReqDeviceCategory.groupPick; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupPick
 * @constant
 * @type {number}
 */
export
const groupPick: _enum_for_ReqDeviceCategory.groupPick = ReqDeviceCategory.groupPick; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupOther
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupOther: _enum_for_ReqDeviceCategory.groupOther = ReqDeviceCategory.groupOther; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupOther
 * @constant
 * @type {number}
 */
export
const groupOther: _enum_for_ReqDeviceCategory.groupOther = ReqDeviceCategory.groupOther; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupUser
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupUser: _enum_for_ReqDeviceCategory.groupUser = ReqDeviceCategory.groupUser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupUser
 * @constant
 * @type {number}
 */
export
const groupUser: _enum_for_ReqDeviceCategory.groupUser = ReqDeviceCategory.groupUser; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_listenerIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_listenerIV: _enum_for_ReqDeviceCategory.listenerIV = ReqDeviceCategory.listenerIV; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenerIV
 * @constant
 * @type {number}
 */
export
const listenerIV: _enum_for_ReqDeviceCategory.listenerIV = ReqDeviceCategory.listenerIV; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_messageIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_messageIV: _enum_for_ReqDeviceCategory.messageIV = ReqDeviceCategory.messageIV; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageIV
 * @constant
 * @type {number}
 */
export
const messageIV: _enum_for_ReqDeviceCategory.messageIV = ReqDeviceCategory.messageIV; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_networkInterface
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_networkInterface: _enum_for_ReqDeviceCategory.networkInterface = ReqDeviceCategory.networkInterface; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInterface
 * @constant
 * @type {number}
 */
export
const networkInterface: _enum_for_ReqDeviceCategory.networkInterface = ReqDeviceCategory.networkInterface; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_park
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_park: _enum_for_ReqDeviceCategory.park = ReqDeviceCategory.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @constant
 * @type {number}
 */
export
const park: _enum_for_ReqDeviceCategory.park = ReqDeviceCategory.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_promptIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_promptIV: _enum_for_ReqDeviceCategory.promptIV = ReqDeviceCategory.promptIV; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary promptIV
 * @constant
 * @type {number}
 */
export
const promptIV: _enum_for_ReqDeviceCategory.promptIV = ReqDeviceCategory.promptIV; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_promptQueue
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_promptQueue: _enum_for_ReqDeviceCategory.promptQueue = ReqDeviceCategory.promptQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary promptQueue
 * @constant
 * @type {number}
 */
export
const promptQueue: _enum_for_ReqDeviceCategory.promptQueue = ReqDeviceCategory.promptQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_routeingDevice
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_routeingDevice: _enum_for_ReqDeviceCategory.routeingDevice = ReqDeviceCategory.routeingDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeingDevice
 * @constant
 * @type {number}
 */
export
const routeingDevice: _enum_for_ReqDeviceCategory.routeingDevice = ReqDeviceCategory.routeingDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_station
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_station: _enum_for_ReqDeviceCategory.station = ReqDeviceCategory.station; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary station
 * @constant
 * @type {number}
 */
export
const station: _enum_for_ReqDeviceCategory.station = ReqDeviceCategory.station; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_voiceUnit
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_voiceUnit: _enum_for_ReqDeviceCategory.voiceUnit = ReqDeviceCategory.voiceUnit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceUnit
 * @constant
 * @type {number}
 */
export
const voiceUnit: _enum_for_ReqDeviceCategory.voiceUnit = ReqDeviceCategory.voiceUnit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_other
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_other: _enum_for_ReqDeviceCategory.other = ReqDeviceCategory.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_ReqDeviceCategory.other = ReqDeviceCategory.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReqDeviceCategory: $.ASN1Decoder<ReqDeviceCategory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReqDeviceCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReqDeviceCategory (el: _Element): ReqDeviceCategory {
    if (!_cached_decoder_for_ReqDeviceCategory) { _cached_decoder_for_ReqDeviceCategory = $._decodeEnumerated; }
    return _cached_decoder_for_ReqDeviceCategory(el);
}

let _cached_encoder_for_ReqDeviceCategory: $.ASN1Encoder<ReqDeviceCategory> | null = null;

/**
 * @summary Encodes a(n) ReqDeviceCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReqDeviceCategory, encoded as an ASN.1 Element.
 */
export
function _encode_ReqDeviceCategory (value: ReqDeviceCategory, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReqDeviceCategory) { _cached_encoder_for_ReqDeviceCategory = $._encodeEnumerated; }
    return _cached_encoder_for_ReqDeviceCategory(value, elGetter);
}


/* eslint-enable */
