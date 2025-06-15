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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults */
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
/* END_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_wrongPDUResponse */
/**
 * @summary ProtocolIntegrityTestResults_wrongPDUResponse
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_wrongPDUResponse: ProtocolIntegrityTestResults = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_wrongPDUResponse */

/* START_OF_SYMBOL_DEFINITION wrongPDUResponse */
/**
 * @summary ProtocolIntegrityTestResults_wrongPDUResponse
 * @constant
 * @type {number}
 */
export const wrongPDUResponse: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_wrongPDUResponse; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION wrongPDUResponse */

/* START_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_pDUResponseNotReceived */
/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_pDUResponseNotReceived: ProtocolIntegrityTestResults = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_pDUResponseNotReceived */

/* START_OF_SYMBOL_DEFINITION pDUResponseNotReceived */
/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @constant
 * @type {number}
 */
export const pDUResponseNotReceived: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_pDUResponseNotReceived; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pDUResponseNotReceived */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolIntegrityTestResults */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_ProtocolIntegrityTestResults */
export const _decode_ProtocolIntegrityTestResults = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolIntegrityTestResults */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_ProtocolIntegrityTestResults */
export const _encode_ProtocolIntegrityTestResults = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ProtocolIntegrityTestResults */

/* eslint-enable */
