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
 * @summary AutoDiscardProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoDiscardProblem  ::=  INTEGER {not-obsoleted-by-originator(0)}
 * ```
 */
export type AutoDiscardProblem = INTEGER;

/**
 * @summary AutoDiscardProblem_not_obsoleted_by_originator
 * @constant
 * @type {number}
 */
export const AutoDiscardProblem_not_obsoleted_by_originator: AutoDiscardProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AutoDiscardProblem_not_obsoleted_by_originator
 * @constant
 * @type {number}
 */
export const not_obsoleted_by_originator: AutoDiscardProblem = AutoDiscardProblem_not_obsoleted_by_originator; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AutoDiscardProblem = $._decodeInteger;


export const _encode_AutoDiscardProblem = $._encodeInteger;


/* eslint-enable */
