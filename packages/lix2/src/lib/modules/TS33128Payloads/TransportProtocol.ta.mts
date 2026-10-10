/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransportProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TransportProtocol {
    uDP = 1,
    tCP = 2,
}

/**
 * @summary TransportProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TransportProtocol = _enum_for_TransportProtocol;

/**
 * @summary TransportProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TransportProtocol = _enum_for_TransportProtocol;

/**
 * @summary TransportProtocol_uDP
 * @constant
 * @type {number}
 */
export
const TransportProtocol_uDP: TransportProtocol = TransportProtocol.uDP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDP
 * @constant
 * @type {number}
 */
export
const uDP: TransportProtocol = TransportProtocol.uDP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TransportProtocol_tCP
 * @constant
 * @type {number}
 */
export
const TransportProtocol_tCP: TransportProtocol = TransportProtocol.tCP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tCP
 * @constant
 * @type {number}
 */
export
const tCP: TransportProtocol = TransportProtocol.tCP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TransportProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TransportProtocol = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TransportProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransportProtocol, encoded as an ASN.1 Element.
 */
export const _encode_TransportProtocol = $._encodeEnumerated;


/* eslint-enable */
