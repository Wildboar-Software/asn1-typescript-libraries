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
 * @summary RangeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeProblem  ::=  INTEGER {reversed(0)}(0..ub-error-reasons)
 * ```
 */
export type RangeProblem = INTEGER;

/**
 * @summary RangeProblem_reversed
 * @constant
 * @type {number}
 */
export const RangeProblem_reversed: RangeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RangeProblem_reversed
 * @constant
 * @type {number}
 */
export const reversed: RangeProblem = RangeProblem_reversed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RangeProblem = $._decodeInteger;


export const _encode_RangeProblem = $._encodeInteger;


/* eslint-enable */
