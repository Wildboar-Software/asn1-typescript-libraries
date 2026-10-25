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
const ReqDeviceCategory = _enum_for_ReqDeviceCategory;

/**
 * @summary ReqDeviceCategory_acd
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_acd = ReqDeviceCategory.acd satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acd
 * @constant
 * @type {number}
 */
export
const acd = ReqDeviceCategory.acd satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_conference
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_conference = ReqDeviceCategory.conference satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conference
 * @constant
 * @type {number}
 */
export
const conference = ReqDeviceCategory.conference satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_dtmfIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_dtmfIV = ReqDeviceCategory.dtmfIV satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dtmfIV
 * @constant
 * @type {number}
 */
export
const dtmfIV = ReqDeviceCategory.dtmfIV satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_genericIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_genericIV = ReqDeviceCategory.genericIV satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericIV
 * @constant
 * @type {number}
 */
export
const genericIV = ReqDeviceCategory.genericIV satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupACD
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupACD = ReqDeviceCategory.groupACD satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupACD
 * @constant
 * @type {number}
 */
export
const groupACD = ReqDeviceCategory.groupACD satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupHunt
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupHunt = ReqDeviceCategory.groupHunt satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupHunt
 * @constant
 * @type {number}
 */
export
const groupHunt = ReqDeviceCategory.groupHunt satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupPick
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupPick = ReqDeviceCategory.groupPick satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupPick
 * @constant
 * @type {number}
 */
export
const groupPick = ReqDeviceCategory.groupPick satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupOther
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupOther = ReqDeviceCategory.groupOther satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupOther
 * @constant
 * @type {number}
 */
export
const groupOther = ReqDeviceCategory.groupOther satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_groupUser
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_groupUser = ReqDeviceCategory.groupUser satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupUser
 * @constant
 * @type {number}
 */
export
const groupUser = ReqDeviceCategory.groupUser satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_listenerIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_listenerIV = ReqDeviceCategory.listenerIV satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenerIV
 * @constant
 * @type {number}
 */
export
const listenerIV = ReqDeviceCategory.listenerIV satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_messageIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_messageIV = ReqDeviceCategory.messageIV satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageIV
 * @constant
 * @type {number}
 */
export
const messageIV = ReqDeviceCategory.messageIV satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_networkInterface
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_networkInterface = ReqDeviceCategory.networkInterface satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInterface
 * @constant
 * @type {number}
 */
export
const networkInterface = ReqDeviceCategory.networkInterface satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_park
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_park = ReqDeviceCategory.park satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @constant
 * @type {number}
 */
export
const park = ReqDeviceCategory.park satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_promptIV
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_promptIV = ReqDeviceCategory.promptIV satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary promptIV
 * @constant
 * @type {number}
 */
export
const promptIV = ReqDeviceCategory.promptIV satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_promptQueue
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_promptQueue = ReqDeviceCategory.promptQueue satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary promptQueue
 * @constant
 * @type {number}
 */
export
const promptQueue = ReqDeviceCategory.promptQueue satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_routeingDevice
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_routeingDevice = ReqDeviceCategory.routeingDevice satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeingDevice
 * @constant
 * @type {number}
 */
export
const routeingDevice = ReqDeviceCategory.routeingDevice satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_station
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_station = ReqDeviceCategory.station satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary station
 * @constant
 * @type {number}
 */
export
const station = ReqDeviceCategory.station satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_voiceUnit
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_voiceUnit = ReqDeviceCategory.voiceUnit satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceUnit
 * @constant
 * @type {number}
 */
export
const voiceUnit = ReqDeviceCategory.voiceUnit satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReqDeviceCategory_other
 * @constant
 * @type {number}
 */
export
const ReqDeviceCategory_other = ReqDeviceCategory.other satisfies ReqDeviceCategory; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other = ReqDeviceCategory.other satisfies ReqDeviceCategory; /* SHORT_NAMED_ENUMERATED_VALUE */

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
