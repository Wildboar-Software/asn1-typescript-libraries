/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of an intercepted packet: from the target, to the target, or
 * unknown. Table 6.9B requires the direction on per-packet header IRI and
 * describes it as from the target or to the target. Annex B.3 also names
 * unknown; the stage 2 tables do not say when that value is used.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1, table 6.2 and table 6.9B; annex B.3.
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
 * Direction of an intercepted packet: from the target, to the target, or
 * unknown. Table 6.9B requires the direction on per-packet header IRI and
 * describes it as from the target or to the target. Annex B.3 also names
 * unknown; the stage 2 tables do not say when that value is used.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1, table 6.2 and table 6.9B; annex B.3.
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
 * The intercepted packet was sent by the target. Required on per-packet header
 * IRI. 3GPP TS 33.108, clause 6.5.1.1, table 6.9B.
 * 
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target = TPDU_direction.from_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @description
 * 
 * Packet sent by the target (3GPP TS 33.108, table 6.9B).
 * 
 * @constant
 * @type {number}
 */
export
const from_target = TPDU_direction.from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @description
 * 
 * The intercepted packet was sent to the target. Required on per-packet header
 * IRI. 3GPP TS 33.108, clause 6.5.1.1, table 6.9B.
 * 
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target = TPDU_direction.to_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @description
 * 
 * Packet sent to the target (3GPP TS 33.108, table 6.9B).
 * 
 * @constant
 * @type {number}
 */
export
const to_target = TPDU_direction.to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @description
 * 
 * Direction of the intercepted packet is unknown. Annex B.3 names this value.
 * Table 6.9B requires a direction and describes it as from the target or to the
 * target, and does not say when unknown is used. 3GPP TS 33.108, annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown = TPDU_direction.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Packet direction is unknown; stage 2 does not define when (3GPP TS 33.108,
 * annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const unknown = TPDU_direction.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
