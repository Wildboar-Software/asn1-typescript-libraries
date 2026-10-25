/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_EndReason {
    /**
     * The ASN.1 assigns no comment. Clause 5.2 and annex A do not define
     * this value.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    undefined = 0,
    /**
     * The target logged off. Clause 5.2.3: the CPE negotiates closure with
     * the access provider's NAS. A PPP session may close by an exchange of
     * LCP Terminate packets (IETF RFC 1570 for LCP, IETF RFC 1661 for PPP).
     * The NAS then informs the IAP authentication server and may provide
     * session statistics.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    regularLogoff = 1,
    /**
     * The connection was lost. Clause 5.2.4: during an active session the
     * virtual connection may end without a user logoff, for example loss of
     * carrier or link-quality failure. The NAS detects the loss and reports
     * the closure to the IAP accounting server.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.4.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    connectionLoss = 2,
    /**
     * The connection timed out. Clause 5.2.4 includes expiry of an idle-period
     * timer among unexpected losses. Clause 5.2.6 says this reason may map
     * directly to a network event. It is not the mediation-function expiry
     * reported as `sessionExpired`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.4, clause 5.2.6.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    connectionTimeout = 3,
    /**
     * The DHCP lease expired.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    leaseExpired = 4,
}

/**
 * @summary EndReason
 * @description
 *
 * Why a layer 2 session ended. `L2IRIContents.endReason` carries it.
 * Annex A.1.1 places it on `accessReject`, `accessFailed`, `accessEnd`, and
 * `endOfInterceptionWithSessionActive`. Some of those rows are marked
 * mandatory and still say "if accessible". See that field for the per-event
 * wording.
 *
 * The ellipsis names no further values.
 *
 * The short name `undefined` is not re-exported from the module index,
 * because that short name is also used by `InternetAccessType` and
 * `L2ProtocolInformation`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2, annex A.1.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndReason ::= ENUMERATED
 * {
 *     undefined(0),
 *     regularLogoff(1),
 *         -- The target logged off
 *     connectionLoss(2),
 *         -- The connection was lost
 *     connectionTimeout(3),
 *         -- The connection timed-out
 *     leaseExpired(4),
 *         -- The DHCP lease expired
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EndReason = _enum_for_EndReason | ENUMERATED;

/**
 * @summary EndReason_undefined
 * @description
 *
 * The ASN.1 assigns no comment. Clause 5.2 and annex A do not define this
 * value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EndReason_undefined = _enum_for_EndReason.undefined satisfies EndReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @description
 *
 * The ASN.1 assigns no comment. Clause 5.2 and annex A do not define this
 * value. Not re-exported from the module index: the same short name is used
 * by `InternetAccessType` and `L2ProtocolInformation`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const undefined = EndReason_undefined satisfies EndReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_regularLogoff
 * @description
 *
 * The target logged off. Clause 5.2.3: the CPE negotiates closure with the
 * access provider's NAS. A PPP session may close by an exchange of LCP
 * Terminate packets (IETF RFC 1570 for LCP, IETF RFC 1661 for PPP). The NAS
 * then informs the IAP authentication server and may provide session
 * statistics.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EndReason_regularLogoff = _enum_for_EndReason.regularLogoff satisfies EndReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary regularLogoff
 * @description
 *
 * The target logged off. Clause 5.2.3: the CPE negotiates closure with the
 * access provider's NAS. A PPP session may close by an exchange of LCP
 * Terminate packets (IETF RFC 1570 for LCP, IETF RFC 1661 for PPP). The NAS
 * then informs the IAP authentication server and may provide session
 * statistics.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.3.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const regularLogoff = EndReason_regularLogoff satisfies EndReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionLoss
 * @description
 *
 * The connection was lost. Clause 5.2.4: during an active session the
 * virtual connection may end without a user logoff, for example loss of
 * carrier or link-quality failure. The NAS detects the loss and reports the
 * closure to the IAP accounting server.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.4.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EndReason_connectionLoss = _enum_for_EndReason.connectionLoss satisfies EndReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionLoss
 * @description
 *
 * The connection was lost. Clause 5.2.4: during an active session the
 * virtual connection may end without a user logoff, for example loss of
 * carrier or link-quality failure. The NAS detects the loss and reports the
 * closure to the IAP accounting server.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.4.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const connectionLoss = EndReason_connectionLoss satisfies EndReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionTimeout
 * @description
 *
 * The connection timed out. Clause 5.2.4 includes expiry of an idle-period
 * timer among unexpected losses. Clause 5.2.6 says this reason may map
 * directly to a network event. It is not the mediation-function expiry
 * reported as `sessionExpired`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.4, clause 5.2.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EndReason_connectionTimeout = _enum_for_EndReason.connectionTimeout satisfies EndReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionTimeout
 * @description
 *
 * The connection timed out. Clause 5.2.4 includes expiry of an idle-period
 * timer among unexpected losses. Clause 5.2.6 says this reason may map
 * directly to a network event. It is not the mediation-function expiry
 * reported as `sessionExpired`.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 5.2.4, clause 5.2.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const connectionTimeout = EndReason_connectionTimeout satisfies EndReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_leaseExpired
 * @description
 *
 * The DHCP lease expired.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const EndReason_leaseExpired = _enum_for_EndReason.leaseExpired satisfies EndReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leaseExpired
 * @description
 *
 * The DHCP lease expired.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const leaseExpired = EndReason_leaseExpired satisfies EndReason; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EndReason: $.ASN1Decoder<EndReason> = $._decodeEnumerated;
export const _encode_EndReason: $.ASN1Encoder<EndReason> = $._encodeEnumerated;


/* eslint-enable */
