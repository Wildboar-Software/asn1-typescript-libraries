/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BatteryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BatteryIndication  ::=  ENUMERATED
 * {
 *     batteryRecharge(1),
 *     batteryReplace(2),
 *     batteryNoRecharge(3),
 *     batteryNoReplace(4),
 *     noBattery(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_BatteryIndication {
    batteryRecharge = 1,
    batteryReplace = 2,
    batteryNoRecharge = 3,
    batteryNoReplace = 4,
    noBattery = 5,
}

/**
 * @summary BatteryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BatteryIndication  ::=  ENUMERATED
 * {
 *     batteryRecharge(1),
 *     batteryReplace(2),
 *     batteryNoRecharge(3),
 *     batteryNoReplace(4),
 *     noBattery(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type BatteryIndication = _enum_for_BatteryIndication;

/**
 * @summary BatteryIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BatteryIndication  ::=  ENUMERATED
 * {
 *     batteryRecharge(1),
 *     batteryReplace(2),
 *     batteryNoRecharge(3),
 *     batteryNoReplace(4),
 *     noBattery(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const BatteryIndication = _enum_for_BatteryIndication;

/**
 * @summary BatteryIndication_batteryRecharge
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryRecharge: BatteryIndication = BatteryIndication.batteryRecharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryRecharge
 * @constant
 * @type {number}
 */
export
const batteryRecharge: BatteryIndication = BatteryIndication.batteryRecharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_batteryReplace
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryReplace: BatteryIndication = BatteryIndication.batteryReplace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryReplace
 * @constant
 * @type {number}
 */
export
const batteryReplace: BatteryIndication = BatteryIndication.batteryReplace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_batteryNoRecharge
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryNoRecharge: BatteryIndication = BatteryIndication.batteryNoRecharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryNoRecharge
 * @constant
 * @type {number}
 */
export
const batteryNoRecharge: BatteryIndication = BatteryIndication.batteryNoRecharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_batteryNoReplace
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryNoReplace: BatteryIndication = BatteryIndication.batteryNoReplace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryNoReplace
 * @constant
 * @type {number}
 */
export
const batteryNoReplace: BatteryIndication = BatteryIndication.batteryNoReplace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_noBattery
 * @constant
 * @type {number}
 */
export
const BatteryIndication_noBattery: BatteryIndication = BatteryIndication.noBattery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noBattery
 * @constant
 * @type {number}
 */
export
const noBattery: BatteryIndication = BatteryIndication.noBattery; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BatteryIndication: $.ASN1Decoder<BatteryIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BatteryIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BatteryIndication (el: _Element): BatteryIndication {
    if (!_cached_decoder_for_BatteryIndication) { _cached_decoder_for_BatteryIndication = $._decodeEnumerated; }
    return _cached_decoder_for_BatteryIndication(el);
}

let _cached_encoder_for_BatteryIndication: $.ASN1Encoder<BatteryIndication> | null = null;

/**
 * @summary Encodes a(n) BatteryIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BatteryIndication, encoded as an ASN.1 Element.
 */
export
function _encode_BatteryIndication (value: BatteryIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BatteryIndication) { _cached_encoder_for_BatteryIndication = $._encodeEnumerated; }
    return _cached_encoder_for_BatteryIndication(value, elGetter);
}


/* eslint-enable */
