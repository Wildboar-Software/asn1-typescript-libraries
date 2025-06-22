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
 * @summary Associate_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-result  ::=  INTEGER {accepted(0), reject-permanent(1)}
 * ```
 */
export type Associate_result = INTEGER;

/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const Associate_result_accepted: Associate_result = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const accepted: Associate_result = Associate_result_accepted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_reject_permanent
 * @constant
 * @type {number}
 */
export const Associate_result_reject_permanent: Associate_result = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_result_reject_permanent
 * @constant
 * @type {number}
 */
export const reject_permanent: Associate_result = Associate_result_reject_permanent; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Associate_result = $._decodeInteger;


export const _encode_Associate_result = $._encodeInteger;


/* eslint-enable */
