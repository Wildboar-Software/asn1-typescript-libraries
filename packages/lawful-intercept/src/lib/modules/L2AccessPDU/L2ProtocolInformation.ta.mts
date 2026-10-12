/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_L2ProtocolInformation {
    l2ProtocolL2tp = 1,
    l2ProtocolL2f = 2,
    l2ProtocolPptp = 3,
    l2ProtocolPpp = 4,
    ethernetProtocol = 5,
    undefined = 6,
    l2ProtocolATM2684 = 7,
    l2ProtocolFR2427 = 8,
}

/**
 * @summary L2ProtocolInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2ProtocolInformation ::= ENUMERATED
 * {
 *     l2ProtocolL2tp(1),
 *         -- The L2TP protocol is used
 *     l2ProtocolL2f(2),
 *         -- The L2F protocol is used
 *     l2ProtocolPptp(3),
 *         -- The PPTP protocol is used
 *     l2ProtocolPpp(4),
 *         -- The PPP protocol is used
 *     ethernetProtocol(5),
 *         -- The ethernet protocol is used
 *     undefined(6),
 *     ...,
 *     l2ProtocolATM2684(7),
 *         -- The protocol RFC 2684, method "LLC Encapsulation for Bridged Protocols" [16] is used
 *     l2ProtocolFR2427(8)
 *         -- The protocol RFC2427 "Multiprotocol Interconnect over Frame Relay" [18] is used
 * }
 * ```
 * 
 * @enum {number}
 */
export
type L2ProtocolInformation = _enum_for_L2ProtocolInformation | ENUMERATED;

/**
 * @summary L2ProtocolInformation_l2ProtocolL2tp
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolL2tp: L2ProtocolInformation = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolL2tp
 * @constant
 * @type {number}
 */
export
const l2ProtocolL2tp: L2ProtocolInformation = L2ProtocolInformation_l2ProtocolL2tp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolL2f
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolL2f: L2ProtocolInformation = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolL2f
 * @constant
 * @type {number}
 */
export
const l2ProtocolL2f: L2ProtocolInformation = L2ProtocolInformation_l2ProtocolL2f; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolPptp
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolPptp: L2ProtocolInformation = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolPptp
 * @constant
 * @type {number}
 */
export
const l2ProtocolPptp: L2ProtocolInformation = L2ProtocolInformation_l2ProtocolPptp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolPpp
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolPpp: L2ProtocolInformation = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolPpp
 * @constant
 * @type {number}
 */
export
const l2ProtocolPpp: L2ProtocolInformation = L2ProtocolInformation_l2ProtocolPpp; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_ethernetProtocol
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_ethernetProtocol: L2ProtocolInformation = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernetProtocol
 * @constant
 * @type {number}
 */
export
const ethernetProtocol: L2ProtocolInformation = L2ProtocolInformation_ethernetProtocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_undefined
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_undefined: L2ProtocolInformation = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: L2ProtocolInformation = L2ProtocolInformation_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolATM2684
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolATM2684: L2ProtocolInformation = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolATM2684
 * @constant
 * @type {number}
 */
export
const l2ProtocolATM2684: L2ProtocolInformation = L2ProtocolInformation_l2ProtocolATM2684; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolFR2427
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolFR2427: L2ProtocolInformation = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolFR2427
 * @constant
 * @type {number}
 */
export
const l2ProtocolFR2427: L2ProtocolInformation = L2ProtocolInformation_l2ProtocolFR2427; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_L2ProtocolInformation: $.ASN1Decoder<L2ProtocolInformation> = $._decodeEnumerated;
export const _encode_L2ProtocolInformation: $.ASN1Encoder<L2ProtocolInformation> = $._encodeEnumerated;


/* eslint-enable */
