/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Direction_Indication {
    mono_mode = 0,
    cc_from_target = 1,
    cc_from_other_party = 2,
    direction_unknown = 3,
}

/**
 * @summary Direction_Indication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Direction-Indication     ::=  ENUMERATED
 * {
 *     mono-mode(0),
 *     cc-from-target(1),
 *     cc-from-other-party(2),
 *     ...,
 *     direction-unknown(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Direction_Indication = _enum_for_Direction_Indication | ENUMERATED;

/**
 * @summary Direction_Indication_mono_mode
 * @constant
 * @type {number}
 */
export
const Direction_Indication_mono_mode: Direction_Indication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mono_mode
 * @constant
 * @type {number}
 */
export
const mono_mode: Direction_Indication = Direction_Indication_mono_mode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_target
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_target: Direction_Indication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_target
 * @constant
 * @type {number}
 */
export
const cc_from_target: Direction_Indication = Direction_Indication_cc_from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_cc_from_other_party
 * @constant
 * @type {number}
 */
export
const Direction_Indication_cc_from_other_party: Direction_Indication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc_from_other_party
 * @constant
 * @type {number}
 */
export
const cc_from_other_party: Direction_Indication = Direction_Indication_cc_from_other_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Direction_Indication_direction_unknown
 * @constant
 * @type {number}
 */
export
const Direction_Indication_direction_unknown: Direction_Indication = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direction_unknown
 * @constant
 * @type {number}
 */
export
const direction_unknown: Direction_Indication = Direction_Indication_direction_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Direction_Indication: $.ASN1Decoder<Direction_Indication> = $._decodeEnumerated;

export const _encode_Direction_Indication: $.ASN1Encoder<Direction_Indication> = $._encodeEnumerated;


/* eslint-enable */
