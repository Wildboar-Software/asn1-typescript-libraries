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
 * @summary MaxCounterSize
 * @description
 *
 * Largest value of an Event Discrimination Counter (EDC), size
 * in octets. Ordering is that of increasing positive integers
 * except `unlimited(0)`, which is largest and means infinite
 * size. Annex C is not an integral part of the rec. ITU-T Rec.
 * X.753 (10/97)
 * [C.3](https://www.itu.int/rec/T-REC-X.753-199710-I), A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxCounterSize  ::=  INTEGER {unlimited(0)}
 * ```
 */
export type MaxCounterSize = INTEGER;

/**
 * @summary MaxCounterSize_unlimited
 * @description
 *
 * Infinite counter size; largest under `maxCounterSize`
 * ordering. ITU-T Rec. X.753 (10/97) C.3.
 *
 * @constant
 * @type {number}
 */
export const MaxCounterSize_unlimited: MaxCounterSize = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MaxCounterSize_unlimited
 * @description
 *
 * Infinite counter size; largest under `maxCounterSize`
 * ordering. ITU-T Rec. X.753 (10/97) C.3.
 *
 * @constant
 * @type {number}
 */
export const unlimited: MaxCounterSize = MaxCounterSize_unlimited; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MaxCounterSize = $._decodeInteger;


export const _encode_MaxCounterSize = $._encodeInteger;


/* eslint-enable */
