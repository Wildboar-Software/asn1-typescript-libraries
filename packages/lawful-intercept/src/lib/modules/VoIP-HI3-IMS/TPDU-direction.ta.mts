/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of a VoIP T-PDU. Clause 5.7.3 reuses these four values for IP-based
 * CS voice (from the target, to the target, combined, unknown).
 * 
 * 3GPP TS 33.108, annex K.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * Direction of a VoIP T-PDU. Clause 5.7.3 reuses these four values for IP-based
 * CS voice (from the target, to the target, combined, unknown).
 * 
 * 3GPP TS 33.108, annex K.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * Direction of a VoIP T-PDU. Clause 5.7.3 reuses these four values for IP-based
 * CS voice (from the target, to the target, combined, unknown).
 * 
 * 3GPP TS 33.108, annex K.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
const TPDU_direction: typeof _enum_for_TPDU_direction = _enum_for_TPDU_direction;

/**
 * @summary TPDU_direction_from_target
 * @description
 * 
 * VoIP CC PDU coming from the target. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target: _enum_for_TPDU_direction.from_target = TPDU_direction.from_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @description
 * 
 * CC coming from the target. Annex K.2.
 * @constant
 * @type {number}
 */
export
const from_target: _enum_for_TPDU_direction.from_target = TPDU_direction.from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @description
 * 
 * VoIP CC PDU sent to the target. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target: _enum_for_TPDU_direction.to_target = TPDU_direction.to_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @description
 * 
 * CC sent to the target. Annex K.2.
 * @constant
 * @type {number}
 */
export
const to_target: _enum_for_TPDU_direction.to_target = TPDU_direction.to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_combined
 * @description
 * 
 * VoIP CC PDU includes both from the target and to the target. 3GPP TS 33.108,
 * annex K.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_combined: _enum_for_TPDU_direction.combined = TPDU_direction.combined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @description
 * 
 * Combined from-target and to-target CC. Annex K.2.
 * @constant
 * @type {number}
 */
export
const combined: _enum_for_TPDU_direction.combined = TPDU_direction.combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @description
 * 
 * Direction of the VoIP CC PDU cannot be determined. 3GPP TS 33.108, annex K.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown: _enum_for_TPDU_direction.unknown = TPDU_direction.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Direction cannot be determined. Annex K.2.
 * @constant
 * @type {number}
 */
export
const unknown: _enum_for_TPDU_direction.unknown = TPDU_direction.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
