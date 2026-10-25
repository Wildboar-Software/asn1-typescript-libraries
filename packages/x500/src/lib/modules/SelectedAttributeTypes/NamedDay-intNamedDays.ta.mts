/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NamedDay_intNamedDays
 * @description
 *
 * ENUMERATED; sunday = 1 … saturday = 7 (off-by-one vs bitNamedDays
 * sunday = 0).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_NamedDay_intNamedDays {
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7,
}

/**
 * @summary NamedDay_intNamedDays
 * @description
 *
 * ENUMERATED; sunday = 1 … saturday = 7 (off-by-one vs bitNamedDays
 * sunday = 0).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;

/**
 * @summary NamedDay_intNamedDays
 * @description
 *
 * ENUMERATED; sunday = 1 … saturday = 7 (off-by-one vs bitNamedDays
 * sunday = 0).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const NamedDay_intNamedDays: typeof _enum_for_NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;

/**
 * @summary NamedDay_intNamedDays_sunday
 * @description
 *
 * INTEGER sunday = 1 (`bitNamedDays` sunday = 0).
 *
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_sunday: _enum_for_NamedDay_intNamedDays.sunday =
    NamedDay_intNamedDays.sunday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @description
 *
 * INTEGER sunday = 1 (`bitNamedDays` sunday = 0).
 *
 * @constant
 * @type {number}
 */
export const sunday: _enum_for_NamedDay_intNamedDays.sunday =
    NamedDay_intNamedDays.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_monday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_monday: _enum_for_NamedDay_intNamedDays.monday =
    NamedDay_intNamedDays.monday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export const monday: _enum_for_NamedDay_intNamedDays.monday =
    NamedDay_intNamedDays.monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_tuesday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_tuesday: _enum_for_NamedDay_intNamedDays.tuesday =
    NamedDay_intNamedDays.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export const tuesday: _enum_for_NamedDay_intNamedDays.tuesday =
    NamedDay_intNamedDays.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_wednesday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_wednesday: _enum_for_NamedDay_intNamedDays.wednesday =
    NamedDay_intNamedDays.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export const wednesday: _enum_for_NamedDay_intNamedDays.wednesday =
    NamedDay_intNamedDays.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_thursday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_thursday: _enum_for_NamedDay_intNamedDays.thursday =
    NamedDay_intNamedDays.thursday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export const thursday: _enum_for_NamedDay_intNamedDays.thursday =
    NamedDay_intNamedDays.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_friday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_friday: _enum_for_NamedDay_intNamedDays.friday =
    NamedDay_intNamedDays.friday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export const friday: _enum_for_NamedDay_intNamedDays.friday =
    NamedDay_intNamedDays.friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_saturday
 * @constant
 * @type {number}
 */
export const NamedDay_intNamedDays_saturday: _enum_for_NamedDay_intNamedDays.saturday =
    NamedDay_intNamedDays.saturday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export const saturday: _enum_for_NamedDay_intNamedDays.saturday =
    NamedDay_intNamedDays.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_NamedDay_intNamedDays(el: _Element): NamedDay_intNamedDays {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case NamedDay_intNamedDays.sunday: return NamedDay_intNamedDays.sunday;
        case NamedDay_intNamedDays.monday: return NamedDay_intNamedDays.monday;
        case NamedDay_intNamedDays.tuesday: return NamedDay_intNamedDays.tuesday;
        case NamedDay_intNamedDays.wednesday: return NamedDay_intNamedDays.wednesday;
        case NamedDay_intNamedDays.thursday: return NamedDay_intNamedDays.thursday;
        case NamedDay_intNamedDays.friday: return NamedDay_intNamedDays.friday;
        case NamedDay_intNamedDays.saturday: return NamedDay_intNamedDays.saturday;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for NamedDay_intNamedDays.",
                el,
            );
    }
}


export const _encode_NamedDay_intNamedDays: $.ASN1Encoder<NamedDay_intNamedDays> = $._encodeEnumerated as $.ASN1Encoder<NamedDay_intNamedDays>;


/* eslint-enable */
