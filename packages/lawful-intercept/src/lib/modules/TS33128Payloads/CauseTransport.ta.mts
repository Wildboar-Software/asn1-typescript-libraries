/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseTransport  ::=  ENUMERATED
 * {
 *     transportResourceUnavailable(1),
 *     unspecified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseTransport {
    transportResourceUnavailable = 1,
    unspecified = 2,
}

/**
 * @summary CauseTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseTransport  ::=  ENUMERATED
 * {
 *     transportResourceUnavailable(1),
 *     unspecified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseTransport = _enum_for_CauseTransport;

/**
 * @summary CauseTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseTransport  ::=  ENUMERATED
 * {
 *     transportResourceUnavailable(1),
 *     unspecified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseTransport = _enum_for_CauseTransport;

/**
 * @summary CauseTransport_transportResourceUnavailable
 * @constant
 * @type {number}
 */
export
const CauseTransport_transportResourceUnavailable = CauseTransport.transportResourceUnavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transportResourceUnavailable
 * @constant
 * @type {number}
 */
export
const transportResourceUnavailable = CauseTransport.transportResourceUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseTransport_unspecified
 * @constant
 * @type {number}
 */
export
const CauseTransport_unspecified = CauseTransport.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified = CauseTransport.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CauseTransport: $.ASN1Decoder<CauseTransport> = $._decodeEnumerated;
export const _encode_CauseTransport: $.ASN1Encoder<CauseTransport> = $._encodeEnumerated;


/* eslint-enable */
