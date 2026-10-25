/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_L2ProtocolInformation {
    /**
     * L2TP is used (IETF RFC 2661). Clause 5.2.1 gives an L2TP tunnel as the
     * example of the layer 2 tunnel between the user and the IAP. The present
     * document does not say when an IRI-only record uses this value. It
     * matches the `L2CC` alternative `l2TP`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.1, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    l2ProtocolL2tp = 1,
    /**
     * L2F is used (IETF RFC 2341). Annex A.1.0 lists L2F as a tunnel from the
     * access provider's NAS to the IAP. Matches the `L2CC` alternative `l2F`.
     * The present document does not say when an IRI-only record uses this
     * value.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    l2ProtocolL2f = 2,
    /**
     * PPTP is used (IETF RFC 2637). Annex A.1.0 lists PPTP as a tunnel from
     * the access provider's NAS to the IAP. Matches the `L2CC` alternative
     * `pPTP`. The present document does not say when an IRI-only record uses
     * this value.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    l2ProtocolPptp = 3,
    /**
     * PPP is used (IETF RFC 1661). Clause 5.2.3 describes closure of a PPP
     * session with LCP Terminate (IETF RFC 1570). Matches the `L2CC`
     * alternative `pPP`. The present document does not say when an IRI-only
     * record uses this value.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    l2ProtocolPpp = 4,
    /**
     * The Ethernet protocol is used. The specification names no further
     * reference. Matches the `L2CC` alternative `ethernet`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    ethernetProtocol = 5,
    /**
     * The ASN.1 assigns no comment. Clauses 6 and 7 and annex A do not define
     * this value.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    undefined = 6,
    /**
     * IETF RFC 2684, method "LLC Encapsulation for Bridged Protocols". Clause
     * 2.1 marks the corresponding reference [16] void. This value is an
     * extension addition. It matches the `L2CC` alternative `l2ATM2684`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 2.1, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    l2ProtocolATM2684 = 7,
    /**
     * IETF RFC 2427, "Multiprotocol Interconnect over Frame Relay". Clause
     * 2.1 marks the corresponding reference [18] void. This value is an
     * extension addition. It matches the `L2CC` alternative `l2FR2427`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 2.1, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    l2ProtocolFR2427 = 8,
}

/**
 * @summary L2ProtocolInformation
 * @description
 *
 * Layer 2 protocol named by an `L2IRIOnly` record. Clauses 6 and 7 and
 * annex A do not say when a value is chosen. The comments match the
 * non-truncated `L2CC` alternatives, plus `undefined`.
 *
 * `l2ProtocolATM2684` and `l2ProtocolFR2427` are extension additions. There
 * is no value 0.
 *
 * The short name `undefined` is not re-exported from the module index,
 * because `EndReason` and `InternetAccessType` use the same short name.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * @description
 *
 * L2TP is used (IETF RFC 2661). Clause 5.2.1 gives an L2TP tunnel as the
 * example of the layer 2 tunnel between the user and the IAP. The present
 * document does not say when an IRI-only record uses this value. It matches
 * the `L2CC` alternative `l2TP`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolL2tp = _enum_for_L2ProtocolInformation.l2ProtocolL2tp satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolL2tp
 * @description
 *
 * L2TP is used (IETF RFC 2661). Clause 5.2.1 gives an L2TP tunnel as the
 * example of the layer 2 tunnel between the user and the IAP. The present
 * document does not say when an IRI-only record uses this value. It matches
 * the `L2CC` alternative `l2TP`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const l2ProtocolL2tp = L2ProtocolInformation_l2ProtocolL2tp satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolL2f
 * @description
 *
 * L2F is used (IETF RFC 2341). Annex A.1.0 lists L2F as a tunnel from the
 * access provider's NAS to the IAP. Matches the `L2CC` alternative `l2F`.
 * The present document does not say when an IRI-only record uses this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolL2f = _enum_for_L2ProtocolInformation.l2ProtocolL2f satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolL2f
 * @description
 *
 * L2F is used (IETF RFC 2341). Annex A.1.0 lists L2F as a tunnel from the
 * access provider's NAS to the IAP. Matches the `L2CC` alternative `l2F`.
 * The present document does not say when an IRI-only record uses this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const l2ProtocolL2f = L2ProtocolInformation_l2ProtocolL2f satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolPptp
 * @description
 *
 * PPTP is used (IETF RFC 2637). Annex A.1.0 lists PPTP as a tunnel from the
 * access provider's NAS to the IAP. Matches the `L2CC` alternative `pPTP`.
 * The present document does not say when an IRI-only record uses this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolPptp = _enum_for_L2ProtocolInformation.l2ProtocolPptp satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolPptp
 * @description
 *
 * PPTP is used (IETF RFC 2637). Annex A.1.0 lists PPTP as a tunnel from the
 * access provider's NAS to the IAP. Matches the `L2CC` alternative `pPTP`.
 * The present document does not say when an IRI-only record uses this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.0, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const l2ProtocolPptp = L2ProtocolInformation_l2ProtocolPptp satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolPpp
 * @description
 *
 * PPP is used (IETF RFC 1661). Clause 5.2.3 describes closure of a PPP
 * session with LCP Terminate (IETF RFC 1570). Matches the `L2CC` alternative
 * `pPP`. The present document does not say when an IRI-only record uses this
 * value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolPpp = _enum_for_L2ProtocolInformation.l2ProtocolPpp satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolPpp
 * @description
 *
 * PPP is used (IETF RFC 1661). Clause 5.2.3 describes closure of a PPP
 * session with LCP Terminate (IETF RFC 1570). Matches the `L2CC` alternative
 * `pPP`. The present document does not say when an IRI-only record uses this
 * value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const l2ProtocolPpp = L2ProtocolInformation_l2ProtocolPpp satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_ethernetProtocol
 * @description
 *
 * The Ethernet protocol is used. The specification names no further
 * reference. Matches the `L2CC` alternative `ethernet`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_ethernetProtocol = _enum_for_L2ProtocolInformation.ethernetProtocol satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernetProtocol
 * @description
 *
 * The Ethernet protocol is used. The specification names no further
 * reference. Matches the `L2CC` alternative `ethernet`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const ethernetProtocol = L2ProtocolInformation_ethernetProtocol satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_undefined
 * @description
 *
 * The ASN.1 assigns no comment. Clauses 6 and 7 and annex A do not define
 * this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_undefined = _enum_for_L2ProtocolInformation.undefined satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 *
 * The ASN.1 assigns no comment. Clauses 6 and 7 and annex A do not define
 * this value. Not re-exported from the module index: `EndReason` and
 * `InternetAccessType` use the same short name.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const undefined = L2ProtocolInformation_undefined satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolATM2684
 * @description
 *
 * IETF RFC 2684, method "LLC Encapsulation for Bridged Protocols". Clause
 * 2.1 marks the corresponding reference [16] void. This value is an
 * extension addition. It matches the `L2CC` alternative `l2ATM2684`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 2.1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolATM2684 = _enum_for_L2ProtocolInformation.l2ProtocolATM2684 satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolATM2684
 * @description
 *
 * IETF RFC 2684, method "LLC Encapsulation for Bridged Protocols". Clause
 * 2.1 marks the corresponding reference [16] void. This value is an
 * extension addition. It matches the `L2CC` alternative `l2ATM2684`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 2.1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const l2ProtocolATM2684 = L2ProtocolInformation_l2ProtocolATM2684 satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary L2ProtocolInformation_l2ProtocolFR2427
 * @description
 *
 * IETF RFC 2427, "Multiprotocol Interconnect over Frame Relay". Clause 2.1
 * marks the corresponding reference [18] void. This value is an extension
 * addition. It matches the `L2CC` alternative `l2FR2427`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 2.1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const L2ProtocolInformation_l2ProtocolFR2427 = _enum_for_L2ProtocolInformation.l2ProtocolFR2427 satisfies L2ProtocolInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary l2ProtocolFR2427
 * @description
 *
 * IETF RFC 2427, "Multiprotocol Interconnect over Frame Relay". Clause 2.1
 * marks the corresponding reference [18] void. This value is an extension
 * addition. It matches the `L2CC` alternative `l2FR2427`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 2.1, clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const l2ProtocolFR2427 = L2ProtocolInformation_l2ProtocolFR2427 satisfies L2ProtocolInformation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_L2ProtocolInformation: $.ASN1Decoder<L2ProtocolInformation> = $._decodeEnumerated;
export const _encode_L2ProtocolInformation: $.ASN1Encoder<L2ProtocolInformation> = $._encodeEnumerated;


/* eslint-enable */
