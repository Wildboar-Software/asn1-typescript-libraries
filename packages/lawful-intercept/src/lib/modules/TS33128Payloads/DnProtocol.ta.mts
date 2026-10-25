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
const DnProtocol_dnsQname = DnProtocol.dnsQname; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dnsQname
 * @constant
 * @type {number}
 */
export
const dnsQname = DnProtocol.dnsQname; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSni
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSni = DnProtocol.tlsSni; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSni
 * @constant
 * @type {number}
 */
export
const tlsSni = DnProtocol.tlsSni; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSan
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSan = DnProtocol.tlsSan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSan
 * @constant
 * @type {number}
 */
export
const tlsSan = DnProtocol.tlsSan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsScn
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsScn = DnProtocol.tlsScn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsScn
 * @constant
 * @type {number}
 */
export
const tlsScn = DnProtocol.tlsScn; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DnProtocol: $.ASN1Decoder<DnProtocol> = $._decodeEnumerated;
export const _encode_DnProtocol: $.ASN1Encoder<DnProtocol> = $._encodeEnumerated;


/* eslint-enable */
