/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NamedDay_intNamedDays
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED {
 *   sunday     (1),
 *   monday     (2),
 *   tuesday    (3),
 *   wednesday  (4),
 *   thursday   (5),
 *   friday     (6),
 *   saturday   (7) }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_NamedDay_intNamedDays: {
    readonly sunday: 1;
    readonly monday: 2;
    readonly tuesday: 3;
    readonly wednesday: 4;
    readonly thursday: 5;
    readonly friday: 6;
    readonly saturday: 7;
} = {
    sunday: 1,
    monday: 2,
    tuesday: 3,
    wednesday: 4,
    thursday: 5,
    friday: 6,
    saturday: 7,
};

export
type _enum_for_NamedDay_intNamedDays = ENUMERATED;

/**
 * @summary NamedDay_intNamedDays
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED {
 *   sunday     (1),
 *   monday     (2),
 *   tuesday    (3),
 *   wednesday  (4),
 *   thursday   (5),
 *   friday     (6),
 *   saturday   (7) }
 * ```
 * 
 * @enum {number}
 */
export
type NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;

/**
 * @summary NamedDay_intNamedDays
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay-intNamedDays ::= ENUMERATED {
 *   sunday     (1),
 *   monday     (2),
 *   tuesday    (3),
 *   wednesday  (4),
 *   thursday   (5),
 *   friday     (6),
 *   saturday   (7) }
 * ```
 * 
 * @enum {number}
 */
export
const NamedDay_intNamedDays: typeof _enum_for_NamedDay_intNamedDays = _enum_for_NamedDay_intNamedDays;

/**
 * @summary NamedDay_intNamedDays_sunday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_sunday: number = NamedDay_intNamedDays.sunday satisfies NamedDay_intNamedDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday: number = NamedDay_intNamedDays_sunday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_monday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_monday: number = NamedDay_intNamedDays.monday satisfies NamedDay_intNamedDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday: number = NamedDay_intNamedDays_monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_tuesday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_tuesday: number = NamedDay_intNamedDays.tuesday satisfies NamedDay_intNamedDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday: number = NamedDay_intNamedDays_tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_wednesday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_wednesday: number = NamedDay_intNamedDays.wednesday satisfies NamedDay_intNamedDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday: number = NamedDay_intNamedDays_wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_thursday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_thursday: number = NamedDay_intNamedDays.thursday satisfies NamedDay_intNamedDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday: number = NamedDay_intNamedDays_thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_friday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_friday: number = NamedDay_intNamedDays.friday satisfies NamedDay_intNamedDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday: number = NamedDay_intNamedDays_friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NamedDay_intNamedDays_saturday
 * @constant
 * @type {number}
 */
export
const NamedDay_intNamedDays_saturday: number = NamedDay_intNamedDays.saturday satisfies NamedDay_intNamedDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday: number = NamedDay_intNamedDays_saturday; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_NamedDay_intNamedDays: $.ASN1Decoder<NamedDay_intNamedDays> = $._decodeEnumerated;

export
const _encode_NamedDay_intNamedDays: $.ASN1Encoder<NamedDay_intNamedDays> = $._encodeEnumerated;

/* eslint-enable */
