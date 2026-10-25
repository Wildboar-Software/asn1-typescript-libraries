/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VerticalDirection
 * @description
 * 
 * The VerticalDirection represents the direction (upward/downward) of the
 * vertical speed, the VerticalDirection is derived from the data present in the
 * VerticalDirection type defined in TS 29.572 [24] clause 6.1.6.3.13.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.56.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalDirection  ::=  ENUMERATED
 * {
 *     upward(1),
 *     downward(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VerticalDirection {
    /**
     * @description
     *
     * Vertical speed is upward.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.56.
     */
    upward = 1,
    /**
     * @description
     *
     * Vertical speed is downward.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.56.
     */
    downward = 2,
}

/**
 * @summary VerticalDirection
 * @description
 * 
 * The VerticalDirection represents the direction (upward/downward) of the
 * vertical speed, the VerticalDirection is derived from the data present in the
 * VerticalDirection type defined in TS 29.572 [24] clause 6.1.6.3.13.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.56.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalDirection  ::=  ENUMERATED
 * {
 *     upward(1),
 *     downward(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VerticalDirection = _enum_for_VerticalDirection;

/**
 * @summary VerticalDirection
 * @description
 * 
 * The VerticalDirection represents the direction (upward/downward) of the
 * vertical speed, the VerticalDirection is derived from the data present in the
 * VerticalDirection type defined in TS 29.572 [24] clause 6.1.6.3.13.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.56.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalDirection  ::=  ENUMERATED
 * {
 *     upward(1),
 *     downward(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VerticalDirection = _enum_for_VerticalDirection;

/**
 * @summary VerticalDirection_upward
 * @description
 *
 * Vertical speed is upward.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.56.
 *
 * @constant
 * @type {number}
 */
export
const VerticalDirection_upward = VerticalDirection.upward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary upward
 * @description
 *
 * Vertical speed is upward.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.56.
 *
 * @constant
 * @type {number}
 */
export
const upward = VerticalDirection.upward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VerticalDirection_downward
 * @description
 *
 * Vertical speed is downward.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.56.
 *
 * @constant
 * @type {number}
 */
export
const VerticalDirection_downward = VerticalDirection.downward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downward
 * @description
 *
 * Vertical speed is downward.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.56.
 *
 * @constant
 * @type {number}
 */
export
const downward = VerticalDirection.downward; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_VerticalDirection: $.ASN1Decoder<VerticalDirection> = $._decodeEnumerated;
export const _encode_VerticalDirection: $.ASN1Encoder<VerticalDirection> = $._encodeEnumerated;


/* eslint-enable */
