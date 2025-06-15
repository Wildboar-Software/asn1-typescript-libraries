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

/* START_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField */
/**
 * @summary FNUAMSDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUAMSDiagnosticField  ::=  INTEGER {
 *   -- This field may be used to further specify the error signalled in
 *   -- fn-ua-ms-basic-code.
 *   -- Additional information may be indicated in fn-supplementary-information.
 *   recipient-name-changed(1), recipient-name-deleted(2)}(1..ub-reason-code)
 * ```
 */
export type FNUAMSDiagnosticField = INTEGER;
/* END_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_changed */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_changed
 * @constant
 * @type {number}
 */
export const FNUAMSDiagnosticField_recipient_name_changed: FNUAMSDiagnosticField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_changed */

/* START_OF_SYMBOL_DEFINITION recipient_name_changed */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_changed
 * @constant
 * @type {number}
 */
export const recipient_name_changed: FNUAMSDiagnosticField = FNUAMSDiagnosticField_recipient_name_changed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_name_changed */

/* START_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_deleted */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_deleted
 * @constant
 * @type {number}
 */
export const FNUAMSDiagnosticField_recipient_name_deleted: FNUAMSDiagnosticField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_deleted */

/* START_OF_SYMBOL_DEFINITION recipient_name_deleted */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_deleted
 * @constant
 * @type {number}
 */
export const recipient_name_deleted: FNUAMSDiagnosticField = FNUAMSDiagnosticField_recipient_name_deleted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_name_deleted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSDiagnosticField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUAMSDiagnosticField */
export const _decode_FNUAMSDiagnosticField = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSDiagnosticField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUAMSDiagnosticField */
export const _encode_FNUAMSDiagnosticField = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FNUAMSDiagnosticField */

/* eslint-enable */
