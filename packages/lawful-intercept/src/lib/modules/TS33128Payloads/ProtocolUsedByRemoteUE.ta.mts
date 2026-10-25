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
const ProtocolUsedByRemoteUE: typeof _enum_for_ProtocolUsedByRemoteUE = _enum_for_ProtocolUsedByRemoteUE;

/**
 * @summary ProtocolUsedByRemoteUE_noIPInfo
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_noIPInfo: _enum_for_ProtocolUsedByRemoteUE.noIPInfo = ProtocolUsedByRemoteUE.noIPInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noIPInfo
 * @constant
 * @type {number}
 */
export
const noIPInfo: _enum_for_ProtocolUsedByRemoteUE.noIPInfo = ProtocolUsedByRemoteUE.noIPInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_iPv4
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_iPv4: _enum_for_ProtocolUsedByRemoteUE.iPv4 = ProtocolUsedByRemoteUE.iPv4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4
 * @constant
 * @type {number}
 */
export
const iPv4: _enum_for_ProtocolUsedByRemoteUE.iPv4 = ProtocolUsedByRemoteUE.iPv4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_iPv6
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_iPv6: _enum_for_ProtocolUsedByRemoteUE.iPv6 = ProtocolUsedByRemoteUE.iPv6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6
 * @constant
 * @type {number}
 */
export
const iPv6: _enum_for_ProtocolUsedByRemoteUE.iPv6 = ProtocolUsedByRemoteUE.iPv6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_unstructured
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_unstructured: _enum_for_ProtocolUsedByRemoteUE.unstructured = ProtocolUsedByRemoteUE.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export
const unstructured: _enum_for_ProtocolUsedByRemoteUE.unstructured = ProtocolUsedByRemoteUE.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolUsedByRemoteUE_ethernet
 * @constant
 * @type {number}
 */
export
const ProtocolUsedByRemoteUE_ethernet: _enum_for_ProtocolUsedByRemoteUE.ethernet = ProtocolUsedByRemoteUE.ethernet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernet
 * @constant
 * @type {number}
 */
export
const ethernet: _enum_for_ProtocolUsedByRemoteUE.ethernet = ProtocolUsedByRemoteUE.ethernet; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ProtocolUsedByRemoteUE: $.ASN1Decoder<ProtocolUsedByRemoteUE> = $._decodeEnumerated;
export const _encode_ProtocolUsedByRemoteUE: $.ASN1Encoder<ProtocolUsedByRemoteUE> = $._encodeEnumerated;


/* eslint-enable */
