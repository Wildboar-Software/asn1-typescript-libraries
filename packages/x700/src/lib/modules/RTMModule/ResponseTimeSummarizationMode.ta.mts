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
 * @summary ResponseTimeSummarizationMode
 * @description
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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeSummarizationMode  ::=  ENUMERATED {
 *   rawResponseTime(0), responseTimePerBit(1)}
 * ```
 *
 * @enum {number}
 */
export const ResponseTimeSummarizationMode = _enum_for_ResponseTimeSummarizationMode;

/**
 * @summary ResponseTimeSummarizationMode_rawResponseTime
 * @constant
 * @type {number}
 */
export const ResponseTimeSummarizationMode_rawResponseTime: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.rawResponseTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rawResponseTime
 * @constant
 * @type {number}
 */
export const rawResponseTime: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.rawResponseTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseTimeSummarizationMode_responseTimePerBit
 * @constant
 * @type {number}
 */
export const ResponseTimeSummarizationMode_responseTimePerBit: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.responseTimePerBit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary responseTimePerBit
 * @constant
 * @type {number}
 */
export const responseTimePerBit: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.responseTimePerBit; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ResponseTimeSummarizationMode = $._decodeEnumerated;


export const _encode_ResponseTimeSummarizationMode = $._encodeEnumerated;


/* eslint-enable */
