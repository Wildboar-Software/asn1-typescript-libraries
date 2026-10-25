/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPADirection {
    toTarget = 0,
    fromTarget = 1,
}

/**
 * @summary IPADirection
 * @description
 * 
 * Direction of an Instant Personal Alert: toward the PTC target, or from the
 * PTC target. Mandatory on the IPA report.
 * 
 * 3GPP TS 33.108, table 17.2.8.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPADirection             ::=  ENUMERATED
 * {
 *     toTarget        (0),
 *     fromTarget        (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPADirection = _enum_for_IPADirection | ENUMERATED;

/**
 * @summary IPADirection_toTarget
 * @description
 * 
 * The Instant Personal Alert is toward the PTC target.
 * 
 * 3GPP TS 33.108, table 17.2.8.
 * @constant
 * @type {number}
 */
export
const IPADirection_toTarget = _enum_for_IPADirection.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @description
 * 
 * Instant Personal Alert toward the PTC target (table 17.2.8).
 * @constant
 * @type {number}
 */
export
const toTarget = IPADirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPADirection_fromTarget
 * @description
 * 
 * The Instant Personal Alert is from the PTC target.
 * 
 * 3GPP TS 33.108, table 17.2.8.
 * @constant
 * @type {number}
 */
export
const IPADirection_fromTarget = _enum_for_IPADirection.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @description
 * 
 * Instant Personal Alert from the PTC target (table 17.2.8).
 * @constant
 * @type {number}
 */
export
const fromTarget = IPADirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPADirection: $.ASN1Decoder<IPADirection> = $._decodeEnumerated;
export const _encode_IPADirection: $.ASN1Encoder<IPADirection> = $._encodeEnumerated;


/* eslint-enable */
