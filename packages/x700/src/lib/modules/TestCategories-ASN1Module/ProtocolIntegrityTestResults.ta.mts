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
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_wrongPDUResponse: ProtocolIntegrityTestResults = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtocolIntegrityTestResults_wrongPDUResponse
 * @constant
 * @type {number}
 */
export const wrongPDUResponse: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_wrongPDUResponse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_pDUResponseNotReceived: ProtocolIntegrityTestResults = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @constant
 * @type {number}
 */
export const pDUResponseNotReceived: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_pDUResponseNotReceived; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProtocolIntegrityTestResults = $._decodeInteger;


export const _encode_ProtocolIntegrityTestResults = $._encodeInteger;


/* eslint-enable */
