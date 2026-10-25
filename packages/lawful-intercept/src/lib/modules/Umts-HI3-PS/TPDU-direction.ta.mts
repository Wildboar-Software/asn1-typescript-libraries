/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TPDU_direction
 * @description
 * 
 * Direction of a version-1 T-PDU. Annex C.1.3 states from the target and to the
 * target. `unknown` is defined in the module and is not given further text
 * there. Version 0 encodes direction as a DIR bit, not as these values (annex
 * C.1.2).
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
 * Direction of a version-1 T-PDU. Annex C.1.3 states from the target and to the
 * target. `unknown` is defined in the module and is not given further text
 * there. Version 0 encodes direction as a DIR bit, not as these values (annex
 * C.1.2).
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
 * Direction of a version-1 T-PDU. Annex C.1.3 states from the target and to the
 * target. `unknown` is defined in the module and is not given further text
 * there. Version 0 encodes direction as a DIR bit, not as these values (annex
 * C.1.2).
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
 * T-PDU from the target. Version 0 DIR value 1 is uplink, from the observed
 * mobile user. 3GPP TS 33.108, annex C.1.3 and annex C.1.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target = TPDU_direction.from_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @description
 * 
 * T-PDU from the target (uplink). Annex C.1.3.
 * @constant
 * @type {number}
 */
export
const from_target = TPDU_direction.from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @description
 * 
 * T-PDU to the target. Version 0 DIR value 0 is downlink, to the observed
 * mobile user. 3GPP TS 33.108, annex C.1.3 and annex C.1.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target = TPDU_direction.to_target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @description
 * 
 * T-PDU to the target (downlink). Annex C.1.3.
 * @constant
 * @type {number}
 */
export
const to_target = TPDU_direction.to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @description
 * 
 * Direction unknown. Defined for version 1; annex C.1.3 does not further define
 * it. Version 0 has no unknown DIR code. 3GPP TS 33.108, annex B.4.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown = TPDU_direction.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Direction unknown on version 1. Annex C does not define it further.
 * @constant
 * @type {number}
 */
export
const unknown = TPDU_direction.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
