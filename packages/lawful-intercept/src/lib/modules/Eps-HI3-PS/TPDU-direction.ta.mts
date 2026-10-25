/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of an EPS T-PDU. Annex C.1.3 states from the target and to the
 * target. `unknown` is defined in the module and is not given further text
 * there. ULIC version 0 is not specified for EPS (annex C.0).
 * 
 * 3GPP TS 33.108, annex C.1.3.
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
 * Direction of an EPS T-PDU. Annex C.1.3 states from the target and to the
 * target. `unknown` is defined in the module and is not given further text
 * there. ULIC version 0 is not specified for EPS (annex C.0).
 * 
 * 3GPP TS 33.108, annex C.1.3.
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
 * Direction of an EPS T-PDU. Annex C.1.3 states from the target and to the
 * target. `unknown` is defined in the module and is not given further text
 * there. ULIC version 0 is not specified for EPS (annex C.0).
 * 
 * 3GPP TS 33.108, annex C.1.3.
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
 * T-PDU from the target. 3GPP TS 33.108, annex C.1.3.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target = TPDU_direction.from_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @description
 * 
 * T-PDU from the target. Annex C.1.3.
 * @constant
 * @type {number}
 */
export
const from_target = TPDU_direction.from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @description
 * 
 * T-PDU to the target. 3GPP TS 33.108, annex C.1.3.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target = TPDU_direction.to_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @description
 * 
 * T-PDU to the target. Annex C.1.3.
 * @constant
 * @type {number}
 */
export
const to_target = TPDU_direction.to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @description
 * 
 * Direction unknown. Annex C.1.3 does not further define this value. 3GPP TS
 * 33.108, annex B.10.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown = TPDU_direction.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Direction unknown. Annex C does not define it further.
 * @constant
 * @type {number}
 */
export
const unknown = TPDU_direction.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
