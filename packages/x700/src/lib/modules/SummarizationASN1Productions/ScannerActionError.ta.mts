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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ScannerActionError
 * @description
 *
 * Specific-error syntax of `scanActionError`
 * (`{summarizationParameter 1}`). Returned when a scan
 * action is not performed: `unspecified`(0);
 * `administrativeStateLocked`(1) — administrative state
 * is locked; `administrativeStateShuttingDown`(2);
 * `scanTerminated`(3) — administrative state was set to
 * locked while the scan was in progress. ITU-T Rec.
 * X.738 (11/93)
 * [§8.4.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.8, Table 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```
 *
 * @enum {number}
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
 * Specific-error syntax of `scanActionError`. Returned
 * when a scan action is not performed:
 * `unspecified`(0); `administrativeStateLocked`(1);
 * `administrativeStateShuttingDown`(2);
 * `scanTerminated`(3). ITU-T Rec. X.738 (11/93)
 * [§8.4.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```
 *
 * @enum {number}
 */
export type ScannerActionError = _enum_for_ScannerActionError;

/**
 * @summary ScannerActionError
 * @description
 *
 * Namespace of `ScannerActionError` enumerators. ITU-T
 * Rec. X.738 (11/93)
 * [§8.4.2](https://www.itu.int/rec/T-REC-X.738-199311-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScannerActionError  ::=  ENUMERATED {
 *   unspecified(0), administrativeStateLocked(1),
 *   administrativeStateShuttingDown(2), scanTerminated(3)}
 * ```
 *
 * @enum {number}
 */
export const ScannerActionError = _enum_for_ScannerActionError;

/**
 * @summary ScannerActionError_unspecified
 * @description
 *
 * The action was not performed for a reason other than
 * the named administrative-state cases. X.738 §8.4.2,
 * A.8.
 *
 * @constant
 * @type {number}
 */
export const ScannerActionError_unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @description
 *
 * The action was not performed for a reason other than
 * the named administrative-state cases. X.738 §8.4.2,
 * A.8.
 *
 * @constant
 * @type {number}
 */
export const unspecified: ScannerActionError =
    ScannerActionError.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScannerActionError_administrativeStateLocked
 * @description
 *
 * The scanner’s administrative state is locked; scan
 * initiation is inhibited. X.738 §8.4.2, Table 1.
 *
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary administrativeStateLocked
 * @description
 *
 * The scanner’s administrative state is locked; scan
 * initiation is inhibited. X.738 §8.4.2, Table 1.
 *
 * @constant
 * @type {number}
 */
export const administrativeStateLocked: ScannerActionError =
    ScannerActionError.administrativeStateLocked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScannerActionError_administrativeStateShuttingDown
 * @description
 *
 * The scanner’s administrative state is shutting down;
 * a new scan action is not accepted. X.738 §8.1.11.3,
 * §8.4.2, Table 1.
 *
 * @constant
 * @type {number}
 */
export const ScannerActionError_administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary administrativeStateShuttingDown
 * @description
 *
 * The scanner’s administrative state is shutting down;
 * a new scan action is not accepted. X.738 §8.1.11.3,
 * §8.4.2, Table 1.
 *
 * @constant
 * @type {number}
 */
export const administrativeStateShuttingDown: ScannerActionError =
    ScannerActionError.administrativeStateShuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScannerActionError_scanTerminated
 * @description
 *
 * A scan already in progress was halted because the
 * administrative state was set to locked. X.738 §8.4.2,
 * A.8, Table 1.
 *
 * @constant
 * @type {number}
 */
export const ScannerActionError_scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scanTerminated
 * @description
 *
 * A scan already in progress was halted because the
 * administrative state was set to locked. X.738 §8.4.2,
 * A.8, Table 1.
 *
 * @constant
 * @type {number}
 */
export const scanTerminated: ScannerActionError =
    ScannerActionError.scanTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ScannerActionError = $._decodeEnumerated;


export const _encode_ScannerActionError = $._encodeEnumerated;


/* eslint-enable */
