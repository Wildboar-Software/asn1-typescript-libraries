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
 * @summary ResponseTimeSummarizationMode
 * @description
 *
 * Whether `responseTime` is raw elapsed time (INTEGER) or
 * seconds-per-bit (REAL). ITU-T Rec. X.748 (03/99)
 * [§8.4.15](https://www.itu.int/rec/T-REC-X.748-199903-I),
 * §8.2.4, A.7.
 *
 * - `rawResponseTime` (0): INTEGER elapsed time.
 * - `responseTimePerBit` (1): REAL `(RTraw × 2) / (Ls + Lr)`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeSummarizationMode  ::=  ENUMERATED {
 *   rawResponseTime(0), responseTimePerBit(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ResponseTimeSummarizationMode {
    rawResponseTime = 0,
    responseTimePerBit = 1,
}

/**
 * @summary ResponseTimeSummarizationMode
 * @description
 *
 * Whether `responseTime` is raw elapsed time (INTEGER) or
 * seconds-per-bit (REAL). ITU-T Rec. X.748 (03/99)
 * [§8.4.15](https://www.itu.int/rec/T-REC-X.748-199903-I),
 * §8.2.4, A.7.
 *
 * - `rawResponseTime` (0): INTEGER elapsed time.
 * - `responseTimePerBit` (1): REAL `(RTraw × 2) / (Ls + Lr)`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeSummarizationMode  ::=  ENUMERATED {
 *   rawResponseTime(0), responseTimePerBit(1)}
 * ```
 *
 * @enum {number}
 */
export type ResponseTimeSummarizationMode = _enum_for_ResponseTimeSummarizationMode;

/**
 * @summary ResponseTimeSummarizationMode
 * @description
 *
 * Whether `responseTime` is raw elapsed time (INTEGER) or
 * seconds-per-bit (REAL). ITU-T Rec. X.748 (03/99)
 * [§8.4.15](https://www.itu.int/rec/T-REC-X.748-199903-I),
 * §8.2.4, A.7.
 *
 * - `rawResponseTime` (0): INTEGER elapsed time.
 * - `responseTimePerBit` (1): REAL `(RTraw × 2) / (Ls + Lr)`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeSummarizationMode  ::=  ENUMERATED {
 *   rawResponseTime(0), responseTimePerBit(1)}
 * ```
 *
 * @enum {number}
 */
export const ResponseTimeSummarizationMode: typeof _enum_for_ResponseTimeSummarizationMode = _enum_for_ResponseTimeSummarizationMode;

/**
 * @summary ResponseTimeSummarizationMode_rawResponseTime
 * @description
 *
 * `responseTime` is INTEGER elapsed time. ITU-T Rec. X.748
 * (03/99)
 * [§8.4.15](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const ResponseTimeSummarizationMode_rawResponseTime: _enum_for_ResponseTimeSummarizationMode.rawResponseTime =
    ResponseTimeSummarizationMode.rawResponseTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rawResponseTime
 * @description
 *
 * `responseTime` is INTEGER elapsed time. ITU-T Rec. X.748
 * (03/99)
 * [§8.4.15](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const rawResponseTime: _enum_for_ResponseTimeSummarizationMode.rawResponseTime =
    ResponseTimeSummarizationMode.rawResponseTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseTimeSummarizationMode_responseTimePerBit
 * @description
 *
 * `responseTime` is REAL seconds per bit. ITU-T Rec. X.748
 * (03/99)
 * [§8.4.15](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const ResponseTimeSummarizationMode_responseTimePerBit: _enum_for_ResponseTimeSummarizationMode.responseTimePerBit =
    ResponseTimeSummarizationMode.responseTimePerBit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary responseTimePerBit
 * @description
 *
 * `responseTime` is REAL seconds per bit. ITU-T Rec. X.748
 * (03/99)
 * [§8.4.15](https://www.itu.int/rec/T-REC-X.748-199903-I).
 * @constant
 * @type {number}
 */
export const responseTimePerBit: _enum_for_ResponseTimeSummarizationMode.responseTimePerBit =
    ResponseTimeSummarizationMode.responseTimePerBit; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_ResponseTimeSummarizationMode(el: _Element): ResponseTimeSummarizationMode {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ResponseTimeSummarizationMode.rawResponseTime: return ResponseTimeSummarizationMode.rawResponseTime;
        case ResponseTimeSummarizationMode.responseTimePerBit: return ResponseTimeSummarizationMode.responseTimePerBit;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ResponseTimeSummarizationMode.',
                el,
            );
    }
}


export const _encode_ResponseTimeSummarizationMode: $.ASN1Encoder<ResponseTimeSummarizationMode> = $._encodeEnumerated as $.ASN1Encoder<ResponseTimeSummarizationMode>;


/* eslint-enable */
