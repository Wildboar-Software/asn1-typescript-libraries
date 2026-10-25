/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNConnectionType
 * @description
 * 
 * Identifies selected PDN session type, see TS 29.274 [87] clause 8.34.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     nonIP(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDNConnectionType {
    iPv4 = 1,
    iPv6 = 2,
    iPv4v6 = 3,
    nonIP = 4,
    ethernet = 5,
}

/**
 * @summary PDNConnectionType
 * @description
 * 
 * Identifies selected PDN session type, see TS 29.274 [87] clause 8.34.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     nonIP(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDNConnectionType = _enum_for_PDNConnectionType;

/**
 * @summary PDNConnectionType
 * @description
 * 
 * Identifies selected PDN session type, see TS 29.274 [87] clause 8.34.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     nonIP(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PDNConnectionType = _enum_for_PDNConnectionType;

/**
 * @summary PDNConnectionType_iPv4
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_iPv4 = PDNConnectionType.iPv4 satisfies PDNConnectionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4
 * @constant
 * @type {number}
 */
export
const iPv4 = PDNConnectionType.iPv4 satisfies PDNConnectionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_iPv6
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_iPv6 = PDNConnectionType.iPv6 satisfies PDNConnectionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6
 * @constant
 * @type {number}
 */
export
const iPv6 = PDNConnectionType.iPv6 satisfies PDNConnectionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_iPv4v6
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_iPv4v6 = PDNConnectionType.iPv4v6 satisfies PDNConnectionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4v6
 * @constant
 * @type {number}
 */
export
const iPv4v6 = PDNConnectionType.iPv4v6 satisfies PDNConnectionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_nonIP
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_nonIP = PDNConnectionType.nonIP satisfies PDNConnectionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonIP
 * @constant
 * @type {number}
 */
export
const nonIP = PDNConnectionType.nonIP satisfies PDNConnectionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_ethernet
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_ethernet = PDNConnectionType.ethernet satisfies PDNConnectionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernet
 * @constant
 * @type {number}
 */
export
const ethernet = PDNConnectionType.ethernet satisfies PDNConnectionType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PDNConnectionType: $.ASN1Decoder<PDNConnectionType> = $._decodeEnumerated;
export const _encode_PDNConnectionType: $.ASN1Encoder<PDNConnectionType> = $._encodeEnumerated;


/* eslint-enable */
