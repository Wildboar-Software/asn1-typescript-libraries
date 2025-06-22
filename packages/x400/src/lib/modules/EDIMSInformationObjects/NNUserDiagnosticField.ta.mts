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

/**
 * @summary NNUserDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const NNUserDiagnosticField_compression_unsupported: NNUserDiagnosticField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const compression_unsupported: NNUserDiagnosticField = NNUserDiagnosticField_compression_unsupported; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NNUserDiagnosticField = $._decodeInteger;


export const _encode_NNUserDiagnosticField = $._encodeInteger;


/* eslint-enable */
