/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPVersion {
    iPV4 = 1,
    iPV6 = 2,
    iPV4andV6 = 3,
}

/**
 * @summary IPVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPVersion  ::=  ENUMERATED
 * {
 *     iPV4(1),
 *         -- The IPv4 protocol is used
 *     iPV6(2),
 *         -- The IPv6 protocol is used
 *     iPV4andV6(3),
 *         -- The IPv4 and IPv6 protocols are used
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPVersion = _enum_for_IPVersion | ENUMERATED;

/**
 * @summary IPVersion_iPV4
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV4: IPVersion = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4
 * @constant
 * @type {number}
 */
export
const iPV4: IPVersion = IPVersion_iPV4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPVersion_iPV6
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV6: IPVersion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV6
 * @constant
 * @type {number}
 */
export
const iPV6: IPVersion = IPVersion_iPV6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPVersion_iPV4andV6
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV4andV6: IPVersion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4andV6
 * @constant
 * @type {number}
 */
export
const iPV4andV6: IPVersion = IPVersion_iPV4andV6; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPVersion: $.ASN1Decoder<IPVersion> = $._decodeEnumerated;
export const _encode_IPVersion: $.ASN1Encoder<IPVersion> = $._encodeEnumerated;


/* eslint-enable */
