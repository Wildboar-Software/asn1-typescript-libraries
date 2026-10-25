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
const DnProtocol: typeof _enum_for_DnProtocol = _enum_for_DnProtocol;

/**
 * @summary DnProtocol_dnsQname
 * @constant
 * @type {number}
 */
export
const DnProtocol_dnsQname: _enum_for_DnProtocol.dnsQname = DnProtocol.dnsQname; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dnsQname
 * @constant
 * @type {number}
 */
export
const dnsQname: _enum_for_DnProtocol.dnsQname = DnProtocol.dnsQname; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSni
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSni: _enum_for_DnProtocol.tlsSni = DnProtocol.tlsSni; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSni
 * @constant
 * @type {number}
 */
export
const tlsSni: _enum_for_DnProtocol.tlsSni = DnProtocol.tlsSni; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSan
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSan: _enum_for_DnProtocol.tlsSan = DnProtocol.tlsSan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSan
 * @constant
 * @type {number}
 */
export
const tlsSan: _enum_for_DnProtocol.tlsSan = DnProtocol.tlsSan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsScn
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsScn: _enum_for_DnProtocol.tlsScn = DnProtocol.tlsScn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsScn
 * @constant
 * @type {number}
 */
export
const tlsScn: _enum_for_DnProtocol.tlsScn = DnProtocol.tlsScn; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DnProtocol: $.ASN1Decoder<DnProtocol> = $._decodeEnumerated;
export const _encode_DnProtocol: $.ASN1Encoder<DnProtocol> = $._encodeEnumerated;


/* eslint-enable */
