/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BatteryIndication
 * @description
 * 
 * Identifies power consumption criticality for the UE, if available: if the UE
 * is battery powered but the battery is not rechargeable/not replaceable,
 * battery powered withrechargeable/replaceable battery, or not battery powered.
 * See TS 38.413 [23] clause 9.3.1.144. Encoded according to TS 29.571 [17]
 * clause 5.4.4.43. The SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/BatteryIndication'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies power consumption criticality for the UE, if available: if the UE
 * is battery powered but the battery is not rechargeable/not replaceable,
 * battery powered withrechargeable/replaceable battery, or not battery powered.
 * See TS 38.413 [23] clause 9.3.1.144. Encoded according to TS 29.571 [17]
 * clause 5.4.4.43. The SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/BatteryIndication'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies power consumption criticality for the UE, if available: if the UE
 * is battery powered but the battery is not rechargeable/not replaceable,
 * battery powered withrechargeable/replaceable battery, or not battery powered.
 * See TS 38.413 [23] clause 9.3.1.144. Encoded according to TS 29.571 [17]
 * clause 5.4.4.43. The SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/BatteryIndication'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const BatteryIndication: typeof _enum_for_BatteryIndication = _enum_for_BatteryIndication;

/**
 * @summary BatteryIndication_batteryRecharge
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryRecharge: _enum_for_BatteryIndication.batteryRecharge = BatteryIndication.batteryRecharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryRecharge
 * @constant
 * @type {number}
 */
export
const batteryRecharge: _enum_for_BatteryIndication.batteryRecharge = BatteryIndication.batteryRecharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_batteryReplace
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryReplace: _enum_for_BatteryIndication.batteryReplace = BatteryIndication.batteryReplace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryReplace
 * @constant
 * @type {number}
 */
export
const batteryReplace: _enum_for_BatteryIndication.batteryReplace = BatteryIndication.batteryReplace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_batteryNoRecharge
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryNoRecharge: _enum_for_BatteryIndication.batteryNoRecharge = BatteryIndication.batteryNoRecharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryNoRecharge
 * @constant
 * @type {number}
 */
export
const batteryNoRecharge: _enum_for_BatteryIndication.batteryNoRecharge = BatteryIndication.batteryNoRecharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_batteryNoReplace
 * @constant
 * @type {number}
 */
export
const BatteryIndication_batteryNoReplace: _enum_for_BatteryIndication.batteryNoReplace = BatteryIndication.batteryNoReplace; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary batteryNoReplace
 * @constant
 * @type {number}
 */
export
const batteryNoReplace: _enum_for_BatteryIndication.batteryNoReplace = BatteryIndication.batteryNoReplace; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BatteryIndication_noBattery
 * @constant
 * @type {number}
 */
export
const BatteryIndication_noBattery: _enum_for_BatteryIndication.noBattery = BatteryIndication.noBattery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noBattery
 * @constant
 * @type {number}
 */
export
const noBattery: _enum_for_BatteryIndication.noBattery = BatteryIndication.noBattery; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_BatteryIndication: $.ASN1Decoder<BatteryIndication> = $._decodeEnumerated;
export const _encode_BatteryIndication: $.ASN1Encoder<BatteryIndication> = $._encodeEnumerated;


/* eslint-enable */
