/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamerInOut
 * @description
 * 
 * Derived from the roamerInOut field of the service specific charging
 * information UserInformation field. Shall be included when contained in the
 * UserInformation, (see TS 32.291 [148] clause 6.1.6.3.16).
 *
 * 3GPP TS 33.128, clause 7.19.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoamerInOut {
    in_bound = 1,
    out_bound = 2,
}

/**
 * @summary RoamerInOut
 * @description
 * 
 * Derived from the roamerInOut field of the service specific charging
 * information UserInformation field. Shall be included when contained in the
 * UserInformation, (see TS 32.291 [148] clause 6.1.6.3.16).
 *
 * 3GPP TS 33.128, clause 7.19.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut
 * @description
 * 
 * Derived from the roamerInOut field of the service specific charging
 * information UserInformation field. Shall be included when contained in the
 * UserInformation, (see TS 32.291 [148] clause 6.1.6.3.16).
 *
 * 3GPP TS 33.128, clause 7.19.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED
 * {
 *     in-bound(1),
 *     out-bound(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut_in_bound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_in_bound: RoamerInOut = RoamerInOut.in_bound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary in_bound
 * @constant
 * @type {number}
 */
export
const in_bound: RoamerInOut = RoamerInOut.in_bound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoamerInOut_out_bound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_out_bound: RoamerInOut = RoamerInOut.out_bound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary out_bound
 * @constant
 * @type {number}
 */
export
const out_bound: RoamerInOut = RoamerInOut.out_bound; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RoamerInOut: $.ASN1Decoder<RoamerInOut> = $._decodeEnumerated;
export const _encode_RoamerInOut: $.ASN1Encoder<RoamerInOut> = $._encodeEnumerated;


/* eslint-enable */
