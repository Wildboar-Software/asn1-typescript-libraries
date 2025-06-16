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
 * @summary PointDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointDirectionality  ::=  ENUMERATED {sink(1), source(2), bidirectional(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_PointDirectionality {
    sink = 1,
    source = 2,
    bidirectional = 3,
}


/**
 * @summary PointDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointDirectionality  ::=  ENUMERATED {sink(1), source(2), bidirectional(3)}
 * ```
 *
 * @enum {number}
 */
export type PointDirectionality = _enum_for_PointDirectionality;


/**
 * @summary PointDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointDirectionality  ::=  ENUMERATED {sink(1), source(2), bidirectional(3)}
 * ```
 *
 * @enum {number}
 */
export const PointDirectionality = _enum_for_PointDirectionality;


/**
 * @summary PointDirectionality_sink
 * @constant
 * @type {number}
 */
export const PointDirectionality_sink: PointDirectionality =
    PointDirectionality.sink; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sink
 * @constant
 * @type {number}
 */
export const sink: PointDirectionality =
    PointDirectionality.sink; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PointDirectionality_source
 * @constant
 * @type {number}
 */
export const PointDirectionality_source: PointDirectionality =
    PointDirectionality.source; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary source
 * @constant
 * @type {number}
 */
export const source: PointDirectionality =
    PointDirectionality.source; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PointDirectionality_bidirectional
 * @constant
 * @type {number}
 */
export const PointDirectionality_bidirectional: PointDirectionality =
    PointDirectionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: PointDirectionality =
    PointDirectionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_PointDirectionality = $._decodeEnumerated;




export const _encode_PointDirectionality = $._encodeEnumerated;


/* eslint-enable */
