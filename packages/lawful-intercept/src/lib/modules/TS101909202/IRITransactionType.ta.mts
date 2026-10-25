/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRITransactionType
 * @description
 *
 * Role of an IRI record in a transaction. Begin, continue, and end are the
 * three records of one IRI transaction. Report is outside that transaction
 * and is the default on `TARGETACTIVITYMONITOR`.
 *
 * Clause 6.2 classifies signals into those sets. A begin signal prepares an
 * IRI-Begin record, an end signal an IRI-End record, a continue signal an
 * IRI-Continue record, and a signal outside the transaction set an IRI-Report
 * record. The three transaction sets should not overlap. Where a protocol
 * reuses one message type, as SIP does, the message content decides the set.
 * Where the message type itself decides, as DSS1 does, the type is enough.
 *
 * Table 2: begin is the first event of a communication attempt and opens the
 * transaction; continue is any event during the communication or attempt; end
 * closes it; report is for non-communication events.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, clause 6.2,
 * clause 6.4.2.1.6.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITransactionType  ::=  ENUMERATED {
 *     iRIbegin,
 *     iRIcontinue,
 *     iRIend,
 *     iRIreport
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IRITransactionType {
    /**
     * First event of a communication attempt. Opens the IRI transaction and
     * increments `iRITransactionNumber`.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
     * clause 6.4.2.1.7.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     */
    iRIbegin = 0,
    /**
     * An event during a communication or attempt, inside the open
     * transaction. Keeps the transaction number set by `iRIbegin`.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
     * clause 6.4.2.1.7.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     */
    iRIcontinue = 1,
    /**
     * Closes the communication or attempt. Keeps the transaction number set
     * by `iRIbegin`.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
     * clause 6.4.2.1.7.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     */
    iRIend = 2,
    /**
     * A non-communication event. Default record type.
     * `iRITransactionNumber` shall be zero and the receiver should ignore it.
     *
     * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
     * clause 6.4.2, clause 6.4.2.1.7.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
     */
    iRIreport = 3,
}

/**
 * @summary IRITransactionType
 * @description
 *
 * Role of an IRI record in a transaction. Begin, continue, and end are the
 * three records of one IRI transaction. Report is outside that transaction
 * and is the default on `TARGETACTIVITYMONITOR`.
 *
 * Clause 6.2 classifies signals into those sets. A begin signal prepares an
 * IRI-Begin record, an end signal an IRI-End record, a continue signal an
 * IRI-Continue record, and a signal outside the transaction set an IRI-Report
 * record. The three transaction sets should not overlap. Where a protocol
 * reuses one message type, as SIP does, the message content decides the set.
 * Where the message type itself decides, as DSS1 does, the type is enough.
 *
 * Table 2: begin is the first event of a communication attempt and opens the
 * transaction; continue is any event during the communication or attempt; end
 * closes it; report is for non-communication events.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, clause 6.2,
 * clause 6.4.2.1.6.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITransactionType  ::=  ENUMERATED {
 *     iRIbegin,
 *     iRIcontinue,
 *     iRIend,
 *     iRIreport
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRITransactionType = _enum_for_IRITransactionType;

/**
 * @summary IRITransactionType
 * @description
 *
 * Role of an IRI record in a transaction. Begin, continue, and end are the
 * three records of one IRI transaction. Report is outside that transaction
 * and is the default on `TARGETACTIVITYMONITOR`.
 *
 * Clause 6.2 classifies signals into those sets. A begin signal prepares an
 * IRI-Begin record, an end signal an IRI-End record, a continue signal an
 * IRI-Continue record, and a signal outside the transaction set an IRI-Report
 * record. The three transaction sets should not overlap. Where a protocol
 * reuses one message type, as SIP does, the message content decides the set.
 * Where the message type itself decides, as DSS1 does, the type is enough.
 *
 * Table 2: begin is the first event of a communication attempt and opens the
 * transaction; continue is any event during the communication or attempt; end
 * closes it; report is for non-communication events.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, clause 6.2,
 * clause 6.4.2.1.6.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITransactionType  ::=  ENUMERATED {
 *     iRIbegin,
 *     iRIcontinue,
 *     iRIend,
 *     iRIreport
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IRITransactionType = _enum_for_IRITransactionType;

/**
 * @summary IRITransactionType_iRIbegin
 * @description
 *
 * First event of a communication attempt. Opens the IRI transaction and
 * increments `iRITransactionNumber`.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIbegin = IRITransactionType.iRIbegin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIbegin
 * @description
 *
 * First event of a communication attempt. Opens the IRI transaction and
 * increments `iRITransactionNumber`.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIbegin = IRITransactionType.iRIbegin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIcontinue
 * @description
 *
 * An event during a communication or attempt, inside the open transaction.
 * Keeps the transaction number set by `iRIbegin`.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIcontinue = IRITransactionType.iRIcontinue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIcontinue
 * @description
 *
 * An event during a communication or attempt, inside the open transaction.
 * Keeps the transaction number set by `iRIbegin`.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIcontinue = IRITransactionType.iRIcontinue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIend
 * @description
 *
 * Closes the communication or attempt. Keeps the transaction number set by
 * `iRIbegin`.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIend = IRITransactionType.iRIend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIend
 * @description
 *
 * Closes the communication or attempt. Keeps the transaction number set by
 * `iRIbegin`.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIend = IRITransactionType.iRIend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIreport
 * @description
 *
 * A non-communication event. Default record type. `iRITransactionNumber`
 * shall be zero and the receiver should ignore it.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2, clause 6.4.2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIreport = IRITransactionType.iRIreport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIreport
 * @description
 *
 * A non-communication event. Default record type. `iRITransactionNumber`
 * shall be zero and the receiver should ignore it.
 *
 * ETSI TS 101 909-20-2 V1.1.2 (2005-10), clause 6.1, table 2, clause 6.4.2,
 * clause 6.4.2.1.7.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092002/01.01.02_60/ts_1019092002v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIreport = IRITransactionType.iRIreport; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRITransactionType: $.ASN1Decoder<IRITransactionType> = $._decodeEnumerated;
export const _encode_IRITransactionType: $.ASN1Encoder<IRITransactionType> = $._encodeEnumerated;


/* eslint-enable */
