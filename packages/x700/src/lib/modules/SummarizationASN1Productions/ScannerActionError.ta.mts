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

/**
 * @summary ScannerActionError_unspecified
 * @constant
 * @type {number}
 */
export const ScannerActionError_unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScannerActionError_administrativeStateLocked
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary administrativeStateLocked
 * @constant
 * @type {number}
 */
export const administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScannerActionError_administrativeStateShuttingDown
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary administrativeStateShuttingDown
 * @constant
 * @type {number}
 */
export const administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScannerActionError_scanTerminated
 * @constant
 * @type {number}
 */
export const ScannerActionError_scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scanTerminated
 * @constant
 * @type {number}
 */
export const scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ScannerActionError = $._decodeEnumerated;


export const _encode_ScannerActionError = $._encodeEnumerated;


/* eslint-enable */
