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
 * Direction of a PTC instant personal alert. Mandatory on the
 * instant-personal-alert report (table 17.2.8). 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
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
 * The alert was sent to the PTC target (table 17.2.8).
 * 
 * @constant
 * @type {number}
 */
export
const IPADirection_toTarget: IPADirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @description
 * 
 * Alert sent to the target (clause 17.2.8).
 * 
 * @constant
 * @type {number}
 */
export
const toTarget: IPADirection = IPADirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPADirection_fromTarget
 * @description
 * 
 * The PTC target sent the alert (table 17.2.8).
 * 
 * @constant
 * @type {number}
 */
export
const IPADirection_fromTarget: IPADirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @description
 * 
 * Alert sent by the target (clause 17.2.8).
 * 
 * @constant
 * @type {number}
 */
export
const fromTarget: IPADirection = IPADirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPADirection: $.ASN1Decoder<IPADirection> = $._decodeEnumerated;
export const _encode_IPADirection: $.ASN1Encoder<IPADirection> = $._encodeEnumerated;


/* eslint-enable */
