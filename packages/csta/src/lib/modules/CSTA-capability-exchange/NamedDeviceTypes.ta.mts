/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NamedDeviceTypes
 * @description
 * Optional named device type assigned by the SF (ECMA-269 §13.1.2.2.1 /
 * §13.1.3.2.1, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDeviceTypes  ::=  ENUMERATED
 * {     acd                     ( 0),
 *     acdGroup                 ( 1),
 *     button                     ( 2),
 *     buttonGroup                 ( 3),
 *     conferenceBridge             ( 4),
 *     line                     ( 5),
 *     lineGroup                 ( 6),
 *     operator                 ( 7),
 *     operatorGroup                 ( 8),
 *     parkingDevice                 ( 9),
 *     station                 (10),
 *     stationGroup                 (11),
 *     trunk                     (12),
 *     trunkGroup                 (13),
 *     other                     (14),
 *     otherGroup                 (15) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NamedDeviceTypes {
    acd = 0,
    acdGroup = 1,
    button = 2,
    buttonGroup = 3,
    conferenceBridge = 4,
    line = 5,
    lineGroup = 6,
    operator = 7,
    operatorGroup = 8,
    parkingDevice = 9,
    station = 10,
    stationGroup = 11,
    trunk = 12,
    trunkGroup = 13,
    other = 14,
    otherGroup = 15,
}

/**
 * @summary NamedDeviceTypes
 * @description
 * Optional named device type assigned by the SF (ECMA-269 §13.1.2.2.1 /
 * §13.1.3.2.1, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDeviceTypes  ::=  ENUMERATED
 * {     acd                     ( 0),
 *     acdGroup                 ( 1),
 *     button                     ( 2),
 *     buttonGroup                 ( 3),
 *     conferenceBridge             ( 4),
 *     line                     ( 5),
 *     lineGroup                 ( 6),
 *     operator                 ( 7),
 *     operatorGroup                 ( 8),
 *     parkingDevice                 ( 9),
 *     station                 (10),
 *     stationGroup                 (11),
 *     trunk                     (12),
 *     trunkGroup                 (13),
 *     other                     (14),
 *     otherGroup                 (15) }
 * ```
 * 
 * @enum {number}
 */
export
type NamedDeviceTypes = _enum_for_NamedDeviceTypes;

/**
 * @summary NamedDeviceTypes
 * @description
 * Optional named device type assigned by the SF (ECMA-269 §13.1.2.2.1 /
 * §13.1.3.2.1, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDeviceTypes  ::=  ENUMERATED
 * {     acd                     ( 0),
 *     acdGroup                 ( 1),
 *     button                     ( 2),
 *     buttonGroup                 ( 3),
 *     conferenceBridge             ( 4),
 *     line                     ( 5),
 *     lineGroup                 ( 6),
 *     operator                 ( 7),
 *     operatorGroup                 ( 8),
 *     parkingDevice                 ( 9),
 *     station                 (10),
 *     stationGroup                 (11),
 *     trunk                     (12),
 *     trunkGroup                 (13),
 *     other                     (14),
 *     otherGroup                 (15) }
 * ```
 * 
 * @enum {number}
 */
export
const NamedDeviceTypes = _enum_for_NamedDeviceTypes;

/**
 * @summary NamedDeviceTypes_acd
 * @constant
 * @type {number}
 * @description
 * ACD (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_acd: NamedDeviceTypes = NamedDeviceTypes.acd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acd
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_acd`.
 */
export
const acd: NamedDeviceTypes = NamedDeviceTypes.acd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_acdGroup
 * @constant
 * @type {number}
 * @description
 * ACD Group (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_acdGroup: NamedDeviceTypes = NamedDeviceTypes.acdGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acdGroup
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_acdGroup`.
 */
export
const acdGroup: NamedDeviceTypes = NamedDeviceTypes.acdGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_button
 * @constant
 * @type {number}
 * @description
 * Button (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_button: NamedDeviceTypes = NamedDeviceTypes.button; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary button
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_button`.
 */
export
const button: NamedDeviceTypes = NamedDeviceTypes.button; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_buttonGroup
 * @constant
 * @type {number}
 * @description
 * Button Group (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_buttonGroup: NamedDeviceTypes = NamedDeviceTypes.buttonGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary buttonGroup
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_buttonGroup`.
 */
export
const buttonGroup: NamedDeviceTypes = NamedDeviceTypes.buttonGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_conferenceBridge
 * @constant
 * @type {number}
 * @description
 * Conference Bridge (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_conferenceBridge: NamedDeviceTypes = NamedDeviceTypes.conferenceBridge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conferenceBridge
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_conferenceBridge`.
 */
export
const conferenceBridge: NamedDeviceTypes = NamedDeviceTypes.conferenceBridge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_line
 * @constant
 * @type {number}
 * @description
 * Line (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_line: NamedDeviceTypes = NamedDeviceTypes.line; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary line
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_line`.
 */
export
const line: NamedDeviceTypes = NamedDeviceTypes.line; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_lineGroup
 * @constant
 * @type {number}
 * @description
 * Line Group (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_lineGroup: NamedDeviceTypes = NamedDeviceTypes.lineGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lineGroup
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_lineGroup`.
 */
export
const lineGroup: NamedDeviceTypes = NamedDeviceTypes.lineGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_operator
 * @constant
 * @type {number}
 * @description
 * Operator (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_operator: NamedDeviceTypes = NamedDeviceTypes.operator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operator
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_operator`.
 */
export
const operator: NamedDeviceTypes = NamedDeviceTypes.operator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_operatorGroup
 * @constant
 * @type {number}
 * @description
 * Operator Group (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_operatorGroup: NamedDeviceTypes = NamedDeviceTypes.operatorGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operatorGroup
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_operatorGroup`.
 */
export
const operatorGroup: NamedDeviceTypes = NamedDeviceTypes.operatorGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_parkingDevice
 * @constant
 * @type {number}
 * @description
 * Parking Device (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_parkingDevice: NamedDeviceTypes = NamedDeviceTypes.parkingDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parkingDevice
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_parkingDevice`.
 */
export
const parkingDevice: NamedDeviceTypes = NamedDeviceTypes.parkingDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_station
 * @constant
 * @type {number}
 * @description
 * Station (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_station: NamedDeviceTypes = NamedDeviceTypes.station; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary station
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_station`.
 */
export
const station: NamedDeviceTypes = NamedDeviceTypes.station; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_stationGroup
 * @constant
 * @type {number}
 * @description
 * Station Group (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_stationGroup: NamedDeviceTypes = NamedDeviceTypes.stationGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stationGroup
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_stationGroup`.
 */
export
const stationGroup: NamedDeviceTypes = NamedDeviceTypes.stationGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_trunk
 * @constant
 * @type {number}
 * @description
 * Trunk (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_trunk: NamedDeviceTypes = NamedDeviceTypes.trunk; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunk
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_trunk`.
 */
export
const trunk: NamedDeviceTypes = NamedDeviceTypes.trunk; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_trunkGroup
 * @constant
 * @type {number}
 * @description
 * Trunk Group (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_trunkGroup: NamedDeviceTypes = NamedDeviceTypes.trunkGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunkGroup
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_trunkGroup`.
 */
export
const trunkGroup: NamedDeviceTypes = NamedDeviceTypes.trunkGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_other
 * @constant
 * @type {number}
 * @description
 * Other (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_other: NamedDeviceTypes = NamedDeviceTypes.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_other`.
 */
export
const other: NamedDeviceTypes = NamedDeviceTypes.other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDeviceTypes_otherGroup
 * @constant
 * @type {number}
 * @description
 * Other Group (ECMA-269 §13.1.2–13.1.4).
 */
export
const NamedDeviceTypes_otherGroup: NamedDeviceTypes = NamedDeviceTypes.otherGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherGroup
 * @constant
 * @type {number}
 * @description
 * Alias of `NamedDeviceTypes_otherGroup`.
 */
export
const otherGroup: NamedDeviceTypes = NamedDeviceTypes.otherGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NamedDeviceTypes: $.ASN1Decoder<NamedDeviceTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamedDeviceTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamedDeviceTypes (el: _Element): NamedDeviceTypes {
    if (!_cached_decoder_for_NamedDeviceTypes) { _cached_decoder_for_NamedDeviceTypes = $._decodeEnumerated; }
    return _cached_decoder_for_NamedDeviceTypes(el);
}

let _cached_encoder_for_NamedDeviceTypes: $.ASN1Encoder<NamedDeviceTypes> | null = null;

/**
 * @summary Encodes a(n) NamedDeviceTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDeviceTypes, encoded as an ASN.1 Element.
 */
export
function _encode_NamedDeviceTypes (value: NamedDeviceTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamedDeviceTypes) { _cached_encoder_for_NamedDeviceTypes = $._encodeEnumerated; }
    return _cached_encoder_for_NamedDeviceTypes(value, elGetter);
}


/* eslint-enable */
