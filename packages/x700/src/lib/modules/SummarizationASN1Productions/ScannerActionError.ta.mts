/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_ScannerActionError */
/**
 * @summary ScannerActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```@enum {number}
 */
export enum _enum_for_ScannerActionError {
    unspecified = 0,
    administrativeStateLocked = 1,
    administrativeStateShuttingDown = 2,
    scanTerminated = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION ScannerActionError */
/**
 * @summary ScannerActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```@enum {number}
 */
export type ScannerActionError = _enum_for_ScannerActionError;
/* END_OF_SYMBOL_DEFINITION ScannerActionError */

/* START_OF_SYMBOL_DEFINITION ScannerActionError */
/**
 * @summary ScannerActionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```@enum {number}
 */
export const ScannerActionError = _enum_for_ScannerActionError;
/* END_OF_SYMBOL_DEFINITION ScannerActionError */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_unspecified */
/**
 * @summary ScannerActionError_unspecified
 * @constant
 * @type {number}
 */
export const ScannerActionError_unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateLocked */
/**
 * @summary ScannerActionError_administrativeStateLocked
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateLocked */

/* START_OF_SYMBOL_DEFINITION administrativeStateLocked */
/**
 * @summary administrativeStateLocked
 * @constant
 * @type {number}
 */
export const administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeStateLocked */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateShuttingDown */
/**
 * @summary ScannerActionError_administrativeStateShuttingDown
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_administrativeStateShuttingDown */

/* START_OF_SYMBOL_DEFINITION administrativeStateShuttingDown */
/**
 * @summary administrativeStateShuttingDown
 * @constant
 * @type {number}
 */
export const administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeStateShuttingDown */

/* START_OF_SYMBOL_DEFINITION ScannerActionError_scanTerminated */
/**
 * @summary ScannerActionError_scanTerminated
 * @constant
 * @type {number}
 */
export const ScannerActionError_scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ScannerActionError_scanTerminated */

/* START_OF_SYMBOL_DEFINITION scanTerminated */
/**
 * @summary scanTerminated
 * @constant
 * @type {number}
 */
export const scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION scanTerminated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScannerActionError */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION _decode_ScannerActionError */
export const _decode_ScannerActionError = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScannerActionError */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScannerActionError */

/* START_OF_SYMBOL_DEFINITION _encode_ScannerActionError */
export const _encode_ScannerActionError = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ScannerActionError */

/* eslint-enable */
