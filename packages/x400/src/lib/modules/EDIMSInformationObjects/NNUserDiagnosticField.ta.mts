/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * Defined in ITU-T X.435 (1999) (§8).
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
export const NNUserDiagnosticField_compression_unsupported: 1 = 1 satisfies NNUserDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const compression_unsupported: 1 = NNUserDiagnosticField_compression_unsupported; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NNUserDiagnosticField: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_NNUserDiagnosticField: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
