/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
 * Direction of a GCSE T-PDU. Only from the target, to the target, and unknown
 * are defined. Clause 14.2.7 does not add further direction rules.
 * 
 * 3GPP TS 33.108, annex B.14.2.
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
 *     unknown         (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TPDU_direction = _enum_for_TPDU_direction | ENUMERATED;

/**
 * @summary TPDU_direction_from_target
 * @description
 * 
 * T-PDU from the target. Clause 14.2.7 does not further define this value. 3GPP
 * TS 33.108, annex B.14.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_from_target: TPDU_direction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary from_target
 * @description
 * 
 * T-PDU from the target. Annex B.14.2.
 * @constant
 * @type {number}
 */
export
const from_target: TPDU_direction = TPDU_direction_from_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_to_target
 * @description
 * 
 * T-PDU to the target. Clause 14.2.7 does not further define this value. 3GPP
 * TS 33.108, annex B.14.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_to_target: TPDU_direction = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary to_target
 * @description
 * 
 * T-PDU to the target. Annex B.14.2.
 * @constant
 * @type {number}
 */
export
const to_target: TPDU_direction = TPDU_direction_to_target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TPDU_direction_unknown
 * @description
 * 
 * Direction is unknown. Clause 14.2.7 does not further define this value. 3GPP
 * TS 33.108, annex B.14.2.
 * @constant
 * @type {number}
 */
export
const TPDU_direction_unknown: TPDU_direction = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Direction is unknown. Annex B.14.2.
 * @constant
 * @type {number}
 */
export
const unknown: TPDU_direction = TPDU_direction_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TPDU_direction: $.ASN1Decoder<TPDU_direction> = $._decodeEnumerated;
export const _encode_TPDU_direction: $.ASN1Encoder<TPDU_direction> = $._encodeEnumerated;


/* eslint-enable */
