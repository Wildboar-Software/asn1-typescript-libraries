/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DnProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DnProtocol  ::=  ENUMERATED
 * {
 *     dnsQname(1),
 *     tlsSni(2),
 *     tlsSan(3),
 *     tlsScn(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DnProtocol {
    dnsQname = 1,
    tlsSni = 2,
    tlsSan = 3,
    tlsScn = 4,
}

/**
 * @summary DnProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DnProtocol  ::=  ENUMERATED
 * {
 *     dnsQname(1),
 *     tlsSni(2),
 *     tlsSan(3),
 *     tlsScn(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DnProtocol = _enum_for_DnProtocol;

/**
 * @summary DnProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DnProtocol  ::=  ENUMERATED
 * {
 *     dnsQname(1),
 *     tlsSni(2),
 *     tlsSan(3),
 *     tlsScn(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DnProtocol = _enum_for_DnProtocol;

/**
 * @summary DnProtocol_dnsQname
 * @constant
 * @type {number}
 */
export
const DnProtocol_dnsQname: DnProtocol = DnProtocol.dnsQname; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dnsQname
 * @constant
 * @type {number}
 */
export
const dnsQname: DnProtocol = DnProtocol.dnsQname; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSni
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSni: DnProtocol = DnProtocol.tlsSni; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSni
 * @constant
 * @type {number}
 */
export
const tlsSni: DnProtocol = DnProtocol.tlsSni; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSan
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSan: DnProtocol = DnProtocol.tlsSan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSan
 * @constant
 * @type {number}
 */
export
const tlsSan: DnProtocol = DnProtocol.tlsSan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsScn
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsScn: DnProtocol = DnProtocol.tlsScn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsScn
 * @constant
 * @type {number}
 */
export
const tlsScn: DnProtocol = DnProtocol.tlsScn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DnProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DnProtocol = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DnProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DnProtocol, encoded as an ASN.1 Element.
 */
export const _encode_DnProtocol = $._encodeEnumerated;


/* eslint-enable */
