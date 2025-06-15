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

/* START_OF_SYMBOL_DEFINITION _enum_for_FailedCase */
/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```@enum {number}
 */
export enum _enum_for_FailedCase {
    lineDisconnected = 0,
    counterOverflow = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FailedCase */

/* START_OF_SYMBOL_DEFINITION FailedCase */
/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```@enum {number}
 */
export type FailedCase = _enum_for_FailedCase;
/* END_OF_SYMBOL_DEFINITION FailedCase */

/* START_OF_SYMBOL_DEFINITION FailedCase */
/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```@enum {number}
 */
export const FailedCase = _enum_for_FailedCase;
/* END_OF_SYMBOL_DEFINITION FailedCase */

/* START_OF_SYMBOL_DEFINITION FailedCase_lineDisconnected */
/**
 * @summary FailedCase_lineDisconnected
 * @constant
 * @type {number}
 */
export const FailedCase_lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FailedCase_lineDisconnected */

/* START_OF_SYMBOL_DEFINITION lineDisconnected */
/**
 * @summary lineDisconnected
 * @constant
 * @type {number}
 */
export const lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION lineDisconnected */

/* START_OF_SYMBOL_DEFINITION FailedCase_counterOverflow */
/**
 * @summary FailedCase_counterOverflow
 * @constant
 * @type {number}
 */
export const FailedCase_counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FailedCase_counterOverflow */

/* START_OF_SYMBOL_DEFINITION counterOverflow */
/**
 * @summary counterOverflow
 * @constant
 * @type {number}
 */
export const counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION counterOverflow */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FailedCase */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FailedCase */

/* START_OF_SYMBOL_DEFINITION _decode_FailedCase */
export const _decode_FailedCase = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_FailedCase */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FailedCase */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FailedCase */

/* START_OF_SYMBOL_DEFINITION _encode_FailedCase */
export const _encode_FailedCase = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_FailedCase */

/* eslint-enable */
