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

/* START_OF_SYMBOL_DEFINITION NNUserDiagnosticField */
/**
 * @summary NNUserDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUserDiagnosticField  ::=  INTEGER {
 *   compression-unsupported(1) -- the received compression is not supported --
 * }(1..ub-reason-code)
 * ```
 */
export type NNUserDiagnosticField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION NNUserDiagnosticField_compression_unsupported */
/**
 * @summary NNUserDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const NNUserDiagnosticField_compression_unsupported: NNUserDiagnosticField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserDiagnosticField_compression_unsupported */

/* START_OF_SYMBOL_DEFINITION compression_unsupported */
/**
 * @summary NNUserDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const compression_unsupported: NNUserDiagnosticField = NNUserDiagnosticField_compression_unsupported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION compression_unsupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserDiagnosticField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _decode_NNUserDiagnosticField */
export const _decode_NNUserDiagnosticField = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserDiagnosticField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _encode_NNUserDiagnosticField */
export const _encode_NNUserDiagnosticField = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_NNUserDiagnosticField */

/* eslint-enable */
