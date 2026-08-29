/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ProtocolIntegrityTestResults
 * @description
 *
 * Cause of an unsuccessful protocol integrity test: wrong
 * PDU received, or expected PDU not received (unacknowledged).
 * Pass/Fail/Timed-out/Premature/Inconclusive still use X.745
 * `testOutcome`; this INTEGER is the additional fail cause.
 * EVENT-INFO / ACTION-REPLY. ITU-T Rec. X.737 (11/95)
 * [§8.1.15](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.5.8, A.5.13,
 * A.5.14, A.6.15.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolIntegrityTestResults  ::=  INTEGER {
 *   wrongPDUResponse(0), pDUResponseNotReceived(1)}
 * ```
 */
export type ProtocolIntegrityTestResults = INTEGER;

/**
 * @summary ProtocolIntegrityTestResults_wrongPDUResponse
 * @description
 *
 * Incorrect PDU received (0). X.737 §8.1.15, §7.5.8.
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_wrongPDUResponse: ProtocolIntegrityTestResults = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtocolIntegrityTestResults_wrongPDUResponse
 * @description
 *
 * Incorrect PDU received (0). X.737 §8.1.15, §7.5.8.
 * @constant
 * @type {number}
 */
export const wrongPDUResponse: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_wrongPDUResponse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @description
 *
 * Expected PDU not received (1). X.737 §8.1.15, §7.5.8.
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_pDUResponseNotReceived: ProtocolIntegrityTestResults = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @description
 *
 * Expected PDU not received (1). X.737 §8.1.15, §7.5.8.
 * @constant
 * @type {number}
 */
export const pDUResponseNotReceived: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_pDUResponseNotReceived; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProtocolIntegrityTestResults = $._decodeInteger;


export const _encode_ProtocolIntegrityTestResults = $._encodeInteger;


/* eslint-enable */
