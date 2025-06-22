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
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary FNUAMSDiagnosticField_recipient_name_changed
 * @constant
 * @type {number}
 */
export const FNUAMSDiagnosticField_recipient_name_changed: FNUAMSDiagnosticField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSDiagnosticField_recipient_name_changed
 * @constant
 * @type {number}
 */
export const recipient_name_changed: FNUAMSDiagnosticField = FNUAMSDiagnosticField_recipient_name_changed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSDiagnosticField_recipient_name_deleted
 * @constant
 * @type {number}
 */
export const FNUAMSDiagnosticField_recipient_name_deleted: FNUAMSDiagnosticField = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUAMSDiagnosticField_recipient_name_deleted
 * @constant
 * @type {number}
 */
export const recipient_name_deleted: FNUAMSDiagnosticField = FNUAMSDiagnosticField_recipient_name_deleted; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_FNUAMSDiagnosticField = $._decodeInteger;


export const _encode_FNUAMSDiagnosticField = $._encodeInteger;


/* eslint-enable */
