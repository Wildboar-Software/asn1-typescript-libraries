/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of an intercepted packet. Mandatory in table 10.5.1.1.15 and in
 * table 6.9B. The tables require from-target or to-target. The module also
 * names unknown; the tables do not say when the direction is unknown.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     unknown         (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TPDU_direction {
    from_target = 1,
    to_target = 2,
    unknown = 3,
}

/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of an intercepted packet. Mandatory in table 10.5.1.1.15 and in
 * table 6.9B. The tables require from-target or to-target. The module also
 * names unknown; the tables do not say when the direction is unknown.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     unknown         (3)
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
 * Direction of an intercepted packet. Mandatory in table 10.5.1.1.15 and in
 * table 6.9B. The tables require from-target or to-target. The module also
 * names unknown; the tables do not say when the direction is unknown.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TPDU-direction  ::=  ENUMERATED
 * {
 *     from-target     (1),
 *     to-target         (2),
 *     unknown         (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction_from_target
 * @description
 * 
 * The packet was sent by the target. Mandatory direction is from-target or
 * to-target (table 10.5.1.1.15 and table 6.9B).
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target = TPDU_direction.from_target satisfies TPDU_direction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @description
 * 
 * Packet sent by the target (table 10.5.1.1.15).
 * @constant
 * @type {number}
 */
export
const from_target = TPDU_direction.from_target satisfies TPDU_direction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @description
 * 
 * The packet was sent to the target. Mandatory direction is from-target or
 * to-target (table 10.5.1.1.15 and table 6.9B).
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target = TPDU_direction.to_target satisfies TPDU_direction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @description
 * 
 * Packet sent to the target (table 10.5.1.1.15).
 * @constant
 * @type {number}
 */
export
const to_target = TPDU_direction.to_target satisfies TPDU_direction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @description
 * 
 * Direction is unknown. The module defines this value. Table 10.5.1.1.15 and
 * table 6.9B require from-target or to-target and do not say when the
 * direction is unknown.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown = TPDU_direction.unknown satisfies TPDU_direction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Packet direction unknown. The header tables do not say when to use it.
 * @constant
 * @type {number}
 */
export
const unknown = TPDU_direction.unknown satisfies TPDU_direction; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
