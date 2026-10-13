/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PayloadDirection {
    fromTarget = 0,
    toTarget = 1,
    indeterminate = 2,
    combined = 3,
    notapplicable = 4,
}

/**
 * @summary PayloadDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadDirection  ::=  ENUMERATED
 * {
 *     fromTarget(0),
 *     toTarget(1),
 *     ...,
 *     indeterminate(2),
 *         -- Indication that the direction was indeterminate
 *     combined(3),
 *         -- Indication applicable to some services that the traffic is actually a combination
 *         -- of To and From
 *     notapplicable(4)
 *         -- Indication that direction of interceptable service does not make sense
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PayloadDirection = _enum_for_PayloadDirection | ENUMERATED;

/**
 * @summary PayloadDirection_fromTarget
 * @constant
 * @type {number}
 */
export
const PayloadDirection_fromTarget: PayloadDirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: PayloadDirection = PayloadDirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_toTarget
 * @constant
 * @type {number}
 */
export
const PayloadDirection_toTarget: PayloadDirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: PayloadDirection = PayloadDirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_indeterminate
 * @constant
 * @type {number}
 */
export
const PayloadDirection_indeterminate: PayloadDirection = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: PayloadDirection = PayloadDirection_indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_combined
 * @constant
 * @type {number}
 */
export
const PayloadDirection_combined: PayloadDirection = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @constant
 * @type {number}
 */
export
const combined: PayloadDirection = PayloadDirection_combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PayloadDirection_notapplicable
 * @constant
 * @type {number}
 */
export
const PayloadDirection_notapplicable: PayloadDirection = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notapplicable
 * @constant
 * @type {number}
 */
export
const notapplicable: PayloadDirection = PayloadDirection_notapplicable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PayloadDirection: $.ASN1Decoder<PayloadDirection> = $._decodeEnumerated;
export const _encode_PayloadDirection: $.ASN1Encoder<PayloadDirection> = $._encodeEnumerated;


/* eslint-enable */
