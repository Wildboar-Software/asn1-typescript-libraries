/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const CauseTransport_transportResourceUnavailable: CauseTransport = CauseTransport.transportResourceUnavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transportResourceUnavailable
 * @constant
 * @type {number}
 */
export
const transportResourceUnavailable: CauseTransport = CauseTransport.transportResourceUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseTransport_unspecified
 * @constant
 * @type {number}
 */
export
const CauseTransport_unspecified: CauseTransport = CauseTransport.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseTransport = CauseTransport.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CauseTransport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CauseTransport = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CauseTransport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseTransport, encoded as an ASN.1 Element.
 */
export const _encode_CauseTransport = $._encodeEnumerated;


/* eslint-enable */
