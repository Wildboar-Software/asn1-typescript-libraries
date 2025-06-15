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

/* START_OF_SYMBOL_DEFINITION FNPDAUDiagnosticField */
/**
 * @summary FNPDAUDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNPDAUDiagnosticField  ::=  INTEGER(1..ub-reason-code)
 * ```
 */
export type FNPDAUDiagnosticField = INTEGER;
/* END_OF_SYMBOL_DEFINITION FNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNPDAUDiagnosticField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _decode_FNPDAUDiagnosticField */
export const _decode_FNPDAUDiagnosticField = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNPDAUDiagnosticField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNPDAUDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _encode_FNPDAUDiagnosticField */
export const _encode_FNPDAUDiagnosticField = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FNPDAUDiagnosticField */

/* eslint-enable */
