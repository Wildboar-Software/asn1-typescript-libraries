/* eslint-disable */
import {
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
 * @summary ResultReportIndicator
 * @description
 *
 * Whether a resource-boundary result report is required
 * when a sequence of test events passed (case 1 of §7.6.7). ITU-T
 * Rec. X.737 (11/95) [§8.1.19](https://www.itu.int/rec/T-REC-X.737-199511-I),
 * A.6.19.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ResultReportIndicator {
    resultReportForPassedSequences = 0,
    noResultReportForPassedSequences = 1,
}

/**
 * @summary ResultReportIndicator
 * @description
 *
 * Whether a resource-boundary result report is required
 * when a sequence of test events passed (case 1 of §7.6.7). ITU-T
 * Rec. X.737 (11/95) [§8.1.19](https://www.itu.int/rec/T-REC-X.737-199511-I),
 * A.6.19.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```
 *
 * @enum {number}
 */
export type ResultReportIndicator = _enum_for_ResultReportIndicator;

/**
 * @summary ResultReportIndicator
 * @description
 *
 * Whether a resource-boundary result report is required
 * when a sequence of test events passed (case 1 of §7.6.7). ITU-T
 * Rec. X.737 (11/95) [§8.1.19](https://www.itu.int/rec/T-REC-X.737-199511-I),
 * A.6.19.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```
 *
 * @enum {number}
 */
export const ResultReportIndicator: typeof _enum_for_ResultReportIndicator = _enum_for_ResultReportIndicator;

/**
 * @summary ResultReportIndicator_resultReportForPassedSequences
 * @description
 *
 * Emit a report when the sequence passes (0). X.737 §7.6.7 case 1.
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_resultReportForPassedSequences: _enum_for_ResultReportIndicator.resultReportForPassedSequences =
    ResultReportIndicator.resultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resultReportForPassedSequences
 * @description
 *
 * Emit a report when the sequence passes (0). X.737 §7.6.7 case 1.
 * @constant
 * @type {number}
 */
export const resultReportForPassedSequences: _enum_for_ResultReportIndicator.resultReportForPassedSequences =
    ResultReportIndicator.resultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResultReportIndicator_noResultReportForPassedSequences
 * @description
 *
 * Do not report a passed sequence (1). X.737 §8.1.19.
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_noResultReportForPassedSequences: _enum_for_ResultReportIndicator.noResultReportForPassedSequences =
    ResultReportIndicator.noResultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResultReportForPassedSequences
 * @description
 *
 * Do not report a passed sequence (1). X.737 §8.1.19.
 * @constant
 * @type {number}
 */
export const noResultReportForPassedSequences: _enum_for_ResultReportIndicator.noResultReportForPassedSequences =
    ResultReportIndicator.noResultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_ResultReportIndicator(el: _Element): ResultReportIndicator {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ResultReportIndicator.resultReportForPassedSequences: return ResultReportIndicator.resultReportForPassedSequences;
        case ResultReportIndicator.noResultReportForPassedSequences: return ResultReportIndicator.noResultReportForPassedSequences;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ResultReportIndicator.',
                el,
            );
    }
}


export const _encode_ResultReportIndicator: $.ASN1Encoder<ResultReportIndicator> = $._encodeEnumerated as $.ASN1Encoder<ResultReportIndicator>;


/* eslint-enable */
