/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRITransactionType
 * @description
 *
 * Role of an IRI record in an IRI transaction (clause 8.1, table 1).
 * Begin opens a communication attempt, continue is any event inside
 * that attempt, and end closes it. Report is for an event that is not
 * part of a communication. The default on `TARGETACTIVITYMONITOR-1` is
 * `iRIreport`.
 *
 * Clause 8.2 places a signal in begin, end, or continue when it belongs
 * to the transaction set, and in report when it does not. In a small
 * message set such as SIP, the message content decides the set. In
 * DSS1 the message type decides it.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, clause 8.4.2.1.6.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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
     * First event of a communication attempt. Opens the IRI transaction
     * and increments `iRITransactionNumber` (clause 8.4.2.1.7).
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     */
    iRIbegin = 0,
    /**
     * Any event during the communication or attempt, inside the open
     * IRI transaction. Keeps the transaction number from begin.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     */
    iRIcontinue = 1,
    /**
     * End of the communication or attempt. Closes the IRI transaction
     * and keeps the transaction number from begin.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     */
    iRIend = 2,
    /**
     * Event that is not part of a communication. `iRITransactionNumber`
     * is 0 and the receiver should ignore it (clause 8.4.2.1.7).
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
     * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
     */
    iRIreport = 3,
}

/**
 * @summary IRITransactionType
 * @description
 *
 * Role of an IRI record in an IRI transaction (clause 8.1, table 1).
 * Begin opens a communication attempt, continue is any event inside
 * that attempt, and end closes it. Report is for an event that is not
 * part of a communication. The default on `TARGETACTIVITYMONITOR-1` is
 * `iRIreport`.
 *
 * Clause 8.2 places a signal in begin, end, or continue when it belongs
 * to the transaction set, and in report when it does not. In a small
 * message set such as SIP, the message content decides the set. In
 * DSS1 the message type decides it.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, clause 8.4.2.1.6.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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
 * Role of an IRI record in an IRI transaction (clause 8.1, table 1).
 * Begin opens a communication attempt, continue is any event inside
 * that attempt, and end closes it. Report is for an event that is not
 * part of a communication. The default on `TARGETACTIVITYMONITOR-1` is
 * `iRIreport`.
 *
 * Clause 8.2 places a signal in begin, end, or continue when it belongs
 * to the transaction set, and in report when it does not. In a small
 * message set such as SIP, the message content decides the set. In
 * DSS1 the message type decides it.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, clause 8.4.2.1.6.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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
 * First event of a communication attempt. Opens the IRI transaction
 * and increments `iRITransactionNumber` (clause 8.4.2.1.7).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIbegin: IRITransactionType = IRITransactionType.iRIbegin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIbegin
 * @description
 *
 * First event of a communication attempt. Opens the IRI transaction
 * and increments `iRITransactionNumber` (clause 8.4.2.1.7).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIbegin: IRITransactionType = IRITransactionType.iRIbegin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIcontinue
 * @description
 *
 * Any event during the communication or attempt, inside the open
 * IRI transaction. Keeps the transaction number from begin.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIcontinue: IRITransactionType = IRITransactionType.iRIcontinue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIcontinue
 * @description
 *
 * Any event during the communication or attempt, inside the open
 * IRI transaction. Keeps the transaction number from begin.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIcontinue: IRITransactionType = IRITransactionType.iRIcontinue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIend
 * @description
 *
 * End of the communication or attempt. Closes the IRI transaction
 * and keeps the transaction number from begin.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIend: IRITransactionType = IRITransactionType.iRIend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIend
 * @description
 *
 * End of the communication or attempt. Closes the IRI transaction
 * and keeps the transaction number from begin.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIend: IRITransactionType = IRITransactionType.iRIend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIreport
 * @description
 *
 * Event that is not part of a communication. `iRITransactionNumber`
 * is 0 and the receiver should ignore it (clause 8.4.2.1.7).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIreport: IRITransactionType = IRITransactionType.iRIreport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIreport
 * @description
 *
 * Event that is not part of a communication. `iRITransactionNumber`
 * is 0 and the receiver should ignore it (clause 8.4.2.1.7).
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1, table 1.
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @constant
 * @type {number}
 */
export
const iRIreport: IRITransactionType = IRITransactionType.iRIreport; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRITransactionType: $.ASN1Decoder<IRITransactionType> = $._decodeEnumerated;
export const _encode_IRITransactionType: $.ASN1Encoder<IRITransactionType> = $._encodeEnumerated;


/* eslint-enable */
