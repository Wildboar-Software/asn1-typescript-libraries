/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TPDU_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     combined        (3), -- Indicates that combined CC (i.e., from/to-target)delivery is used.
 *     unknown            (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TPDU_direction {
    from_target = 1,
    to_target = 2,
    combined = 3,
    unknown = 4,
}

/**
 * @summary TPDU_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     combined        (3), -- Indicates that combined CC (i.e., from/to-target)delivery is used.
 *     unknown            (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     combined        (3), -- Indicates that combined CC (i.e., from/to-target)delivery is used.
 *     unknown            (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction_from_target
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target: TPDU_direction = TPDU_direction.from_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @constant
 * @type {number}
 */
export
const from_target: TPDU_direction = TPDU_direction.from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target: TPDU_direction = TPDU_direction.to_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @constant
 * @type {number}
 */
export
const to_target: TPDU_direction = TPDU_direction.to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_combined
 * @constant
 * @type {number}
 */
export
const TPDU_direction_combined: TPDU_direction = TPDU_direction.combined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @constant
 * @type {number}
 */
export
const combined: TPDU_direction = TPDU_direction.combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown: TPDU_direction = TPDU_direction.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: TPDU_direction = TPDU_direction.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
