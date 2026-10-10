/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtocolUsedByRemoteUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolUsedByRemoteUE  ::=  ENUMERATED
 * {
 *     noIPInfo(1),
 *     iPv4(2),
 *     iPv6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProtocolUsedByRemoteUE {
    noIPInfo = 1,
    iPv4 = 2,
    iPv6 = 3,
    unstructured = 4,
    ethernet = 5,
}

/**
 * @summary ProtocolUsedByRemoteUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolUsedByRemoteUE  ::=  ENUMERATED
 * {
 *     noIPInfo(1),
 *     iPv4(2),
 *     iPv6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProtocolUsedByRemoteUE = _enum_for_ProtocolUsedByRemoteUE;

/**
 * @summary ProtocolUsedByRemoteUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolUsedByRemoteUE  ::=  ENUMERATED
 * {
 *     noIPInfo(1),
 *     iPv4(2),
 *     iPv6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ProtocolUsedByRemoteUE = _enum_for_ProtocolUsedByRemoteUE;

/**
 * @summary ProtocolUsedByRemoteUE_noIPInfo
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_noIPInfo: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.noIPInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noIPInfo
 * @constant
 * @type {number}
 */
export
const noIPInfo: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.noIPInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_iPv4
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_iPv4: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.iPv4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4
 * @constant
 * @type {number}
 */
export
const iPv4: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.iPv4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_iPv6
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_iPv6: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.iPv6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6
 * @constant
 * @type {number}
 */
export
const iPv6: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.iPv6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_unstructured
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_unstructured: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export
const unstructured: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_ethernet
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_ethernet: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.ethernet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernet
 * @constant
 * @type {number}
 */
export
const ethernet: ProtocolUsedByRemoteUE = ProtocolUsedByRemoteUE.ethernet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolUsedByRemoteUE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ProtocolUsedByRemoteUE = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ProtocolUsedByRemoteUE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolUsedByRemoteUE, encoded as an ASN.1 Element.
 */
export const _encode_ProtocolUsedByRemoteUE = $._encodeEnumerated;


/* eslint-enable */
